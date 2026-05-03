# Event-Driven KYC Architecture for BNPL

## Background

TikTok's BNPL (Buy Now Pay Later) platform expanded across Southeast Asia — Indonesia, Philippines, Thailand, Malaysia — each market with its own regulatory requirements, business models, and ID document types. Underlying all of them was a single KYC solution service (`pipo.compliance.bnpl`) that had grown into a monolith, accumulating market-specific code over time.

### The Old Architecture

```
BNPL Business Services (ID / PH / TH / MY)
                |
                v
  pipo.compliance.bnpl  ← everything: routing, collection,
                              dedup, callbacks, notification
                |
    ┌───────────┼───────────┐
    v           v           v
  Vendor    KYC Review   Upstream
 Platform   Processor    Services
```

Each new business scenario required engineers to touch the core service — adding country-specific branches, new data collection steps, and new notification paths. The codebase accumulated debt and coupling faster than teams could manage it.

### Core Problems

**1. Static KYC URLs** — the same page URL was served to every user in a given country/model. There was no per-user identity binding, making it impossible to securely validate who was completing which KYC session.

**2. Synchronous notifications** — after a user submitted KYC, the service immediately made a blocking RPC call (`TriggerKYCCaseEvent`) to upstream services. The submission flow was coupled to downstream availability.

**3. Monolithic retry logic** — a background cronjob scanned the entire `kyc_ticket` table to find and retry failed downstream calls. As the table grew, this introduced slow queries and would become unusable with table sharding.

**4. High per-project development cost** — onboarding a new BNPL business scenario took approximately **~15 person-days**, most of which was navigating and extending the existing monolith.

---

## Solution: Modular, Event-Driven Architecture

I rearchitected the system around three principles: **decoupled services**, **async event-driven communication**, and **configuration-driven business scenario support**.

### Architecture Overview

```
BNPL Business Services (ID / PH / TH / MY / ...)
                |
                v
  KYC Solution Service  ← thin orchestrator
  (pipo.compliance.bnpl)   reads configuration (TCC)
        |          |          |
        v          v          v
     RFI/CE    KYC           CIC
    (collect)  Processor   (share data
               (review)    across modules)
        |          |
        v          v
      [MQ]       [MQ]
  kyc_case_   kyc_verification
  creation_       _result
  notification
```

The solution service became a **thin orchestrator**: it manages the KYC ticket lifecycle, reads configuration for routing decisions, and coordinates across decoupled downstream services — without owning business logic.

### Dynamic KYC Ticket System

I designed a `CreateKYCTicket` API that generates a **dynamic, encrypted, per-user KYC URL** rather than a static one:

```
Request:
  CountryCode: "PH"
  BusinessModel: SelfOperation
  UserID: <wallet user ID>
  ApplicationOrderID: <credit application order ID>
  PageCode / StepCode: ...

Response:
  KYCTicketURL: "https://.../pipo_fe/kyc/modular_collector/
                 #entry?ticket=<encrypted_user_session>"
```

The ticket encodes user identity in an encrypted query parameter. Each session is uniquely bound to a user and a credit application, enabling:
- Secure per-user pre-check validation
- Credit application ID de-duplication (idempotent KYC per credit order)
- Re-entry detection when users restart an expired credit application

For the BNPL frontend, the change was seamless — they retrieve a static middle-page URL from the old service, then the middle page calls `CreateKYCTicket` to get the dynamic URL (Approach C).

### Event-Driven Notification

**Before:** KYC case creation triggered a synchronous RPC call to `pipo.wallet.userprod` immediately after DB write.

**After:** Two asynchronous MQ topics replace all synchronous callbacks:

| MQ Topic | Fires When | Consumed By |
|----------|-----------|-------------|
| `kyc_case_creation_notification` | User successfully submits KYC | BNPL upstream services |
| `kyc_verification_result` | KYC review completed | BNPL credit core |

This decouples the submission flow from downstream availability — a slow downstream consumer no longer blocks user-facing KYC submission.

### Reliable Retry Without Table Scans

The old cronjob retry was not scalable. I replaced it with an **event-driven retry pattern**:

Every downstream interaction is tracked in a `kyc_event` table as an append-only event log:

```sql
CREATE TABLE kyc_event (
  kyc_ticket_id  BIGINT,
  event_name     VARCHAR(64),  -- e.g. 'complete_rfi_request'
  event_status   TINYINT,      -- INIT → SUCCESS / FAILED
  attempt_count  INT,
  request_id     VARCHAR(64),
  event_result   TEXT,
  ...
  UNIQUE KEY uniq_request_id_event_name (request_id, event_name)
);
```

If a downstream call fails, the service returns an error to the upstream MQ (`pipo_rfi_notify_msg`), which republishes the message. On the next delivery, the solution service checks `event_status` for the relevant `kyc_ticket_id` and resumes from where it left off — no table scans, no cronjob, shard-safe.

### Configuration-Driven Business Scenarios

New markets and business models are onboarded by:

1. Adding a TCC (Traffic Control Configuration) entry — no service redeployment
2. Specifying the `BusinessModel` enum in the ticket request: `CoBranding`, `RiskSharing`, or `SelfOperation`

The solution service routes each request through the appropriate downstream flow based on configuration, not code branches. For example, adding Thailand self-operation required configuration entries and a small adapter for Thailand-specific data (work address collection) — the core orchestration logic remained unchanged.

### Pre-Check Logic Improvement

The old pre-check validated user age and document type based on raw OCR output — **before** the user had a chance to review or correct the OCR results. This contradicted the product's own editing feature and caused false rejections on OCR errors.

I moved these validations to **after user submission** (against user-confirmed values), and shifted pre-check responsibility to the correct layer: the API boundary where validated data is available.

### Key Data Models

**`kyc_ticket`** — one row per user KYC attempt:

| Column | Purpose |
|--------|---------|
| `application_order_id` | Unique index — credit order ↔ KYC is 1:1 |
| `kyc_ticket_status` | Overall state machine |
| `submitted_count` | Supports re-entry detection |
| `ce_ticket` | Reference to collection engine session |

**`kyc_event`** — append-only event log per ticket:

| Column | Purpose |
|--------|---------|
| `event_name` | e.g., `create_kyc_ticket`, `notify_final_status` |
| `event_status` | `INIT` → `SUCCESS` / `FAILED` |
| `attempt_count` | Retry tracking |
| `event_result` | Full response from downstream, for audit |

---

## Outcome

| Metric | Before | After |
|--------|--------|-------|
| Dev effort per new project | ~15 person-days | ~5 person-days |
| Business projects supported | Constrained by monolith | **15 projects since 2025Q2** |
| KYC URL binding | Static (per country/model) | Dynamic (per user/session) |
| Downstream notification | Synchronous RPC — blocking | Async MQ — decoupled |
| Retry mechanism | Cronjob full-table scan | Event-driven MQ retry — shard-safe |
| Pre-check accuracy | Based on raw OCR | Based on user-confirmed values |

The architecture has supported **15 business projects since 2025Q2** with minimal per-project changes — configuration entries and thin business-specific adapters, rather than core service modifications.

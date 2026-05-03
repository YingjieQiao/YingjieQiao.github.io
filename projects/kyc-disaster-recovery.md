# KYC Vendor Disaster Recovery Framework

## Background

The BNPL KYC platform (serving Indonesia, Philippines, and other SEA markets) relied on multiple third-party identity verification vendors — Jumio, Au10tix, ShuftiPro, GoToFinancial, and others — to process government ID documents. While each document type was backed by at least two vendors, there was no systematic framework for handling outages.

When a vendor went down, the team faced two unanswered questions:

- **When** is a vendor outage severe enough to warrant a switch?
- **Which** vendor should traffic switch to?

Without clear answers, engineers scrambled to diagnose issues and manually update configuration under pressure. Decisions were inconsistent, coordination was slow, and recovery took up to an hour. Meanwhile, users attempting KYC verification were blocked from accessing BNPL credit services.

**MTTR before this project: ~1 hour**

---

## Problem Statement

The team had existing monitoring dashboards and alarms, but no playbook for acting on them. Three failure points compounded the problem:

1. **No defined thresholds** — there was no standard for what constituted an unacceptable outage vs. normal fluctuation
2. **No pre-planned failover targets** — during an incident, engineers had to reason about which vendor to switch to while under pressure
3. **High human dependency** — every failover required multiple engineers, manual TCC edits, code review, and staged releases — processes designed for normal development, not incident response

---

## Solution Architecture

I designed a two-pillar solution: a well-defined failover standard based on observable metrics, and a pre-planned, configuration-driven failover mechanism integrated with PIPO Plan Center (ByteDance's internal disaster recovery system).

### Pillar 1 — Failover Metrics

I analyzed the KYC user journey and defined alarm thresholds at each stage:

| Stage | Metric | Normal | Failover Threshold | Window |
|-------|--------|--------|--------------------|--------|
| Pre-vendor | Backend vendor URL error count | < 10 | > 100 | 15 min |
| Pre-vendor | Backend vendor URL error rate | ~10% | > 10% | 15 min |
| Pre-vendor | Vendor platform error rate | 0–20% | ≥ 30% | 5 min |
| Vendor page | Frontend API error rate | ~2% | ≥ 5% | 10 min |
| Post-vendor | Frontend vendor error rate | 5–18% | ≥ 20% | 30 min |
| Submission | KYC submission error count | < 10 | > 100 | 5 min |
| Submission | KYC submission API error rate | 1–10% | > 25% | 15 min |
| Submission | Overall submission drop vs T-1 | 10–20% | 50% drop | 15 min |

An issue escalates to an incident when > 300 users or > 20% of total active users are impacted. Per-vendor alarms with vendor-specific thresholds were also configured (e.g., ShuftiPro/Jumio trigger at ≥ 25% error, InHouse at ≥ 40%).

### Pillar 2 — Configuration-Driven Failover

I introduced two new TCC (Traffic Control Configuration) keys to enable instant, code-free vendor switching.

**`supported_vendors`** — added to the existing `accepted_id_types` TCC, this field lists all capable vendors per document type, sorted by historical completion rate:

```json
{
  "idType": "ID_CARD",
  "supported_vendors": ["GoToFinancial", "Au10tix", "InHouse", "ShuftiPro", "Jumio"]
}
```

**`unavailable_vendors`** — a new technical TCC I designed, toggled during incidents:

```json
{
  "Au10tix": false,
  "InHouse": false,
  "Jumio": false,
  "ShuftiPro": false,
  "GoToFinancial": false
}
```

One important design consideration: the in-house vendor (InHouse) used Au10tix and ShuftiPro as its underlying OCR/IDV engine at 50:50 split. So if Au10tix went down, 50% of InHouse traffic also became unavailable — marking InHouse as unavailable was also necessary. This dependency was explicitly encoded in the failover SOP.

### Failover Logic in KYC Service

Before routing each OCR request, the KYC service now performs a TCC check:

```
if unavailable_vendors[assigned_vendor] == true:
    select best available vendor from supported_vendors
    (filtering out all vendors flagged in unavailable_vendors)
else:
    proceed with assigned vendor
```

This substitution is completely transparent to upstream BNPL services — no API changes were required on their end.

### End-to-End Failover Flow

```
[Alarm fires — Argos monitoring system]
             |
             v
   On-duty engineer notified via Lark bot
             |
             v
   Engineer reviews alarm dashboard metrics
   (error rate, submission drop, affected user count)
             |
             v
   Threshold met? → Execute pre-planned arrangement
   on PIPO Plan Center (one-click: kyc_vendor_switch_pipo)
             |
             v
   Plan Center updates unavailable_vendors TCC
             |
             v
   KYC service reads updated config on next request
   → routes OCR requests to best available backup vendor
             |
             v
   Monitor dashboards → confirm recovery → declare stop-loss
```

### Pre-Planned Outage Combinations

I enumerated and pre-configured all 6 possible vendor outage combinations on PIPO Plan Center before any incident occurred, so engineers only need to select and execute — no reasoning under pressure, no manual config edits.

---

## Outcome

| Metric | Before | After |
|--------|--------|-------|
| MTTR | ~1 hour | < 15 minutes |
| Decision process | Ad-hoc, senior-judgment-dependent | Threshold-defined, playbook-driven |
| Failover execution | Manual TCC edit + code review + release | Pre-planned one-click on Plan Center |
| Engineer dependency | High | Low (on-duty follows SOP) |

This project **laid the foundation** for a fully automated disaster recovery system later scaled by **10 engineers across 4 teams** using ByteDance's Intelligent Remedy Center (IRC) and Elasticsearch-based real-time vendor metrics.

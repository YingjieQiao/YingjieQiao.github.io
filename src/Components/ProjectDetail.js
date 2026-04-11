import React from "react";
import { Link, useParams } from "react-router-dom";

import styles from "../css/projectDetail.module.css";
import data from "./data";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = data.projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className={styles.page}>
        <Link to="/projects" className={styles.backLink}>
          ← Back to Projects
        </Link>
        <p className={styles.notFound}>Project not found.</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Link to="/projects" className={styles.backLink}>
        ← Back to Projects
      </Link>

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.kicker}>Project</p>
        <h1>{project.name}</h1>
      </section>

      {/* Images */}
      {project.images.length > 0 && (
        <section
          className={
            project.images.length > 1 ? styles.imageGrid : styles.imageSingle
          }
        >
          {project.images.map((image, index) => (
            <div className={styles.imageFrame} key={index}>
              <img src={image} alt={`${project.name} screenshot ${index + 1}`} />
            </div>
          ))}
        </section>
      )}

      {/* Overview */}
      <section className={styles.detailCard}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <ul className={styles.pointerList}>
          {project.pointers.map((pointer, index) => (
            <li key={index}>{pointer}</li>
          ))}
        </ul>
      </section>

      {/* ── Scaffold sections — fill these in later ── */}

      <section className={styles.detailCard}>
        <h2 className={styles.sectionTitle}>Technical Details</h2>
        <p className={styles.placeholder}>
          Architecture, key design decisions, and implementation details go here.
        </p>
      </section>

      <section className={styles.detailCard}>
        <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
        <p className={styles.placeholder}>
          Problems encountered and how they were solved.
        </p>
      </section>

      <section className={styles.detailCard}>
        <h2 className={styles.sectionTitle}>Impact & Outcomes</h2>
        <p className={styles.placeholder}>
          Results, metrics, and what this project achieved.
        </p>
      </section>

      {/* Footer links */}
      {project.code && (
        <div className={styles.cardFooter}>
          <a
            className={styles.sourceLink}
            href={project.code}
            target="_blank"
            rel="noreferrer"
          >
            View source code
          </a>
        </div>
      )}
    </main>
  );
}

export default ProjectDetail;

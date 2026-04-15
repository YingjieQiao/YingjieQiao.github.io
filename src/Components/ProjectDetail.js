import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import styles from "../css/projectDetail.module.css";
import data from "./data";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = data.projects.find((p) => p.id === projectId);

  const [markdown, setMarkdown] = useState(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!project?.markdownFile) return;
    setMarkdown(null);
    setLoadError(false);
    fetch(project.markdownFile)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.text();
      })
      .then(setMarkdown)
      .catch(() => setLoadError(true));
  }, [project]);

  if (!project) {
    return (
      <main className={styles.page}>
        <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>
        <p className={styles.notFound}>Project not found.</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

      <section className={styles.hero}>
        <p className={styles.kicker}>Project</p>
        <h1>{project.name}</h1>
      </section>

      {markdown ? (
        <article className={styles.markdownCard}>
          <ReactMarkdown className={styles.markdown}>{markdown}</ReactMarkdown>
        </article>
      ) : loadError ? (
        <div className={styles.detailCard}>
          <p className={styles.placeholder}>
            Detail write-up coming soon — check back later.
          </p>
        </div>
      ) : project.markdownFile ? (
        <div className={styles.detailCard}>
          <p className={styles.placeholder}>Loading…</p>
        </div>
      ) : (
        <div className={styles.detailCard}>
          <p className={styles.placeholder}>
            Detail write-up coming soon — check back later.
          </p>
        </div>
      )}

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

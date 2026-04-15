import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "../css/projects.module.css";
import data from "./data";

class Projects extends Component {
  render() {
    return (
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Selected Work</p>
          <h1>Projects shaped around practical product problems.</h1>
          <p className={styles.intro}>
            Business projects, technical architecture, and infra toolings.
          </p>
        </section>

        <section className={styles.projectList}>
          {data.projects.map((project, index) => (
            <article className={styles.projectCard} key={project.name}>
              <div className={styles.projectMeta}>
                <span className={styles.projectIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className={styles.cardKicker}>Project</p>
                  <h2>{project.name}</h2>
                </div>
              </div>

              <div
                className={
                  project.images.length > 1 ? styles.imageGrid : styles.imageSingle
                }
              >
                {project.images.map((image, imageIndex) => (
                  <div className={styles.imageFrame} key={`${project.name}-${imageIndex}`}>
                    <img src={image} alt={`${project.name} preview ${imageIndex + 1}`} />
                  </div>
                ))}
              </div>

              <ul className={styles.pointerList}>
                {project.pointers.map((pointer, pointerIndex) => (
                  <li key={`${project.name}-pointer-${pointerIndex}`}>{pointer}</li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <div className={styles.cardLine}></div>
                {(project.name === "Kue" ||
                  project.name === "SingHealth Retail Management Platform") && (
                  <a
                    className={styles.projectLink}
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source code
                  </a>
                )}
                <Link
                  className={styles.detailLink}
                  to={`/projects/${project.id}`}
                >
                  See more details
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    );
  }
}

export default Projects;

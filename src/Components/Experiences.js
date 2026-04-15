import React, { Component } from "react";

import styles from "../css/experiences.module.css";
import data from "./data";

const ExperienceSection = ({ title, items }) => (
  <section className={styles.section}>
    <div className={styles.sectionHeader}>
      <p className={styles.kicker}>Background</p>
      <h2>{title}</h2>
    </div>

    <div className={styles.timeline}>
      {items.map((item, index) => (
        <article className={styles.timelineCard} key={`${title}-${item.name}`}>
          <div className={styles.timelineRail}>
            <span className={styles.timelineDot}></span>
            {index !== items.length - 1 && <span className={styles.timelineLine}></span>}
          </div>

          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div>
                <h3>{item.name}</h3>
                <p className={styles.role}>{item.title}</p>
              </div>
              <p className={styles.meta}>{item.location_and_time}</p>
            </div>

            <ul className={styles.pointerList}>
              {item.pointers.map((pointer, pointerIndex) => (
                <li key={`${item.name}-${pointerIndex}`}>{pointer}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

class Experiences extends Component {
  render() {
    return (
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Experience</p>
          <h1>Work spanning risk systems, OCR platforms, and product tooling.</h1>
          <p className={styles.intro}>
            From startups to crypto and big tech — consistently building scalable backend systems that ship with real impact.
          </p>
        </section>

        <ExperienceSection title="Work Experience" items={data.jobs} />
        <ExperienceSection title="Education" items={data.schools} />
      </main>
    );
  }
}

export default Experiences;

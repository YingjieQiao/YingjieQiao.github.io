import React, { Component } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "../css/home.module.css";
import data from "./data";

class Home extends Component {
  render() {
    return (
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Based in Singapore</p>
            <h1>
              Building reliable software for high-trust, high-scale products.
            </h1>
            <p className={styles.heroIntro}>{data.intro}</p>

            <div className={styles.heroHighlights}>
              <div className={styles.highlightCard}>
                <span className={styles.highlightLabel}>Current focus</span>
                <strong>Risk control and compliance systems</strong>
              </div>
              <div className={styles.highlightCard}>
                <span className={styles.highlightLabel}>Strengths</span>
                <strong>Backend platforms, APIs, automation, cloud systems</strong>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.photoHalo}></div>
            <div className={styles.photoCard}>
              <img src={data.me_img} alt="Yingjie Qiao" />
            </div>

          </div>
        </section>

        <section className={styles.sectionCard}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionKicker}>About</p>
            <h2>Thoughtful engineering with a product mindset</h2>
          </div>
          <p className={styles.sectionBody}>{data.paragraph1}</p>
          <p className={styles.sectionBody}>{data.techstack}</p>
        </section>

        <section className={styles.skillsSection}>
          <div className={styles.skillPanel}>
            <p className={styles.sectionKicker}>Core stack</p>
            <h3>Programming Languages</h3>
            <ul className={styles.skillList}>
              {data.languages.map((language) => (
                <li key={language.name}>{language.name}</li>
              ))}
            </ul>
          </div>

          <div className={styles.skillPanel}>
            <p className={styles.sectionKicker}>Frameworks</p>
            <h3>Web Frameworks</h3>
            <ul className={styles.skillList}>
              {data.web_fw.map((framework) => (
                <li key={framework.name}>{framework.name}</li>
              ))}
            </ul>
          </div>

          <div className={`${styles.skillPanel} ${styles.skillPanelWide}`}>
            <p className={styles.sectionKicker}>Tooling</p>
            <h3>Tools and Technologies</h3>
            <ul className={styles.skillGrid}>
              {data.tools.map((tool) => (
                <li key={tool.name}>{tool.name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div>
            <p className={styles.sectionKicker}>Contact</p>
            <h2>Let&apos;s build something meaningful.</h2>
            <a className={styles.emailLink} href={`mailto:${data.contact_email}`}>
              {data.contact_email}
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a href={`mailto:${data.contact_email}`} aria-label="Send email">
              <FaEnvelope />
            </a>
            <a
              href={data.contact_link[0].url}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={data.contact_link[1].url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Yingjie Qiao
        </footer>
      </main>
    );
  }
}

export default Home;

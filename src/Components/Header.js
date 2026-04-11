import { Component } from "react";
import { NavLink } from "react-router-dom";

import styles from "../css/home.module.css";
import data from "./data";

class Header extends Component {
  render() {
    return (
      <header className={styles.siteHeader}>
        <div className={styles.headerContainer}>
          <NavLink exact to="/" className={styles.brandMark}>
            <img
              src={data.me_img}
              alt={data.name}
              className={styles.brandInitials}
            />
            <div className={styles.brandText}>
              <strong>{data.fullname}</strong>
              <span>Software Engineer</span>
            </div>
          </NavLink>

          <nav className={styles.nav}>
            <NavLink
              exact
              to="/"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Projects
            </NavLink>
            <NavLink
              to="/experiences"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Experience
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

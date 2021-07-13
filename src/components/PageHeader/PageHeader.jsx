import React from "react";
import { Navigation } from "../Navigation/Navigation";
import styles from "./PageHeader.module.scss";
import logo from "../../assets/images/DrBharathLogo.svg";


export const PageHeader = () => {
  return (
    <header className={styles.headerElement}>
      <div className={styles.headerContent}>
        <div className={styles.highlightMessage}>
        </div>
        <div className={styles.headerNavigation}>
          <a href="/" className={styles.doctorLogo}>
            <img src={logo} alt="Go to Home page" />
          </a>
          <Navigation />
        </div>
      </div>
    </header>
  )
};

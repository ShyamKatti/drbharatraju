import React from "react";
import styles from "./CollapsibleSection.module.scss";


export const CollapsibleSection = ({ title, children }) => {
  return (
    <details className={styles.collapsibleSection}>
      <summary className={styles.title}>{title}</summary>
      <hr className={styles.sectionDivider} />
      <div className={styles.hiddenDetails}>{ children }</div>
    </details>
  )
};
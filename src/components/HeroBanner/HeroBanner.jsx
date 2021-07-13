import React from "react";
import styles from "./HeroBanner.module.scss";


export const HeroBanner = ({ imgSrc, altText, title }) => {
  return (
    <div className={styles.heroImageContainer}>
      <img src={imgSrc} alt={altText} />
      <div className={styles.serviceTitle}>{title}
      </div>
    </div>
  )
};
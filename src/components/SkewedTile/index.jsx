import React from "react";
import styles from "./SkewedTile.module.scss";


export const SkewedTile = ({path, linkTitle, imgPath}) => {
  return (
    <a href={path} className={styles.serviceSkewedTile}>
      <div className={styles.inner} style={{backgroundImage: `url(${imgPath})`}}>
      </div>
      <h4 className={styles.serviceTitle}>{linkTitle}</h4>
    </a>
  )
};
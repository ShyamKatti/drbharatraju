import React from "react";
import styles from "./RequestApptBtn.module.scss";

export const RequestApptBtn = ({ actionSrc }) => {
  return (
    <a href={actionSrc} className={styles.ctaLink} target="_blank" rel="noreferrer">book online</a>
  )
};
import React from "react";
import styles from "./FooterNavLink.module.scss";


export const FooterNavLink = ({ linkText, linkPath }) => {
  return (
    <a href={linkPath} className={styles.simpleLink}>{linkText}</a>
  )
};
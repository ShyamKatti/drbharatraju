import React from "react";
import cx from "classnames";
import styles from "./FooterSection.module.scss";


export const FooterSection = ({ sectionTitle, alignment, children }) => {
  console.log(alignment);
  return (
    <div className={alignment === 'row' ?
      cx(styles.footerSection, styles.rowAlignment) :
      cx(styles.footerSection, styles.columnAlignment)}>
      { children }
    </div>
  )
};

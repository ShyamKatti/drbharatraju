import React from "react";
import styles from "./NavButton.module.scss";

export const NavButton = ({ text, path }) => {
  return (
    <a href={path} className={styles.simpleNavBtn}>{text}</a>
  )
};

export const DropdownNavButton = ({ text, listOptions }) => {
  return (
    <div className={styles.dropdownNavBtn}>
      {
        listOptions.map((option) => {
          return (
            <a href={option.path} className={styles.dropdownOption}>{option.text}</a>
          )
        })
      }
    </div>
  )
};
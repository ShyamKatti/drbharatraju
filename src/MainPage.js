import React from "react";
import styles from "./MainPage.module.scss";
import { HomePage } from "./pages/HomePage/HomePage";

const MainPage = () => {
  return (
    <div className={styles.mainSite}>
      <HomePage />
    </div>
  )
};

export default MainPage;
import React from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { PageFooter } from "../PageFooter/PageFooter";
import styles from "./ServiceType.module.scss";


export const ServiceType = ({ children }) => {
  return (
    <div className={styles.serviceTypeContent}>
      <PageHeader />
      { children }
      <PageFooter />
    </div>
  )
};
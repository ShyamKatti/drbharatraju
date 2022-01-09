import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { ServiceTile } from "../../components/Tile/Tile";
import styles from "./ServiceMainPage.module.scss";
import hipJointImg from "../../assets/images/hip_replacement_banner.jpeg";
import kneeJointImg from "../../assets/images/knee_replacemenet_banner.jpeg";
import sportsImg from "../../assets/images/sports_injuries_banner.jpeg";
import arthritisImg from "../../assets/images/arthritis_banner.jpeg";
import fractureImg from "../../assets/images/fracture_treatment_banner.jpeg";


export const ServicesMainPage = () => {
  return (
    <div className={styles.servicesPage}>
      <PageHeader />
      <div className={styles.pageTitle}>
        Conditions & Treatments
      </div>
      <div className={styles.servicesContent}>
        {
          SERVICES.map((content) => {
            return <ServiceTile name={content.name} path={content.path} backgroundImg={content.backgroundImg}/>
          })
        }
      </div>
      <PageFooter />
    </div>
  )
};

const SERVICES = [
  {
    name: 'Hip Replacement',
    path: '/services/hip-replacement',
    backgroundImg: hipJointImg
  },
  {
    name: 'Knee Joint Replacement',
    path: '/services/knee-replacement',
    backgroundImg: kneeJointImg
  },
  {
    name: 'Sports Injuries',
    path: '/services/sports-injury-treatment',
    backgroundImg: sportsImg
  },
  {
    name: 'Arthritis Treatment',
    path: '/services/arthritis-treatment',
    backgroundImg: arthritisImg
  },
  {
    name: 'Fracture Treatment',
    path: '/services/fracture-treatment',
    backgroundImg: fractureImg
  }
];

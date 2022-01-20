import React, { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { ServiceTile } from "../../components/Tile/Tile";
import styles from "./ServiceMainPage.module.scss";
import hipJointImg from "../../assets/images/arthritis_banner.jpeg";
import kneeJointImg from "../../assets/images/knee_replacement_ss.jpeg";
import sportsImg from "../../assets/images/sports_injury_ss.jpeg";
import arthritisImg from "../../assets/images/arthritis_ss.jpeg";
import fractureImg from "../../assets/images/fracture_ss.jpeg";


export const ServicesMainPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

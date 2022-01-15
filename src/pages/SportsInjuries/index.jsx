import React from "react";
import { ServiceType } from "../../components/ServiceType";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import styles from "./SportInjuries.module.scss";
import sportsBanner from "../../assets/images/sports_injury_ss.jpeg";


export const SportsInjuryPage = () => {
    return (
      <ServiceType>
      <div className={styles.bannerContainer}>
        <HeroBanner imgSrc={sportsBanner} altText="Sports Injuries" title="Sport Injury Treatment" />
      </div>
      <div className={styles.sportsInjuryContent}>
        <div className={styles.aboutSection}>
          <p>
            From casual bikers and weekend warriors to best-in-class athletes, anyone can experience injuries.
            If you’ve experienced a sports-related injury or condition, we are here to help get you back to
            doing what you love.
          </p>
        </div>
        <div className={styles.treatmentSection}>
          <p>Some of the sports related injuries that we address: </p>
          <ul className={styles.listItems}>
            <li className={styles.item}>Muscle Sprain</li>
            <li className={styles.item}>Knee Injuries</li>
            <li className={styles.item}>Tennis and Golfer's elbow</li>
            <li className={styles.item}>Fractures and Dislocations</li>
            <li className={styles.item}>Rotator cuff injury</li>
            <li className={styles.item}>Swollen muscles</li>
          </ul>
        </div>
      </div>
    </ServiceType>
    );
};

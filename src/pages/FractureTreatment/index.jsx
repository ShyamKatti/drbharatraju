import React, { useEffect } from "react";
import { ServiceType } from "../../components/ServiceType";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { CollapsibleSection } from "../../components/CollapsibleSection/CollapsibleSection";
import styles from "./Fracture.module.scss";
import fractureBanner from "../../assets/images/fracture_ss.jpeg";

export const FractureTreatmentPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <ServiceType>
      <div className={styles.bannerContainer}>
        <HeroBanner imgSrc={fractureBanner} altText="Fracture Treatment" title="Fracture Treatment" />
      </div>
      <div className={styles.fractureContent}>
        <div className={styles.aboutSection}>
          <p>
            A fracture is a broken bone. It can range from a thin crack to a complete break.
            Most fractures happen when a bone is impacted by more force or pressure than it can support.
          </p>
        </div>
        <div className={styles.symptomsSection}>
          <CollapsibleSection title="Symptoms">
            <p>The most common signs and symptoms of arthritis are:</p>
            <ul className={styles.listItems}>
              <li className={styles.item}>Pain</li>
              <li className={styles.item}>Deformity</li>
              <li className={styles.item}>Swelling</li>
              <li className={styles.item}>Bruising</li>
              <li className={styles.item}>Bleeding</li>
              <li className={styles.item}>Limping</li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.diagnosisSection}>
          <CollapsibleSection title="Diagnosis">
            <ul className={styles.listItems}>
              <li className={styles.item}>Physical examination</li>
              <li className={styles.item}>X-ray</li>
              <li className={styles.item}>CT scan</li>
              <li className={styles.item}>MRI</li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.treatmentSection}>
          <CollapsibleSection title="Treatments">
            <ul className={styles.listItems}>
              <li className={styles.item}>Incomplete, Non-displaced fracture- Immobilisation in a splint or cast.</li>
              <li className={styles.item}>Complete, Displaced fracture-Fixation of fractures using Plate and screws or Rods.</li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.callOutService}>
          <span className={styles.callOutText}>
            Call Today for your Fracture Treatment in Navi Mumbai
          </span>
          <p>
            Call our office at <a href="tel: +022 2774 4239">022 2774 4239</a> or
            <a href="tel: +022 2774 4229"> 022 2774 4229</a> to request your
            consultation with Dr. Bharat Kumar. Come see why so many in Navi Mumbai
            trust their fracture treatment and recovery to Dr. Bharat Kumar! We proudly offer same-day and
            weekend appointments with little wait times. Start your path back to a
            pain-free life today!
          </p>
        </div>
      </div>
    </ServiceType>
  )
};

import React from "react";
import { ServiceType } from "../../components/ServiceType";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { CollapsibleSection } from "../../components/CollapsibleSection/CollapsibleSection";
import styles from "./Arthrits.module.scss";
import arthritisBanner from "../../assets/images/arthritis_banner.jpeg";

export const ArthritisPage = () => {
  return (
    <ServiceType>
      <div className={styles.bannerContainer}>
        <HeroBanner imgSrc={arthritisBanner} altText="Arthritis" title="Arthritis Treatment" />
      </div>
      <div className={styles.arthritisContent}>
        <div className={styles.aboutSection}>
          <p>
            Arthritis means inflammation of the joint. Actually, “arthritis” is not a single disease;
            it is an informal way of referring to joint pain or joint disease.
          </p>
          <p>
            The most common types of arthritis are osteoarthritis and rheumatoid arthritis.
          </p>
        </div>
        <div className={styles.symptomsSection}>
          <CollapsibleSection title="Symptoms">
            <p>The most common signs and symptoms of arthritis are:</p>
            <ul className={styles.listItems}>
              <li className={styles.item}>Pain</li>
              <li className={styles.item}>Stiffness</li>
              <li className={styles.item}>Swelling</li>
              <li className={styles.item}>Redness</li>
              <li className={styles.item}>Decreased range of motion</li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.riskFactorsSection}>
          <CollapsibleSection title="Risk Factors">
            <p>Risk factors for arthritis include:</p>
            <ul className={styles.listItems}>
              <li className={styles.item}>
                <bold>Family history: </bold>
                 Some types of arthritis run in families, so you may be more likely
                to develop arthritis if your parents or siblings have the disorder.
                Your genes can make you more susceptible to environmental factors
                that may trigger arthritis.
              </li>
              <li className={styles.item}>
                <bold>Age: </bold>
                 The risk of many types of arthritis — including osteoarthritis,
                rheumatoid arthritis and gout — increases with age.
              </li>
              <li className={styles.item}>
                <strong>Gender:</strong>
                Women are more likely than men to develop rheumatoid arthritis and osteoarthritis.
              </li>
              <li className={styles.item}>
                <strong>Previous joint injury: </strong>
                People who have injured a joint, perhaps while playing a sport or a fracture are
                more likely to eventually develop arthritis in that joint.
              </li>
              <li className={styles.item}>
                <strong>Obesity: </strong>
                 Carrying excess pounds puts stress on joints, particularly your knees,
                hips and spine. People with obesity have a higher risk of developing arthritis.
              </li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.treatmentSection}>
          <CollapsibleSection title="Treatments">
            <p>
              Although there is no cure for arthritis, there are many treatments available
              that can lessen symptoms and help you lead a more comfortable and active lifestyle.
              These treatments vary depending on the severity of your condition,
              but can include the following:
            </p>
            <ul className={styles.listItems}>
              <li className={styles.item}>Physical therapy</li>
              <li className={styles.item}>Anti-inflammatory medications</li>
              <li className={styles.item}>Surgery</li>
              <li className={styles.item}>Weight loss exercises</li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.callOutService}>
          <span className={styles.callOutText}>
            Call Today for your Arthritis Treatment in Navi Mumbai
          </span>
          <p>
            Call our office at <a href="tel: +022 2774 4239">022 2774 4239</a> or
            <a href="tel: +022 2774 4229"> 022 2774 4229</a> to request your
            consultation with Dr. Bharat Raju. Come see why so many in Navi Mumbai
            trust their arthritis care to Dr. Bharat Raju! We proudly offer same-day and
            weekend appointments with little wait times. Start your path back to a
            pain-free life today!
          </p>
        </div>
      </div>
    </ServiceType>
  )
};
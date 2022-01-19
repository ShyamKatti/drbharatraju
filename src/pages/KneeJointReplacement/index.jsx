import React from "react";
import { ServiceType } from "../../components/ServiceType";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { CollapsibleSection } from "../../components/CollapsibleSection/CollapsibleSection";
import styles from "./KneeJoint.module.scss";
import kneeReplacement from "../../assets/images/knee_replacement_ss_tjxnmw-Square.jpeg";


export const KneeReplacementPage = () => {
  return (
    <ServiceType>
      <div className={styles.bannerContainer}>
        <HeroBanner imgSrc={kneeReplacement} altText="Knee Replacement" title="Knee Replacement" />
      </div>
      <div className={styles.kneeReplacementSection}>
        <div className={styles.aboutSection}>
          <p>
            Knee replacement, also known as knee arthroplasty, is a surgical procedure to replace
            the weight bearing surfaces of the knee joint to relieve pain and disability.
          </p>
          <p>
            Knee replacement surgery can be performed as a partial or total knee replacement.
            In general, the surgery consists of replacing the diseased or damaged joint
            surfaces of the knee with metal and plastic components shaped to allow continued
            motion of the knee.
          </p>
          <p>
            It is most commonly performed for osteoarthritis, and also for other knee
            diseases such as rheumatoid arthritis, psoriatic arthritis, severe deformity
            post trauma and cartilage defects.
          </p>
          <p>The most common age group for knee replacement is between 50-80yrs.</p>
        </div>
        <div className={styles.investigationSection}>
          <CollapsibleSection title="Investigations">
            <p>
              X-rays and CT scan can assist in determining knee damage. We will also run blood tests
              to make sure you are healthy enough to go through the procedure.
            </p>
          </CollapsibleSection>
        </div>
        <div className={styles.preOpSection}>
          <CollapsibleSection title="Pre-operative Management">
            <ul className={styles.listItems}>
              <li className={styles.item}>
                On the day of surgery, you should not eat or drink anything after midnight.
              </li>
              <li className={styles.item}>
                Only take medications that have be agreed upon with our doctor.
              </li>
              <li className={styles.item}>
                It's a good idea to leave any jewelry at home since you will be asked to remove it
                prior to the surgery
              </li>
              <li className={styles.item}>
                The anesthesiologist will meet you prior to operation and will keep you comfortable.
              </li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.postOpSection}>
          <CollapsibleSection title="Post-operative Management">
            <ul className={styles.listItems}>
              <li className={styles.item}>
                Sponge bathe until your dressing change appointment 2 days after surgery.
                Once your dressing has been changed you may shower as long as your incision
                sites are covered with waterproof bandaids. Remove and replace your waterproof
                bandaids daily after bathing.
              </li>
              <li className={styles.item}>
                Do not submerge in a bathtub, hot tub or pool for 4 weeks post operation.
              </li>
              <li className={styles.item}>
                Do not put any ointment or peroxide on the incision sites. Normal drainage appears bloody or like water,
                if there is any abnormal drainage from the incision site please let us know.
              </li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.faqSection}>
          <CollapsibleSection title="FAQs">
            <h3 className={styles.question}>
              Will I need somebody do accompany me home from the hospital?
            </h3>
            <p className={styles.answer}>
              The patient will not be able to drive back from the hospital after the surgery.
              They are advised to bring a friend or family member with them to drive them
              home back from the hospital. Occasionally the surgery center may help provide
              transport to the patient back to home.
            </p>
            <h3 className={styles.question}>
              How soon can I be back to competitive sports after knee arthroscopy?
            </h3>
            <p className={styles.answer}>
              Return to sport is usually depends on the type of surgery that the patient
              has undergone. If the patient has undergone a simple surgery like partial
              meniscectomy, then they may return to physical therapy and sports rehab
              in two to six weeks and may be back to sports in 8 to 10 weeks.
              If the patient has undergone procedures like meniscus repair or
              ligamentous repair or reconstruction, then it may take longer time to
              return to play. The patients with ACL reconstruction may take up to 6
              to 12 months to be able to return to the same level of competitive
              play as they were before the injury.
            </p>
            <h3 className={styles.question}>
              How successful is knee arthroscopic surgery for osteoarthritis?
            </h3>
            <p className={styles.answer}>
              Knee arthroscopic surgery just for osteoarthritis usually has the
              short-term relief in pain and swelling but if the patient has
              complications secondary to arthritis that may be causing the
              worsening of pain, then these patients have good results in pain
              relief as well as improvement in function. Examination along with
              radiological tests like x-ray and MRI are helpful to select such patients.
            </p>
          </CollapsibleSection>
        </div>
      </div>
    </ServiceType>
  )
};

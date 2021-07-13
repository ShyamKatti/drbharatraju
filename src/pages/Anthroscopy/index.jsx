import React from "react";
import { ServiceType } from "../../components/ServiceType";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { CollapsibleSection } from "../../components/CollapsibleSection/CollapsibleSection";
import styles from "./Anthroscopy.module.scss";
import arthBanner from "../../assets/images/arthroscopy_banner.jpeg";


export const Anthroscopy = () => {
  return (
    <ServiceType>
      <div className={styles.bannerContainer}>
        <HeroBanner imgSrc={arthBanner} altText="Arthroscopy" title="Arthroscopy" />
      </div>
      <div className={styles.arthroscopyContent}>
        <div className={styles.aboutSection}>
          <p>
            Arthroscopy (also called arthroscopic or keyhole surgery) is a minimally
            invasive surgical procedure on a joint in which an examination and treatment
            of damage is performed using an arthroscope, an endoscope that is inserted
            into the joint through a small incision.
          </p>
          <p>
            The surgical instruments are smaller than traditional instruments.
            Surgeons view the joint on a video monitor and can diagnose and repair
            torn joint tissue, such as ligaments. It is technically possible to do
            an arthroscopic examination of almost every joint but is most commonly
            used for the knee, shoulder, elbow, wrist, ankle, and hip.
          </p>
        </div>
        <div className={styles.investigationSection}>
          <CollapsibleSection title="Investigations">
            <p>
              A routine X-Ray of the knee, which includes a standing weight-bearing
              view is usually required. An MRI scan which looks at the cartilages and
              soft tissues may be needed if the diagnosis is unclear.
              There is little value in the use of Ultrasound in investigating knee problems.
            </p>
          </CollapsibleSection>
        </div>
        <div className={styles.preOperative }>
          <CollapsibleSection title="Pre-operative Management">
            <ul className={styles.preoperativeMeasures}>
              <li className={styles.item}>
                Please stop taking Aspirin and anti-inflammatory medications 5 days prior to your surgery.
                You can continue taking all your other routine medication.
                If you smoke you are advised to stop a few days prior to your surgery.
              </li>
              <li className={styles.item}>
                You will be admitted on the day of surgery and need to remain fasted for 6 hours
                prior to the procedure.
              </li>
              <li className={styles.item}>
                The limb undergoing the procedure will be marked and identified prior
                to the anesthetic being administered.
              </li>
              <li className={styles.item}>
                Once you are under anesthetic, the knee is prepared in a sterile fashion.
                A tourniquet is placed around the thigh to allow a ‘blood – free’ procedure.
              </li>
              <li className={styles.item}>
                The Arthroscope is introduced through a small (size of a pen) incision
                on the outer side of the knee. A second incision on the inner side of
                the knee is made to introduce the instruments that allow examination
                of the joint and treatment of the problem.
              </li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className={styles.postOperative}>
          <CollapsibleSection title="Post-operative Management">
            <p>You will wake up in the recovery room and then be transferred back to the ward.</p>
            <p>A bandage will be around the operated knee.</p>
            <p>Once you are recovered your IV will be removed and you will be shown a number of exercises to do.</p>
            <p>Your Surgeon will see you prior to discharge and explain the findings of the operation and what was done during surgery.</p>
            <p>Pain medication will be provided and should be taken as directed.</p>
            <p>You can remove the bandage in 24 hours and place waterproof dressings (provided) over the wounds.</p>
            <p>It is NORMAL for the knee to swell after the surgery. Elevating the leg when you are seated and
              placing ice packs on the knee will help to reduce swelling.
              (Ice packs on for 20 min 3-4 times a day until swelling has reduced)
            </p>
            <p>You are able to drive and return to work when comfortable unless otherwise instructed.</p>
            <p>Please make an appointment 7-10 days after surgery to monitor your progress and remove the 2 stitches in your knee.</p>
          </CollapsibleSection>
        </div>
        <div className={styles.faqs}>
          <CollapsibleSection title="FAQs">
            <h3 className={styles.question}>
              How long would I be in the Hospital?
            </h3>
            <p className={styles.answer}>
              Approximately 6-8 hours.
            </p>
            <h3 className={styles.question}>
              Do I need crutches?
            </h3>
            <p className={styles.answer}>
              Usually not required (unless you are having Anterior Cruciate Ligament Reconstruction)
            </p>
            <h3 className={styles.question}>
              When can I drive?
            </h3>
            <p className={styles.answer}>
              After 24 hrs if the knee is comfortable.
            </p>
            <h3 className={styles.question}>
              When can I return to work?
            </h3>
            <p className={styles.answer}>
              When the knee feels reasonably comfortable.
            </p>
            <h3 className={styles.question}>
              How long will my knee take to recover?
            </h3>
            <p className={styles.answer}>
              Depending on the findings and surgery, usually 4 to 6 weeks following the surgery.
            </p>
          </CollapsibleSection>
        </div>
      </div>
    </ServiceType>
  )
};
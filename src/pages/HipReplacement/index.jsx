import React, { useEffect } from "react";
import { ServiceType } from "../../components/ServiceType";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { CollapsibleSection } from "../../components/CollapsibleSection/CollapsibleSection";
import styles from "./HipReplacement.module.scss";
import hipReplaceBanner from "../../assets/images/hip_replacement_banner_zpxkye_square.jpeg";


export const HipReplacementPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <ServiceType>
      <div className={styles.bannerContainer}>
        <HeroBanner imgSrc={hipReplaceBanner} altText="Total Hip Replacement" title="Total Hip Replacement" />
      </div>
      <div className={styles.hipReplacementContent}>
        <div className={styles.aboutSection}>
          <p>
            Total hip replacement is most commonly used to treat joint failure caused by osteoarthritis.
            Other indications include rheumatoid arthritis, certain hip fractures,
            benign and malignant bone tumors.
            The aim of the procedure is pain relief and improvement in hip function.
            Hip replacement is usually considered only after other therapies, such as physical
            therapy and pain medications, have failed.
          </p>
          <p>
            In a total hip replacement (also called total hip arthroplasty), the damaged bone and
            cartilage of hip joint is removed and replaced with prosthetic components.
            Hip replacement surgery is one of the most successful operations in all of medicine.
          </p>
        </div>
        <div className={styles.investigationSection}>
          <CollapsibleSection title="Investigations">
            <p>Before surgery you'll meet with us for an exam where we will:</p>
            <ul className={styles.lisItems}>
              <li className={styles.item}>
                Ask about your medical history and current medications
              </li>
              <li className={styles.item}>
                Examine your hip, paying attention to the range of motion
                in your joint and the strength of the surrounding muscles
              </li>
              <li className={styles.item}>
                Order blood tests, and an X-ray. An MRI is rarely needed
              </li>
            </ul>
            <p>
              During this preoperative evaluation is a good time for you to ask
              questions about the procedure. Be sure to find out which medications
              you should avoid or continue to take in the week before surgery.
            </p>
          </CollapsibleSection>
        </div>
        <div className={styles.preOpSection}>
          <CollapsibleSection title="Pre-operative Management">
            <p>
              Because tobacco use can interfere with healing, stop using tobacco
              products for at least a month before surgery and for at least
              two months after surgery.
            </p>
            <p>
              It is also recommended that you don't have dental work at least two weeks before surgery.
            </p>
            <p>
              Eating a well-balanced diet, consuming an adequate amount of lean protein, and
              increasing your fluid intake will help to reduce the chance of infection after surgery
            </p>
          </CollapsibleSection>
        </div>
        <div className={styles.postOpSection}>
          <CollapsibleSection title="Post-operative Management">
            <p>
              After surgery, you'll be moved to a recovery area for a few hours while
              your anesthesia wears off. Medical staff will monitor your blood
              pressure, pulse, alertness, pain or comfort level, and your need for medications.
            </p>
            <p>
              Some people can go home the same day, but most are admitted to the hospital
              for one or two nights. You'll be asked to breathe deeply, cough or blow
              into a device to help keep fluid out of your lungs.
            </p>
            <p>
              Six to 12 weeks after surgery, you'll have a follow-up appointment
              with us to make sure your hip is healing properly.
              If recovery is progressing well, most people resume at least
              some version of their normal activities by this time. Further
              recovery with improving strength will often occur for six to 12 months.
            </p>
          </CollapsibleSection>
        </div>
        <div className={styles.faqSection}>
          <CollapsibleSection title="FAQs">
            <h3 className={styles.question}>
              How long does the surgery take?
            </h3>
            <p className={styles.answer}>
              We reserve approximately three to three-and-a-half hours
              for pre-operative preparation, surgery and recovery.
            </p>
            <h3 className={styles.question}>
              Will I have pain after surgery?
            </h3>
            <p className={styles.answer}>
              Yes, but we will keep you comfortable with appropriate medication.
              We begin by managing your pain with pills following surgery and
              can give intravenous medication as needed. Your surgeon will
              discuss with you what pain control option is best for you in
              the hospital and at home.
            </p>
            <h3 className={styles.question}>
              Will I need a walker, crutches or cane?
            </h3>
            <p className={styles.answer}>
              Yes. You will start with a walker until your muscle strength returns after surgery.
              Your outpatient physical therapist will advance you to a cane when appropriate.
              Your equipment needs will be determined by the physical therapist and ordered
              for you by the Center for Advanced Joint Replacement care coordinator and
              delivered to you before you leave the hospital.
            </p>
            <h3 className={styles.question}>
              When will I be able to get back to work?
            </h3>
            <p className={styles.answer}>
              We recommend that most people take at least one month off from work,
              even if your job allows you to sit frequently.
              More strenuous jobs will require a longer absence from work.
            </p>
          </CollapsibleSection>
        </div>
      </div>
    </ServiceType>
  );
};

import React from "react"
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import styles from "./AboutMe.module.scss";
import drImg from "../../assets/images/drbharatraju.jpeg";
import aboutMeImg from "../../assets/images/DrBharatKumarSitting_v1.png";


export const AboutMe = () => {
    return (
        <div className={styles.aboutMePage}>
            <PageHeader />
            <div className={styles.aboutMeContainer}>
                <div className={styles.imageContainer}>
                    <img src={aboutMeImg} alt="Dr. Bharat Raju" />
                </div>
                <div className={styles.detailsContainer}>
                    <h3>Meet, Dr. Bharat Kumar!</h3>
                    <span className={styles.qualificationText}>
                        MBBS, D.Ortho, DNB, Fellowship in Arthroplasty
                    </span>
                    <span className={styles.introduction}>
                        Dr G Bharat Kumar is an orthopaedic and joint replacement surgeon,
                        practicing in Navi Mumbai with an experience of 10 years.
                        He is one of the directors at MITR hospital, Kharghar heading
                        orthopaedic department and working as a full time consultant at
                        MGM Hospital, Vashi.
                    </span>
                    <h3>Education</h3>
                    <ul className={styles.educationList}>
                        <li className={styles.listItem}>M.B.B.S from D.Y Patil Medical College, Kolhapur.</li>
                        <li className={styles.listItem}>D. Ortho : Sancheti Institute of Orthopaedics and Rehabilitation, Pune.</li>
                        <li className={styles.listItem}>DNB (Ortho) : Jehangir Hospital, Pune.</li>
                        <li className={styles.listItem}>Fellowship in Arthroplasty with specialisation in computer assisted surgery.</li>
                    </ul>
                    <h3>Accomplishments</h3>
                    <h4>PUBLICATION</h4>
                    <ul className={styles.publicationList}>
                        <li className={styles.listItem}>Midterm Results of LCS Knee: The Indian Experience. Indian Journal of Orthopaedics.</li>
                        <li className={styles.listItem}>
                            Influence of bilateral Sequential Total Knee Arthroplasty on
                            functional recovery Indian Journal of Orthopaedics.</li>
                        <li className={styles.listItem}>Effect of Pre-operative Vitamin D levels on functional performance after Total Knee Arthroplasty.</li>
                        <li className={styles.listItem}>Paper Presentation at WIROC 2012.</li>
                    </ul>
                    <h3>AREAS OF INTEREST</h3>
                    <ul className={styles.interestList}>
                        <li className={styles.listItem}>Total Knee and Hip Arthroplasty.</li>
                        <li className={styles.listItem}>Pelvic-Acetabular Surgery</li>
                        <li className={styles.listItem}>Complex Trauma Surgeries</li>
                    </ul>
                    <h3>MEMBERSHIP</h3>
                    <p className={styles.membershipText}>Member of IOA</p>
                </div>
            </div>
            <PageFooter />
        </div>
    )
};

import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SkewedTile } from "../../components/SkewedTile";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { Carousel } from "../../components/Slider";
import { Desktop, Mobile, TabletDown } from "../../utils/_devices";
import drBharatMobile2 from "../../assets/images/DrBharat_276_255.svg"
import drBharatDesktop from "../../assets/images/drbharat1.jpeg";
import hipJointImg from "../../assets/images/arthritis_banner.jpeg";
import kneeJointImg from "../../assets/images/knee_replacement_ss.jpeg";
import sportsImg from "../../assets/images/sports_injury_ss.jpeg";
import arthritisImg from "../../assets/images/arthritis_ss.jpeg";
import fractureImg from "../../assets/images/fracture_ss.jpeg";
import {ServiceTile} from "../../components/Tile/Tile";
import homePageBanner from "../../assets/images/homepage_banner.jpeg";
import {RequestApptBtn} from "../../components/RequestAppointment/RequestApptBtn";
import Fade from "react-reveal/Fade";


export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className={styles.homePage}>
      <PageHeader />
      <div className={styles.homePageBody}>
        <div className={styles.bannerContainer}>
          <Desktop>
            <div className={styles.row}>
              <div className={styles.leftSide}>
                <Fade left>
                  <div className={styles.treatmentImg}>
                    <img src={homePageBanner} alt="Orthopedic doctor in Navi Mumbai" />
                  </div>
                </Fade>
                <Fade right>
                  <div className={styles.docImg}>
                    <img src={drBharatDesktop} alt="Dr Bharat Kumar, Kharghar" />
                  </div>
                </Fade>
              </div>
              <Fade bottom>
                <div className={styles.rightSide}>
                  <div className={styles.docName}>Orthopedic surgeon in Navi Mumbai</div>
                  <div className={styles.captionSection}>
                  <span className={styles.caption}>
                    We listen.
                  </span>
                    <span className={styles.caption}>
                    We diagnose.
                  </span>
                    <span className={styles.caption}>
                    We care.
                  </span>
                  </div>
                  <div className={styles.actions}>
                    <RequestApptBtn actionSrc="https://payu.in/web/7C18937AD79349CBD7AC6880CF03B066" />
                    <a href="tel:02227744239" className={styles.ctaCall}>
                      call us at: (022) 27744239
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          </Desktop>
          <Mobile>
            <div className={styles.bannerImage}>
              <object data={drBharatMobile2} type="image/svg+xml"></object>
            </div>
            <div className={styles.mobileBannerText}>
              Meet Dr. Bharat Kumar
            </div>
            <div className={styles.mobileActions}>
              <RequestApptBtn actionSrc="https://payu.in/web/7C18937AD79349CBD7AC6880CF03B066" />
              <a href="tel:02227744239" className={styles.ctaCall}>
                call us at: (022) 27744239
              </a>
            </div>
          </Mobile>
          <TabletDown>
            <div className={styles.row}>
              <div className={styles.leftSide}>
                <Fade left>
                  <div className={styles.treatmentImg}>
                    <img src={homePageBanner} alt="Orthopedic doctor in Navi Mumbai" />
                  </div>
                </Fade>
                <Fade right>
                  <div className={styles.docImg}>
                    <img src={drBharatDesktop} alt="Dr Bharat Kumar, Kharghar" />
                  </div>
                </Fade>
              </div>
              <Fade bottom>
                <div className={styles.rightSide}>
                  <div className={styles.docName}>Orthopedic surgeon in Navi Mumbai</div>
                  <div className={styles.captionSection}>
                    <span className={styles.caption}>
                      We listen.
                    </span>
                      <span className={styles.caption}>
                      We diagnose.
                    </span>
                      <span className={styles.caption}>
                      We care.
                    </span>
                  </div>
                  <div className={styles.actions}>
                    <RequestApptBtn actionSrc="https://payu.in/web/7C18937AD79349CBD7AC6880CF03B066" />
                    <a href="tel:02227744239" className={styles.ctaCall}>
                      call us at: (022) 27744239
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          </TabletDown>
        </div>
        <div className={styles.serviceContainer}>
          <h3 className={styles.servicesHeading}>Our Services</h3>
          <Desktop>
            <div className={styles.servicesList}>
              {
                SERVICES.map((service) => {
                  return <SkewedTile path={service.path}
                                     linkTitle={service.name}
                                     imgPath={service.backgroundImg}
                  />
                })
              }
            </div>
          </Desktop>
          <Mobile>
            {
              SERVICES.map((service) => {
                return <ServiceTile name={service.name}
                                    path={service.path}
                                    backgroundImg={service.backgroundImg}/>
              })
            }
          </Mobile>
          <TabletDown>
            {
              SERVICES.map((service) => {
                return <ServiceTile name={service.name}
                                    path={service.path}
                                    backgroundImg={service.backgroundImg}/>
              })
            }
          </TabletDown>
        </div>
        <div className={styles.reviews}>
          <h2 className={styles.reviewTitle} id="reviewTitleId">Your trusted Orthopedic advisor for life.</h2>
          <Carousel reviews={REVIEWS} />
        </div>
        <PageFooter />
      </div>
    </div>
  )
};

const REVIEWS = [
  {
    comment: "The Best orthopedic doctor in Navi Mumbai... He performed knee replacement of my mother and she is recovered very well within 2months ... She performs her work perfectly now... I'm thankful towards Dr. Bharat Kumar and MITR hospital",
    reviewer: "Suraj Gedam"
  },
  {
    comment: "Very professional,accurate diagnosis and highly recommended. My good wishes to Dr Bharat sir",
    reviewer: "Dinesh Yadav"
  },
  {
    comment: "If any one looking for optimum treatment I believe your search ends here, I had a great experience as Dr.Bharat sir's treatment had a quick impact on my knees and brought back those smiles on my face....not just the professional intact but also a connoisseur's care. Thank you sir, I can never forget the way you attend. Thanks a ton.",
    reviewer: "Satyendra Singh"
  },
  {
    comment: "Best hospital in Kharghar. Excellent service and treatment",
    reviewer: "Arvind Sharma "
  },
  {
    comment: "Best Knee Replacement surgeon in Kharghar Navi Mumbai",
    reviewer: "Raghav Singh"
  },
  {
    comment: "Nice experience...very professional... understanding..being on a day off still came to the hospital on my request ..polite... explained me the problem calmly and nicely.. Thank you doctor",
    reviewer: "Dr. Aditi Chaudhary"
  }
];

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

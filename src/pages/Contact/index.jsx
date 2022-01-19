import React from "react"
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import styles from "./Contact.module.scss";
import { MobileIcon } from "../../components/Icon/MobileIcon";
import { LocationIcon } from "../../components/Icon/LocationIcon";
import { TimingIcon } from "../../components/Icon/TimingIcon";


export const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <PageHeader />
            <div className={styles.contactPageContainer}>
                <div className={styles.contactHeadline}>Contact Us</div>
                <div className={styles.contentRow}>
                    <div className={styles.locationDetails}>
                        <div className={styles.locationName}>MITR Hospital, Kharghar</div>
                        <div className={styles.locationPhone}>
                            <div className={styles.phoneIcon}>
                                <MobileIcon width="50px" height="50px"/>
                            </div>
                            <div className={styles.phoneNumber}>
                                Call us at: <a href="tel: 02227744239">(022) 2774 4239</a> or
                                <a href="tel:02227744229"> (022) 2774 4229</a>
                            </div>
                        </div>
                        <div className={styles.locationAddress}>
                            <div className={styles.addressIcon}>
                                <LocationIcon width="50px" height="50px"/>
                            </div>
                            <div className={styles.address}>
                                Plot:37, Eden Garden, Opposite Harmony International School,
                                Sector-5, Kharghar, Navi Mumbai, Maharashtra 410210
                            </div>
                        </div>
                        <div className={styles.locationTiming}>
                            <div className={styles.timingIcon}>
                                <TimingIcon width="50px" height="50px"/>
                            </div>
                            <div className={styles.timing}>
                                Monday-Saturday: 12pm to 2pm and 07:00pm to 09:00pm
                            </div>
                        </div>
                    </div>
                    <div className={styles.locationMap}>
                        <iframe
                            title="Kharghar location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6018039080996!2d73.05630365034598!3d19.03726038704693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c23ec94d877f%3A0x45113b8f9f3eca1a!2sMITR%20Hospital!5e0!3m2!1sen!2sin!4v1626074652598!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{border: "0px"}}
                            allowFullScreen="">
                        </iframe>
                    </div>
                </div>
                <div className={styles.contentRow}>
                    <div className={styles.locationDetails}>
                        <div className={styles.locationName}>MGM Hospital, Vashi</div>
                        <div className={styles.locationPhone}>
                            <div className={styles.phoneIcon}>
                                <MobileIcon width="50px" height="50px"/>
                            </div>
                            <div className={styles.phoneNumber}>
                                Call us at: <a href="tel: 02250666777">(022) 5066 6777</a>
                            </div>
                        </div>
                        <div className={styles.locationAddress}>
                            <div className={styles.addressIcon}>
                                <LocationIcon width="50px" height="50px" />
                            </div>
                            <div className={styles.address}>
                                Plot no - 35, Sector 3, Vashi, Navi Mumbai, Maharashtra 400703
                            </div>
                        </div>
                        <div className={styles.locationTiming}>
                            <div className={styles.timingIcon}>
                                <TimingIcon width="50px" height="50px"/>
                            </div>
                            <div className={styles.timing}>
                                Monday - Saturday: 04:00pm to 06:00pm
                            </div>
                        </div>
                    </div>
                    <div className={styles.locationMap}>
                        <iframe
                            title="Vashi location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796424838721!2d72.99124095034661!3d19.072686187026427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6caa94cef59%3A0xd2977d80d17491e8!2sMGM%20Hospital!5e0!3m2!1sen!2sin!4v1626074736912!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{border: "0px"}}
                            allowFullScreen="">
                        </iframe>
                    </div>
                </div>
                <div className={styles.contentRow}>
                    <div className={styles.locationDetails}>
                        <div className={styles.locationName}>Aayush Hospital, Kalyan</div>
                        <div className={styles.locationPhone}>
                            <div className={styles.phoneIcon}>
                                <MobileIcon width="50px" height="50px"/>
                            </div>
                            <div className={styles.phoneNumber}>
                                Call us at: <a href="tel: 02512231160">(025) 1223 1160</a>
                            </div>
                        </div>
                        <div className={styles.locationAddress}>
                            <div className={styles.addressIcon}>
                                <LocationIcon width="50px" height="50px"/>
                            </div>
                            <div className={styles.address}>
                                Building No. E2, 2nd & 3rd Floor, Radha Nagar Shopping Complex,
                                Radha Nagar, Khadakpada, Kalyan, Mumbai 421301
                            </div>
                        </div>
                        <div className={styles.locationTiming}>
                            <div className={styles.timingIcon}>
                                <TimingIcon width="50px" height="50px"/>
                            </div>
                            <div className={styles.timing}>
                                Only Wednesdays: 11am - 1pm
                            </div>
                        </div>
                    </div>
                    <div className={styles.locationMap}>
                        <iframe
                            title="Kalyan location"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7533.22985029691!2d73.138229!3d19.255607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc95df7b89d248e1!2sAayush%20Hospital!5e0!3m2!1sen!2sin!4v1626075085477!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{border: "0px"}}
                            allowFullScreen="">
                        </iframe>
                    </div>
                </div>
            </div>
            <PageFooter />
        </div>
    )
};

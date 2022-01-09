import React, { useState } from "react";
import {Desktop, Mobile, TabletDown} from "../../utils/_devices";
import styles from "./Navigation.module.scss";
import { NavButton} from "../NavButton/NavButton";
import Icon from "../Icon/Icon";
import {RequestApptBtn} from "../RequestAppointment/RequestApptBtn";

export const Navigation = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const handleNavClick = (event) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <Desktop>
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavButton text="About Me" path="/about-dr-bharat"/>
            </li>
            <li className={styles.navItem}>
              <NavButton text="Services" path="/services" />
            </li>
            <li className={styles.navItem}>
              <NavButton text="Contact" path="/contact" />
            </li>
          </ul>
          <RequestApptBtn actionSrc="https://payu.in/web/7C18937AD79349CBD7AC6880CF03B066"/>
        </nav>
      </Desktop>
      <Mobile>
        <div className={styles.hamburgerMenu}>
          <button onClick={() => handleNavClick()}>
            <Icon name={!isMenuOpen ? "burger" : "close"}/>
          </button>
        </div>
      </Mobile>
      <TabletDown>
        <div className={styles.hamburgerMenu}>
          <button onClick={() => handleNavClick()}>
            <Icon name={!isMenuOpen ? "burger" : "close"}/>
          </button>
        </div>
      </TabletDown>
      {
        isMenuOpen && (
          <div className={styles.hamburgerMenuContent}>
            <nav className={styles.hamburgerNav}>
              <ul className={styles.mobileNavList}>
                <li className={styles.navListItem}>
                  <a href="/about-dr-bharat" className={styles.navLink}>About Me</a>
                </li>
                <li className={styles.navListItem}>
                  <a href="/services" className={styles.navLink}>Services</a>
                </li>
                <li className={styles.navListItem}>
                  <a href="/contact" className={styles.navLink}>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )
      }
    </React.Fragment>
  )
};

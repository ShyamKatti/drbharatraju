import React from "react";
import { Mobile, Desktop } from "../../utils/_devices";
import styles from "./SkewedTile.module.scss";


export const SkewedTile = ({path, linkTitle, imgPath}) => {
  return (
      <React.Fragment>
          <Desktop>
            <a href={path} className={styles.serviceSkewedTile}>
              <div className={styles.inner} style={{backgroundImage: `url(${imgPath})`}}>
              </div>
              <h4 className={styles.serviceTitle}>{linkTitle}</h4>
            </a>
          </Desktop>
          <Mobile>
              <a href={path} className={styles.mobileSkewedTile}>
                  <div className={styles.inner} style={{backgroundImage: `url(${imgPath})`}}>
                  </div>
                  <h4 className={styles.serviceTitle}>{linkTitle}</h4>
              </a>
          </Mobile>
      </React.Fragment>
  )
};

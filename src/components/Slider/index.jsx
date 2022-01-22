import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation} from "swiper";
import "swiper/swiper-bundle.css";
import styles from "./Slider.module.scss";

SwiperCore.use([Navigation]);

export const Carousel = (props) => {
  const { reviews } = props;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (window !== undefined) {
      const titleEl = document.querySelector("#reviewTitleId");
      const viewPortWidth = window.innerWidth;
      if (viewPortWidth < 768) {
        setScreenWidth(window.innerWidth);
      } else if (viewPortWidth === 768) {
        setScreenWidth(window.innerWidth);
      } else if (titleEl) {
        const {width} = titleEl.getBoundingClientRect();
        setScreenWidth(window.innerWidth - width);
      }
    }
  }, []);

  return (
    <Swiper
      navigation
      slideToClickedSlide={true}
      id="review-carousel"
      slidesPerView={1}
      width={screenWidth}
      centeredSlides={true}
    >
      {
        reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={styles.reviewContainer}>
              <div className={styles.review}>
                <span className={styles.textValue}>{review.comment}</span>
                <span className={styles.reviewerName}>- {review.reviewer}</span>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

import React from "react";
import styles from "./Icon.module.scss"

const CloseBtn = ({
  style = {},
  cssProps = "#000",
  width = "100%",
  viewBox = "0 0 24 24"
}) => (
    <svg
      width="24px"
      height="24px"
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconWhiteColor}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        className={styles.iconColor}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.89315 2.4928C3.2837 2.1023 3.91687 2.10234 4.30737 2.49289L12.0002 10.1868L19.692 2.49503C20.0825 2.1045 20.7157 2.1045 21.1062 2.49503C21.4967 2.88555 21.4967 3.51872 21.1062 3.90924L13.4143 11.6011L21.1066 19.2944C21.4971 19.685 21.4971 20.3181 21.1065 20.7086C20.716 21.0991 20.0828 21.0991 19.6923 20.7085L12.0001 13.0153L4.30623 20.7092C3.9157 21.0998 3.28254 21.0998 2.89201 20.7092C2.50149 20.3187 2.50149 19.6856 2.89201 19.295L10.586 11.601L2.89306 3.90701C2.50256 3.51646 2.5026 2.88329 2.89315 2.4928Z"
      />
    </svg>
  );

export default CloseBtn;


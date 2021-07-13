import React from 'react';
import styles from "./Icon.module.scss";

const Hamburger = ({
  style = {},
  width = '20px',
  cssProps = '',
  viewBox = '0 0 20 13',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={styles.iconCtaColor}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Style-Guide"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Various-UI-Elements"
        transform="translate(-418.000000, -911.000000)"
        fill="#00626f"
      >
        <g id="Group" transform="translate(416.000000, 906.000000)">
          <g
            id="np_menu_3491117_000000"
            transform="translate(2.000000, 5.000000)"
          >
            <path className={styles.iconColor}
              d="M19.4740033,12 C19.765123,12 20,12.2239977 20,12.5004679 C20,12.7760047 19.7651205,13 19.4740033,13 L19.4740033,13 L0.525996665,13 C0.234876964,13 0,12.7760023 0,12.5004679 C0,12.2239953 0.234879491,12 0.525996665,12 L0.525996665,12 Z M19.4740033,6 C19.765123,6 20,6.22326849 20,6.5 C20,6.77673151 19.7651205,7 19.4740033,7 L19.4740033,7 L0.525996665,7 C0.234876964,7 0,6.77673151 0,6.5 C0,6.22326849 0.234879491,6 0.525996665,6 L0.525996665,6 Z M19.4740033,0 C19.765123,0 20,0.223997697 20,0.499532138 C20,0.776004703 19.7651205,1 19.4740033,1 L19.4740033,1 L0.525996665,1 C0.234876964,1 0,0.776002303 0,0.499532138 C0,0.223995297 0.234879491,0 0.525996665,0 L0.525996665,0 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Hamburger;

import React from "react";
import styles from "./Tile.module.scss";
import { useHistory } from "react-router-dom";


export const ServiceTile = ({ name, path, backgroundImg }) => {
  const history = useHistory();

  const onClickHandler = (event) => {
    event.stopPropagation();
    history.push(path);
  };

  return (
    <div className={styles.tile}
         style={{backgroundImage: `url(${backgroundImg})`}}
         onClick={onClickHandler}>
      <div className={styles.tile_bg}>
        <h3 className={styles.serviceName}>{name}</h3>
      </div>
    </div>
  )
};
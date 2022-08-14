import React, { useState } from "react";
import styles from "./Listings.module.css";
import defaultLogo from "../../assets/default-logo.jpg";

const Listings = (props) => {
  const {
    card_image,
    description,
    link,
    title,
    categories,
    setActive,
    active,
    id,

    setKeyId,
    keyId,
  } = props;

  return (
    <li className={styles["list-item"]}>
      <img
        onClick={() => {
          setKeyId(id);
          setActive(true);
        }}
        className={styles.image}
        referrerpolicy="no-referrer"
        src={card_image ? card_image : defaultLogo}
        alt={title}
      />
      {active && id === keyId && (
        <div className={styles["pop-up-container"]}>{description} </div>
      )}
    </li>
  );
};

export default Listings;

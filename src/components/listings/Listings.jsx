import React from "react";
import styles from "./Listings.module.css";
import defaultLogo from "../../assets/default-logo.jpg";

const Listings = (props) => {
  const { card_image, description, link, title, categories } = props;
  console.log(props);
  return (
    <li className={styles["list-item"]}>
      <img
        className={styles.image}
        referrerpolicy="no-referrer"
        src={card_image ? card_image : defaultLogo}
        alt={title}
      />
    </li>
  );
};

export default Listings;

import React from "react";
import styles from "./Listings.module.css";
import defaultLogo from "../../assets/default-logo.jpg";
import { BiCategory } from "react-icons/bi";
import { MdOutlineSubtitles } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";

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
  console.log(description);

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
        <div className={styles["pop-up-container"]}>
          {
            <div data-aos="zoom-in-up">
              <h3>
                <strong className={styles["pop-up-header"]}>
                  Category <BiCategory />
                </strong>{" "}
                <br />
                {categories[0]?.name}{" "}
              </h3>
              <p>
                <strong className={styles["pop-up-header"]}>
                  Course title
                  <MdOutlineSubtitles />
                </strong>{" "}
                <br />
                {title}{" "}
              </p>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <p>
                <strong className={styles["pop-up-header"]}>
                  More Information:
                  <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
                    <GoLinkExternal />
                  </a>
                </strong>
              </p>
              <button
                className={styles["pop-up-button"]}
                onClick={() => setActive(false)}
              >
                Close
              </button>
            </div>
          }
        </div>
      )}
    </li>
  );
};

export default Listings;

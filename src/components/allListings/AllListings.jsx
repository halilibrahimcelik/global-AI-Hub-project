import React from "react";
import styles from "./AllListings.module.css";
import defaultLogo from "../../assets/default-logo 2.jpg";

const AllListings = (props) => {
  const { title, setActive, setKeyId, id, active, keyId, content } = props;

  return (
    <li className={styles["list-item"]}>
      <img
        onClick={() => {
          setKeyId(id);
          setActive(true);
        }}
        className={styles.image}
        referrerPolicy="no-referrer"
        src={defaultLogo}
        alt={"all Courses"}
      />
      <p className={styles["list-text"]}>{title.toUpperCase()} </p>
      {active && id === keyId && (
        <div className={styles["pop-up-container"]}>
          {
            <>
              {id === keyId && (
                <div
                  data-aos="flip-down"
                  className={styles.content}
                  dangerouslySetInnerHTML={{
                    __html: content.rendered,
                  }}
                />
              )}
              <button
                className={styles["pop-up-button"]}
                onClick={() => setActive(false)}
              >
                Close
              </button>
            </>
          }
        </div>
      )}
    </li>
  );
};

export default AllListings;

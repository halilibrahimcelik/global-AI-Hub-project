import React, { useState } from "react";
import Listings from "../../components/listings/Listings";
import Spinner from "../../components/spinner/Spinner";
import { useAuthContext } from "../../hook/AuthContext";
import styles from "./MyCourse.module.css";
const MyCourses = () => {
  const { myCourses, allCourses, loading } = useAuthContext();
  const [active, setActive] = useState(false);
  const [keyId, setKeyId] = useState("");
  console.log(myCourses);

  return (
    <section>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ul className={styles.list}>
            {myCourses?.map((course) => {
              const { id } = course;
              return (
                <Listings
                  key={id}
                  {...course}
                  setActive={setActive}
                  active={active}
                  setKeyId={setKeyId}
                  keyId={keyId}
                />
              );
            })}
          </ul>
          <div
            onClick={() => {
              setKeyId("");
              setActive(false);
            }}
            className={
              active
                ? styles["pop-up-container"] + " " + styles.active
                : styles["pop-up-container"]
            }
          ></div>
        </>
      )}
    </section>
  );
};

export default MyCourses;

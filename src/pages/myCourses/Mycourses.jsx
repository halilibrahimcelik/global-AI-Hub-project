import React from "react";
import Listings from "../../components/listings/Listings";
import { useAuthContext } from "../../hook/AuthContext";
import styles from "./MyCourse.module.css";
const MyCourses = () => {
  const { myCourses, allCourses } = useAuthContext();
  console.log(myCourses);

  return (
    <section>
      <ul className={styles.list}>
        {myCourses?.map((course) => {
          const { id } = course;
          return <Listings key={id} {...course} />;
        })}
      </ul>
    </section>
  );
};

export default MyCourses;

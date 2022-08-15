import React from "react";
import Listings from "../../components/listings/Listings";
import { useAuthContext } from "../../hook/AuthContext";
import styles from "./AllCourses.module.css";

const AllCourses = () => {
  const { allCourses } = useAuthContext();
  console.log(allCourses);
  let newLinks = [];
  allCourses.map((course) => {
    const { _links } = course;
    return newLinks.push(_links);
  });
  console.log(newLinks);

  // console.log(xxx?.rendered);
  return (
    <div>
      {/* <div
        // dangerouslySetInnerHTML={{
        //   __html: xxx?.rendered,
        // }}
        dangerouslySetInnerHTML={{
          __html: newStr,
        }}
      /> */}
    </div>
  );
};

export default AllCourses;

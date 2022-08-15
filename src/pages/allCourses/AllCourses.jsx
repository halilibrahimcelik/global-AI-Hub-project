import React, { useEffect, useState } from "react";
import AllListings from "../../components/allListings/AllListings";

import Spinner from "../../components/spinner/Spinner";
import { useAuthContext } from "../../hook/AuthContext";
import styles from "./AllCourses.module.css";

const AllCourses = () => {
  const { allCourses, loading } = useAuthContext();
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [keyId, setKeyId] = useState("");
  const [imgLinks, setImgLink] = useState([]);

  let newLinks = [];

  allCourses.map((course) => {
    const { _links } = course;
    return newLinks.push(_links["wp:attachment"][0].href);
  });

  useEffect(() => {
    const allData = newLinks.map((url) => {
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
        .catch((err) => console.log(err));
    });
    Promise.all(allData).then((data) => setData(data));
    const img_series = data.map((info) => {
      return info[0].source_url;
    });
    setImgLink([...img_series, ...imgLinks]);
  }, []);

  console.log(imgLinks);

  return (
    <section>
      {/* <ul
        // dangerouslySetInnerHTML={{
        //   __html: xxx?.rendered,
        // }}
        dangerouslySetInnerHTML={{
          __html: newStr,
        }}
      /> */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ul className={styles.list}>
            {allCourses?.map((course) => {
              const { id, slug, content } = course;
              return (
                <AllListings
                  key={id}
                  title={slug}
                  imageUrl={imgLinks}
                  // {...course}
                  setActive={setActive}
                  active={active}
                  setKeyId={setKeyId}
                  keyId={keyId}
                  content={content}
                  id={id}
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

export default AllCourses;

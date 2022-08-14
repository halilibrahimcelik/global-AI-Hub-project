import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <nav className={styles.navBar}>
      <ul className={styles["nav-list"]}>
        <li className={pathMatchRoute("/") ? styles.active : null}>
          <Link className={styles["nav-item-logo"]} to="/">
            <img className={styles.logo} src={logo} alt="Global AI HUB logo" />
            <p>
              Global <br /> AI Hub
            </p>
          </Link>
        </li>
        <li className={pathMatchRoute("/my-courses") ? styles.active : null}>
          <Link to="/my-courses">My Courses</Link>
        </li>
        <li className={pathMatchRoute("/all-courses") ? styles.active : null}>
          <Link to="/all-courses">All Courses</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

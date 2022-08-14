import { Routes, Route, BrowserRouter } from "react-router-dom";

import React from "react";
import Home from "../pages/home/Home";
import Mycourses from "../pages/myCourses/Mycourses";
import AllCourses from "../pages/allCourses/AllCourses";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-courses" element={<Mycourses />} />
        <Route path="/all-courses" element={<AllCourses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

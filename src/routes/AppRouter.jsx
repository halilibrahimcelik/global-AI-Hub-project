import { Routes, Route, BrowserRouter } from "react-router-dom";

import React from "react";
import Home from "../pages/home/Home";
import Mycourses from "../pages/myCourses/Mycourses";
import AllCourses from "../pages/allCourses/AllCourses";
import Navbar from "../components/navbar/Navbar";
import Container from "../UI/Container";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-courses" element={<Mycourses />} />
          <Route path="/all-courses" element={<AllCourses />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default AppRouter;

import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import Footer from "../components/Footer";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <div className="holder">
      <Hero />
      <CoursesList />
    </div>
  );
};

export default HomePage;

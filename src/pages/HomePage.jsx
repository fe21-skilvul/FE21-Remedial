import React from "react";
import Hero from "../components/Course/Hero";
import CoursesList from "../components/Course/CourseList";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="holder">
      <Hero />
      <CoursesList />
      <Footer />
    </div>
  );
};

export default HomePage;

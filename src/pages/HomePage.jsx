import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import AboutPage from "./AboutPage";


const HomePage = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      alert("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="holder">
      <Navbar />
      <Hero />
      <CoursesList />
    </div>
  );
};

export default HomePage;

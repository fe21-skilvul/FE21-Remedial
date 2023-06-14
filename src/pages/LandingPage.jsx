import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Class from "../components/Class";
import Carousel from "../components/Carousel";

function LandingPage() {
  return (
    <>
      <Navbar />

      <Hero />
      <Landing />
      <Class />
      <Ratings />
      <Footer />
    </>
  );
}

export default LandingPage;

import React from "react";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Landing from "../components/Landing";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Landing />
      <Ratings />
      <Footer />
    </>
  );
}

export default LandingPage;

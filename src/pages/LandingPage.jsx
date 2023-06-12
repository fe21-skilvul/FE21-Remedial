import React from "react";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Landing from "../components/Landing";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Landing />
      <Ratings />
      <Footer />
    </div>
  );
}

export default LandingPage;

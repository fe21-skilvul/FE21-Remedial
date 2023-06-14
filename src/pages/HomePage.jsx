import React from "react";
import NavbarOut from "../components/NavbarOut";
import Carousel from "../components/Carousel";
import Landing from "../components/Landing";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";
import HeroHome from "../components/HeroHome";

function HomePage() {
  return (
    <div>
      <NavbarOut />
      <HeroHome />
      <Carousel />
      <Landing />
      <Ratings />
      <Footer />
    </div>
  );
}

export default HomePage;

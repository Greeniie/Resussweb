import React, { useEffect } from "react";
import LandingNav from "../components/LandingPage/LandingNav";
import HeroSection from "../components/How_it_works/HeroSection";
import Footer from "../components/LandingPage/Footer";

const How_It_Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <Footer />
    </div>
  );
};

export default How_It_Works;

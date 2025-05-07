import React from "react";
import LandingNav from "../components/LandingPage/LandingNav";
import HeroSection from "../components/About/HeroSection";

const How_It_Works = () => {
  return (
    <div>
      <div className="overflow-y-auto md:block">
        <div className="hidden lg:block mb-[20px]">
          <LandingNav />
        </div>
        <HeroSection />
      </div>
    </div>
  );
};

export default How_It_Works;

import React from "react";
import LandingNav from "../components/LandingPage/LandingNav";
import HeroSection from "../components/About/HeroSection";
import Whoweare from "../components/About/Whoweare";
import Values from "../components/About/Values";
import Footer from "../components/LandingPage/Footer";
import Learnmore from "../components/About/Learnmore";

const About = () => {
  return (
    <div>
      <div className="overflow-y-auto md:block">
        <div className="hidden lg:block mb-[20px]">
          <LandingNav />
        </div>
        <HeroSection />
        <Whoweare/>
        <Values/>
        <Learnmore/>
        <Footer/>
      </div>
    </div>
  );
};

export default About;

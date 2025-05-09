import React from "react";
import LandingNav from "../components/LandingPage/LandingNav";
import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/FAQ/HeroSection";
import FAQlist from "../components/FAQ/FAQlist";
import Learnmore from "../components/About/Learnmore";
import Question from "../components/FAQ/Question";

const FAQ = () => {
  return (
    <div>
      <div className="overflow-y-auto md:block">
        <div className="hidden lg:block mb-[20px]">
          <LandingNav />
        </div>
        <div className="overflow-hidden">
          <HeroSection />
        </div>
        <FAQlist/>
        <Question/>
        <Learnmore/>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;

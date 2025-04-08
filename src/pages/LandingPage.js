import React from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import LandingNav from "../components/LandingNav";
import About from "../components/LandingPage/About";
import Features from "../components/LandingPage/Features";
import Features2 from "../components/LandingPage/Features2";
import Features3 from "../components/LandingPage/Features3";
import FAQ from "../components/LandingPage/FAQ";
import CTA from "../components/LandingPage/CTA";
import Footer from "../components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div>
      <div className="overflow-y-auto md:block">
        <div className="bg-[#EDE8FC] min-h-510px md:max-h-[510px]">
          <LandingNav />
          <HeroSection />
        </div>
        <div>
          <About />
          <Features />
          <Features2 />
          <Features3 />
        </div>
        <div>
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

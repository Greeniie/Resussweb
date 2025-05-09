import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../../assets/images/hero_our-story 1.png";
import resuss from "../../assets/images/Resuss logo - large grey 1.png";
import LandingNav from "../LandingPage/LandingNav";

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div className="bg-[#27C0E861] mt-0 lg:mt-[20px] md:min-h-[500px] relative font-[Inter] z-0">
    <div className="block lg:hidden relative z-30">
      <LandingNav />
    </div>
  
    <div className="block md:flex items-center overflow-hidden">
      <div className="w-full md:w-[95%] lg:w-[90%] mx-auto md:mr-auto">
        <div className="bg-[#E0E8FC] absolute inset-y-0 left-0 w-[279px] lg:block hidden"></div>
  
        <div className="absolute top-0 left-0 lg:left-[278px] z-10">
          <img
            src={resuss}
            alt="resuss"
            className="h-[500px] w-auto object-cover"
          />
        </div>
  
        {/* Desktop + Tablet Headline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="hidden md:block pt-[60px] lg:pt-[0] pl-[140px] relative z-20"
        >
          <div className="px-[10px] py-[2px] text-[14px] rounded-[10px] bg-[#9900FF] w-fit text-white mb-[20px]">
            About us
          </div>
          <div className="pb-[10px] font-semibold text-[32px] lg:text-[50px] text-[#461378] leading-[50px] w-full max-w-[95%] lg:max-w-full">
            Building the future for <br /> African creators in <br /> media
          </div>
        </motion.div>
  
        {/* Mobile Headline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="block w-[85%] mx-auto md:hidden text-left pt-[50px] relative z-20"
        >
          <div className="px-[10px] py-[2px] text-[14px] rounded-[10px] bg-[#9900FF] w-fit text-white mb-[20px]">
            About us
          </div>
          <div className="font-semibold text-[38px] sm:text-[35px] text-[#461378] leading-[40px]">
            Building the <br /> future for <br /> African <br /> creators in <br /> media
          </div>
        </motion.div>
      </div>
  
      {/* Mobile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="overflow-x-hidden block md:hidden relative mt-[80px] w-[95%] mx-auto z-20"
      >
        <img
          src={hero}
          alt="hero"
          className="w-auto h-[270px] sm:h-[270px] object-center object-cover"
        />
      </motion.div>
  
      {/* Desktop + Tablet Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block pt-[60px] lg:pt-[90px] pr-[80px] relative z-10"
      >
        <img
          src={hero}
          alt="hero"
          className="h-auto w-[700px] lg:w-[700px] object-center object-cover"
        />
      </motion.div>
    </div>
  </div>
  
  );
};

export default HeroSection;

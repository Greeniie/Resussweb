import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import how from "../../assets/images/how.png";
import resuss from "../../assets/images/Resuss logo - large grey 1.png";
import LandingNav from "../LandingPage/LandingNav";
import rec2 from "../../assets/images/rec2.png";


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
    <div className="bg-[#E5DFF8] mt-0 lg:mt-[20px] h-[630px] relative font-[Inter] z-0 overflow-x-clip overflow-y-visible mb-[400px] md:mb-0">
      <div>
        <LandingNav />
      </div>

      <div className="block md:grid md:grid-cols-2 pt-[60px]">
        <div className="w-full md:w-[95%] lg:w-[90%] mx-auto md:mr-auto">
          <div className="absolute top-0 left-0 z-[-10]">
            <img
              src={resuss}
              alt="resuss"
              className="h-[500px] w-auto object-cover"
            />
          </div>
          {/* Gradient Overlay to blend */}
          <div className="absolute bottom-[231px] left-0 w-full h-[80px] bg-gradient-to-b from-transparent to-[#F6F2FD] z-10 block md:hidden"></div>

          {/* Bottom image */}
          <div className="absolute bottom-0 left-0 w-full z-10 md:hidden">
            <img
              src={rec2}
              alt="rec"
              className="opacity-90 h-[231px] w-full object-cover block "
            />
          </div>

          {/* Desktop + Tablet Headline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="hidden md:block pl-[140px] relative z-20"
          >
            <div className="px-[10px] py-[2px] text-[14px] rounded-[10px] bg-[#9900FF] w-fit text-white mb-[20px]">
              How it works
            </div>
            <div className="pb-[10px] font-semibold text-[32px]  lg:text-[40px] text-[#330066] leading-[40px] w-[90%] mr-auto">
              How Resuss works for <br /> your creative career
            </div>
            <div className="font-[Roboto] text-[15px] text-[#330066] font-normal pt-[20px] pb-[40px] w-[70%] mr-auto">
              Discover the best collaboration tool in the industry—unlock new
              possibilities for your creative journey today
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="hidden md:block pb-[40px] pl-[20px] md:pl-[140px]"
          >
            <Link
              to="/"
              className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-16 lg:px-24 py-3 md:py-2 rounded-[60px] font-medium text-[16px] lg:text-[18px]"
            >
              See latest updates
            </Link>
          </motion.div>

          {/* Mobile Headline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="block w-[85%] mx-auto md:hidden text-left  relative z-20"
          >
            <div className="px-[10px] py-[2px] text-[14px] rounded-[10px] bg-[#9900FF] w-fit text-white mb-[20px]">
              About us
            </div>
            <div className="font-semibold text-[38px] sm:text-[35px] text-[#461378] leading-[40px]">
            How Resuss  <br /> works for<br /> your creative  <br /> career
              <br /> media
            </div>

            <div className="font-[Roboto] text-[15px]  w-[65%] mr-auto text-[#330066] font-normal pt-[40px]">
              We’ve put together popular questions about our tools and services
              and we are still compiling more based on feedback
            </div>
          </motion.div>
        </div>

        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="overflow-x-hidden block md:hidden relative mt-[20px] w-[95%] mx-auto z-20 "
        >
          <img
            src={how}
            alt="hero"
            className="h-auto w-[500px] sm:w-[500px] object-center object-cover"
          />
        </motion.div>

        {/* Desktop + Tablet Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block  pl-[100px]   relative z-10"
        >
          <img
            src={how}
            alt="hero"
            className="w-auto h-[580px] lg:h-[580px] object-center object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

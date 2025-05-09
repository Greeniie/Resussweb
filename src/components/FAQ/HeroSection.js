import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../../assets/images/hero_our-story 1.png";
import resuss from "../../assets/images/resuss2.png";
import LandingNav from "../LandingPage/LandingNav";
import faqimg from "../../assets/images/FAQ guy 1.png";
import rec from "../../assets/images/rec.png";
import { CaretDownOutlined } from "@ant-design/icons";

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
    <div className="bg-[#6633FF] mt-0 lg:mt-[20px] min-h-[660px] md:min-h-[500px] relative font-[Inter]">
      <div className="block lg:hidden relative z-30">
        <LandingNav />
      </div>

      <div className="block md:grid md:grid-cols-3 overflow-hidden">
        <div className="col-span-2">
          {/* Purple Sidebar */}
          <div className="bg-[#CBB1FF] absolute inset-y-0 left-0 w-[279px] lg:block hidden z-10"></div>

          {/* Gradient Overlay to blend sidebar into image */}
          <div className="absolute top-0 left-[279px] w-[50px] h-full bg-gradient-to-r from-[#CBB1FF] to-transparent z-20 hidden lg:block"></div>

          {/* Top image */}
          <div className="absolute top-[-70px] md:top-0 left-[-30px] lg:left-[279px] z-10">
            <img
              src={resuss}
              alt="resuss"
              className="h-[500px] w-auto object-cover"
            />
          </div>

          {/* Gradient Overlay to blend */}
          <div className="absolute bottom-[231px] left-0 w-full h-[80px] bg-gradient-to-b from-transparent to-[#CBB1FF] z-10 block md:hidden"></div>

          {/* Bottom image */}
          <div className="absolute bottom-0 left-0 w-full z-10 md:hidden">
            <img
              src={rec}
              alt="rec"
              className="opacity-90 h-[231px] w-full object-cover block "
            />
          </div>

          {/* Desktop + Tablet Headline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="hidden md:block pt-[60px] lg:pt-[90px] pl-0 md:pl-[30px]  lg:pl-[140px] relative z-20"
          >
            <div className="px-[10px] py-[2px] text-[14px] rounded-[10px] bg-[#9900FF] w-fit text-white mb-[20px]">
              FAQs
            </div>
            <div className="pb-[10px] font-semibold text-[32px] lg:text-[50px] text-[#fff] leading-[50px] ">
              Have questions <br /> about Resuss? <br /> we have <br /> answers
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
              FAQs
            </div>
            <div className="font-semibold text-[38px] sm:text-[35px] text-[#fff] leading-[40px] pb-[50px]">
              Have <br /> questions
              <br /> about <br /> Resuss?
            </div>

            <div className="font-semibold text-[38px] sm:text-[35px] text-[#fff] leading-[40px] pb-[20px]">
              We have
              <br /> answers
            </div>

            <div className="font-[Roboto] text-[14px]  w-[65%] mr-auto text-[#fff] font-normal pb-[40px]">
              We’ve put together popular questions about our tools and services
              and we are still compiling more based on feedback
            </div>

            <CaretDownOutlined style={{ color: "#fff", fontSize: "28px" }} />
          </motion.div>
        </div>

        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="block md:hidden absolute top-[230px] right-[-70px] z-20"
        >
          <img
            src={faqimg}
            alt="hero"
            className="w-auto h-[550px] sm:h-[550px] object-center object-cover"
          />
        </motion.div>

        {/* Desktop + Tablet Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block pt-[60px] lg:pt-[90px] absolute right-[40%] bottom-[-110px] z-10 overflow-hidden"
        >
          <img
            src={faqimg}
            alt="hero"
            className="w-auto h-[472px] lg:h-[472px] object-center object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block pt-[60px] lg:pt-[200px] relative z-10"
        >
          <div className="font-[Roboto] text-[14px] lg:text-[16px] w-[95%] text-[#fff] w-full md:w-[58%] mr-auto font-normal">
            We’ve put together popular questions about our tools and services
            and we are still compiling more based on feedback
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

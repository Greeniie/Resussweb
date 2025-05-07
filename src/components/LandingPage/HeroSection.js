import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import login1 from "../../assets/images/login1.png";
import StoreButtons1 from "../StoreButtons1";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <div>
      <div className="block md:grid md:grid-cols-3 w-full md:w-[90%] lg:w-[80%] mx-auto relative overflow-x-hidden overflow-y-hidden md:min-h-[700px]">
        <div className="w-full md:w-[95%] lg:w-[90%] mx-auto md:mr-auto relative col-span-2">

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="overflow-x-hidden block md:hidden"
            style={{ zIndex: 9 }}
          >
            <img
              src={login1}
              alt="hero"
              className="w-auto h-[350px] sm:h-[400px] object-center object-cover absolute top-[-80px] right-[-130px]"
            />
          </motion.div>

          {/* Desktop + Tablet Headline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="hidden md:block pb-[10px] font-semibold text-[32px] lg:text-[45px] text-[#461378] pt-[60px] lg:pt-[90px] leading-tight w-full max-w-[95%] lg:max-w-full"
          >
            Find your next job and <br /> elevate your media career
          </motion.div>

          {/* Mobile Headline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="block w-[85%] mx-auto md:hidden text-left font-semibold text-[30px] sm:text-[35px] pt-[150px] text-[#461378] leading-tight"
          >
            Find your next <br /> job and elevate <br /> your career
          </motion.div>

          {/* Desktop + Tablet Subtext */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="pb-[40px] text-[16px] lg:text-[20px] text-[#461378] pt-[10px] font-normal hidden md:block max-w-[95%] lg:max-w-full"
          >
            Discover and be discovered. Unlock earning <br /> opportunities,
            create projects, find talent, and showcase <br /> your exceptional skills
          </motion.div>

          {/* Mobile Subtext */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="pb-[40px] text-[14px] text-left text-[#461378] pt-[10px] font-normal block md:hidden w-[85%] mx-auto"
          >
            Discover and be discovered. Unlock earning opportunities, create
            projects, find talent, and showcase your exceptional skills
          </motion.div>

          {/* Desktop + Tablet Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="hidden md:block pb-[40px]"
          >
            <Link
              to="/create-account"
              className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-16 lg:px-24 py-3 md:py-2 rounded-[60px] font-medium text-[16px] lg:text-[18px]"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="block md:hidden pb-[10px] text-center"
          >
            <Link
              to="/create-account"
              className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-16 sm:px-24 py-3 md:py-2 rounded-[60px] font-medium text-[16px] sm:text-[18px]"
            >
              Get Started
            </Link>
          </motion.div>

          <StoreButtons1 />
        </div>

        {/* Desktop + Tablet Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: "9" }}
          className="absolute top-[-60px] lg:top-[-80px] right-[-60px] lg:right-[-75px] hidden md:block"
        >
          <img
            src={login1}
            alt="hero"
            className="w-auto h-[500px] lg:h-[650px] object-center object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

import React, { useState, useEffect } from "react";
import abtimg1 from "../../assets/menu-icons/abtimg1.png";
import abtimg2 from "../../assets/menu-icons/abtimg2.png";
import abtimg3 from "../../assets/menu-icons/abtimg3.png";
import abtimg4 from "../../assets/menu-icons/abtimg4.png";
import {
  ArrowRightOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const aboutresuss = [
    {
      img: abtimg1,
      info: "Discover and be discovered. Unlock earning opportunities, create projects",
    },
    {
      img: abtimg2,
      info: "Discover and be discovered. Unlock earning opportunities, create projects",
    },
    {
      img: abtimg3,
      info: "Discover and be discovered. Unlock earning opportunities, create projects",
    },
    {
      img: abtimg4,
      info: "Discover and be discovered. Unlock earning opportunities, create projects",
    },
    {
      img: abtimg2,
      info: "Discover and be discovered. Unlock earning opportunities, create projects",
    },
    {
      img: abtimg3,
      info: "Discover and be discovered. Unlock earning opportunities, create projects",
    },
    {
      img: abtimg4,
      info: "Discover and be discovered. Unlock earning opportunities, create projects",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageWidth = isSmallScreen ? "w-[80%]" : "w-[45%]"; // Shrink the width for mobile
  const stepSize = 100 / (isSmallScreen ? 1.5 : 2.5); // Step size for infinite scrolling

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % aboutresuss.length); // Wrap around when reaching the last image
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + aboutresuss.length) % aboutresuss.length); // Wrap around when reaching the first image
  };

  return (
    <div className="pt-[50px] md:pt-[150px] w-[85%] mx-auto">
      <div className="text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-[30px] md:text-[35px] text-[#461378] font-medium leading-[30px] pb-[10px]"
        >
          Everything you need to grow{" "}
          <span className="text-[#4FD6FA]">your career</span>
        </motion.div>
        <motion.div  variants={fadeInUp}
          initial="hidden"
          animate="visible" className="pt-[10px] text-[16px] md:text-[20px] text-[#898A8D] pb-[30px] md:text-center w-full md:w-[70%] mx-auto">
          Resuss is a professional platform that brings valuable tools that
          empowers producers/ creators and talent, allowing seamless
          collaborative success.
        </motion.div>
      </div>
      <div className="hidden md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16 py-10 mb-[130px]">
        {aboutresuss.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border rounded-xl border-[#ABB0BA] p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-start mb-4">
              <img
                src={item.img}
                alt={`about-img-${index}`}
                className="h-[45px] w-auto object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 flex-grow">
              <p className="text-[#333] text-sm sm:text-base">{item.info}</p>
            </div>

            <div className="flex justify-end mt-4">
              <ArrowRightOutlined className="text-[#ABB0BA] text-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="relative w-full overflow-hidden block md:hidden mx-auto">
        <motion.div
          className="flex flex-nowrap transition-transform duration-500"
          animate={{ x: `-${index * 66.666}%` }} // Shift by 1.5-item width
          drag="x"
          dragConstraints={{ left: 0, right: 0 }} // allow free swiping
          onDragEnd={(event, info) => {
            const swipePower = Math.abs(info.offset.x) * info.velocity.x;

            // You can tweak this number based on the feel you want
            if (swipePower < -200) {
              nextSlide(); // Swipe left, go next
            } else if (swipePower > 200) {
              prevSlide(); // Swipe right, go back
            }
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          style={{ display: "flex", whiteSpace: "nowrap", cursor: "grab" }}
        >
          {aboutresuss.map((ar, i) => (
            <div
              key={i}
              className="w-[66.666%] shrink-0 pr-2" // Each item is 2/3 of container width
            >
              <div className="flex flex-col justify-between border rounded-xl border-[#ABB0BA] p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-300 h-[250px]">
                <div className="flex justify-start mb-4">
                  <img
                    src={ar.img}
                    alt={`about-img-${i}`}
                    className="h-[45px] w-auto object-contain"
                  />
                </div>
                <div className="flex-grow overflow-hidden">
                  <div className="text-[#333] w-[80%] text-sm sm:text-base line-clamp-3">
                    {ar.info}
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <ArrowRightOutlined className="text-[#ABB0BA] text-lg" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 h-[36px] w-[36px] bg-white text-[#A2A1A1] p-2 rounded-full shadow-md z-10"
        >
          <CaretLeftOutlined style={{ fontSize: "18px" }} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-[36px] w-[36px] bg-white text-[#A2A1A1] p-2 rounded-full shadow-md z-10"
        >
          <CaretRightOutlined style={{ fontSize: "18px" }} />
        </button>

        {/* Dots */}
        <div className="my-4 flex justify-start space-x-2">
          {aboutresuss.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-[#4FD6FA]" : "bg-[#d9d9d9]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

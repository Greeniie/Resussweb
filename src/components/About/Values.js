import React, { useState, useEffect } from "react";
import abtimg1 from "../../assets/menu-icons/globe.png";
import abtimg2 from "../../assets/menu-icons/heartt.png";
import abtimg3 from "../../assets/menu-icons/hs.png";
import abtimg4 from "../../assets/menu-icons/stack.png";
import {
  ArrowRightOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const Values = () => {
  const aboutresuss = [
    {
      img: abtimg1,
      title: "Resourcefulness",
      info: "Embracing creativity and adaptability to overcome challenges.",
    },
    {
      img: abtimg2,
      title: "Devotion",
      info: "A core commitment to empower African creators, connect talents, and offer opportunities.",
    },
    {
      img: abtimg3,
      title: "Service",
      info: "Providing reliable support for our solutions, the creative communities, and the workforce.",
    },
    {
      img: abtimg4,
      title: "Togetherness",
      info: "Championing unity and recognizing the strength it brings to a diverse community.",
    },
    {
      img: abtimg2,
      title: "Transparency",
      info: "Adhering to standards and best practices, building trust and openness in all interactions.",
    },
    {
      img: abtimg3,
      title: "Audacity",
      info: "Fearlessly pushing boundaries and embracing bold initiatives for transformative impact.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
    <div className="bg-[#EDE8FC]">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-[Inter] text-[25px] lg:text-[32px] mx-auto text-[#461378] font-semibold pt-[30px] md:pt-[50px] pl-[30px] md:pl-[140px] pb-[20px] md:pb-0"
      >
        Our Values
      </motion.div>
      <div className="hidden md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[80%] mx-auto py-10 pb-[60px]">
        {aboutresuss.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between  rounded-xl  p-4  bg-white hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-start mb-2">
              <img
                src={item.img}
                alt={`about-img-${index}`}
                className="h-[35px] w-auto object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 flex-grow text-[#4FD6FA]">
              <div className="font-[Inter] font-semibold text-[26px] lg:text-[28px]">
                {item.title}
              </div>
              <p className="font-[Roboto] font-normal text-[#8F9093] text-sm sm:text-base ">
                {item.info}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile Carousel */}
      <div className="relative w-[95%] overflow-hidden block md:hidden ml-auto">
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
                    className="h-[30px] w-auto object-contain"
                  />
                </div>
                <div className="flex-grow overflow-hidden">
                  <div className="font-[Inter] font-semibold text-lg lg:text-lg text-[#4FD6FA]">
                    {ar.title}
                  </div>
                  <div className="text-[#333] text-sm sm:text-base whitespace-normal break-words">
                    {ar.info}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        {/* <button
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
        </button> */}

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

export default Values;

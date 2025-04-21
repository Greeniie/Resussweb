import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import testimg1 from "../assets/testimgs/p1.png";
import testimg2 from "../assets/testimgs/p2.png";
import { Link } from "react-router-dom";

const allProjects = [
  {
    src: testimg1,
    title: "Batman and Superman: Battle for the Super Sons Kyptionite",
    year: "2023",
    height: " Height 5′ 9½″ (1.77 m)",
  },
  {
    src: testimg2,
    title: "Batman and Superman: Battle for the Super Sons Kyptionite",
    year: "2023",
    height: " Height 5′ 9½″ (1.77 m)",
  },
];

const smallScreenProjects = [
  {
    src: testimg1,
    title: "Batman and Superman: Battle for the Super Sons Kyptionite",
    year: "2023",
    height: " Height 5′ 9½″ (1.77 m)",
  },
  {
    src: testimg2,
    title: "Batman and Superman: Battle for the Super Sons Kyptionite",
    year: "2023",
    height: " Height 5′ 9½″ (1.77 m)",
  },
];

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use different image sets based on screen size
  const images = isSmallScreen ? smallScreenProjects : allProjects;
  const extendedImages = [...images, ...images]; // Duplicate for infinite effect

  // Dynamically shrink the size of images based on screen size
  const imageWidth = isSmallScreen ? "w-[80%]" : "w-[70%]"; // Shrink the width for mobile
  const stepSize = 100 / (isSmallScreen ? 1 : 1.5); // Step size for infinite scrolling

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length); // Wrap around when reaching the last image
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length); // Wrap around when reaching the first image
  };

  return (
    <div className="relative flex flex-col items-start mt-8 w-full">
      {/* Carousel Container */}
      <div className="relative w-[90%] overflow-hidden">
        <motion.div
          className="flex "
          animate={{ x: `-${index * stepSize}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          style={{ display: "flex", whiteSpace: "nowrap", cursor: "grab" }}
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
        >
          {extendedImages.map((image, i) => (
            <div
              key={i}
              className={`relative flex flex-shrink-0 ${imageWidth} mx-2`}
            >
              <img
                src={image.src}
                alt={`slide-${i}`}
                className="w-[136px] h-[100px] md:h-[185px] object-cover rounded-xl"
              />

              <div className="flex flex-col gap-[20px] pl-[10px] pt-[20px]">
                <div className="text-[14px] text-[#424242] font-semibold text-wrap">
                  {image.title}
                </div>
                <div className="text-[14px] text-[#424242]">{image.year}</div>
                <div className="text-[14px] text-[#424242]">{image.height}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-[-40px] top-[17%] md:top-[50%] transform -translate-y-1/2 h-[20px] md:h-[40px] w-[20px] md:w-[40px] bg-[#DADADA69] text-[#A2A1A1] p-2 rounded-full flex items-center justify-center transition-all"
      >
        <CaretLeftOutlined
          style={{ fontSize: isSmallScreen ? "14px" : "22px" }}
        />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-[20px] top-[17%] md:top-[50%] transform -translate-y-1/2 h-[20px] md:h-[40px] w-[20px] md:w-[40px] bg-[#DADADA69] text-[#A2A1A1] p-2 rounded-full flex items-center justify-center transition-all"
      >
        <CaretRightOutlined
          style={{ fontSize: isSmallScreen ? "14px" : "22px" }}
        />
      </button>

      {/* Indicator */}
      <div>
        {isSmallScreen ? (
          <div className="mt-4 flex space-x-2">
            {" "}
            {smallScreenProjects.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-[#461378]" : "bg-[#d9d9d9]"
                }`}
              ></div>
            ))}
          </div>
        ) : (
          <div className="mt-4 flex space-x-2">
            {" "}
            {allProjects.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-[#461378]" : "bg-[#d9d9d9]"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Extra Image for Small Screens */}
      {isSmallScreen && (
        <Link
          to={allProjects[0].link}
          className="relative my-4 w-[90%] mx-auto"
        >
          <div className="text-[#6633FF] py-1 text-sm">
            {allProjects[0].tag}
          </div>
          <img
            src={allProjects[0].src}
            alt="extra-img"
            className="w-full h-[230px] object-cover object-center rounded-xl"
          />
          <button className="absolute top-2 p-2 right-[20px] mt-[20px] z-10">
            <EllipsisOutlined
              style={{
                fontSize: "32px",
                color: "white",
                fontWeigh: "bold",
              }}
            />
          </button>
        </Link>
      )}
    </div>
  );
};

export default ProjectCarousel;

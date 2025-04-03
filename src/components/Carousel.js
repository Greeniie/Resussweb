import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CaretRightOutlined } from "@ant-design/icons";
import testimg1 from "../assets/testimgs/testimg1.png";
import testimg2 from "../assets/testimgs/testimg2.png";
import testimg3 from "../assets/testimgs/testimg3.png";
import { Link } from "react-router-dom";

const allImages = [
  { src: testimg1, tag: "Sponsored job posts", link: '/job-posts' },
  { src: testimg2, tag: "Trending", link: '/trending' },
  { src: testimg3, tag: "Events", link: '/events' },
];

const smallScreenImages = [
  { src: testimg2, tag: "Trending", link: '/trending' },
  { src: testimg3, tag: "Events", link: '/events' },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isSmallScreen ? smallScreenImages : allImages;
  const extendedImages = [...images, ...images]; // Duplicate for infinite effect
  const visibleImages = isSmallScreen ? 2 : 2.5; // Adjust based on screen size
  const stepSize = 100 / visibleImages; // Movement step percentage

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative flex flex-col items-center mt-8 w-full">
      {/* Carousel Container */}
      <div className="relative w-[90%] overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${index * stepSize}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {extendedImages.map((image, i) => (
            <Link to={image.link} key={i} className="relative flex-shrink-0 w-[45%] mx-2">
              <div className="text-[#6633FF] py-1 text-sm">{image.tag}</div>
              <img
                src={image.src}
                alt={`slide-${i}`}
                className="w-full h-[100px] md:h-[300px] object-cover rounded-xl"
              />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Forward Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-[17%] md:top-[50%] transform -translate-y-1/2 h-[40px] md:h-[80px] w-[40px] md:w-[80px] bg-black/50 text-white p-2 rounded-full flex items-center justify-center"
      >
        <CaretRightOutlined style={{ color: "white", fontSize: "22px" }} />
      </button>

      {/* Indicator */}
      <div className="mt-4 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-[#461378]" : "bg-[#d9d9d9]"
            }`}
          ></div>
        ))}
      </div>

      {/* Extra Image for Small Screens */}
      {isSmallScreen && (
        <Link to={allImages[0].link} className="my-4 w-[90%] mx-auto">
          <div className="text-[#6633FF] py-1 text-sm">{allImages[0].tag}</div>
          <img
            src={allImages[0].src}
            alt="extra-img"
            className="w-full h-[230px] object-cover object-center rounded-xl"
          />
        </Link>
      )}
    </div>
  );
};

export default Carousel;

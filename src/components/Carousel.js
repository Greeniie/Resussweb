import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import testimg1 from "../assets/testimgs/testimg1.png";
import testimg2 from "../assets/testimgs/testimg2.png";
import testimg3 from "../assets/testimgs/testimg3.png";
import { Link } from "react-router-dom";

const allImages = [
  { src: testimg1, tag: "Sponsored job posts", link: "/job-posts" },
  { src: testimg2, tag: "Trending", link: "/trending" },
  { src: testimg3, tag: "Events", link: "/events" },
];

const smallScreenImages = [
  { src: testimg2, tag: "Trending", link: "/trending" },
  { src: testimg3, tag: "Events", link: "/events" },
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

  // Use different image sets based on screen size
  const images = isSmallScreen ? smallScreenImages : allImages;
  const extendedImages = [...images, ...images]; // Duplicate for infinite effect

  // Dynamically shrink the size of images based on screen size
  const imageWidth = isSmallScreen ? "w-[80%]" : "w-[35%]"; // Shrink the width for mobile
  const stepSize = 100 / (isSmallScreen ? 2 : 2.5); // Step size for infinite scrolling

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length); // Wrap around when reaching the last image
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length); // Wrap around when reaching the first image
  };

  return (
    <div className="relative flex flex-col items-center mt-8 w-full">
      {/* Carousel Container */}
      <div className="relative w-[90%] overflow-hidden">
      <motion.div
  className="flex"
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
  animate={{ x: `-${index * stepSize}%` }}
  transition={{ ease: "easeInOut", duration: 0.5 }}
  style={{ display: "flex", whiteSpace: "nowrap", cursor: "grab" }}
>
  {extendedImages.map((image, i) => (
    <Link
      to={image.link}
      key={i}
      className={`relative flex-shrink-0 ${imageWidth} mx-2`}
    >
      <div className="text-[#6633FF] py-1 text-[14px] font-bold">
        {image.tag}
      </div>

      <img
        src={image.src}
        alt={`slide-${i}`}
        className="w-full h-[100px] md:h-[250px] object-cover rounded-xl"
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
  ))}
</motion.div>

      </div>

      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute left-8 md:left-12 top-[17%] md:top-[50%] transform -translate-y-1/2 h-[20px] md:h-[40px] w-[20px] md:w-[40px] bg-white text-[#A2A1A1] p-2 rounded-full flex items-center justify-center transition-all"
      >
        <CaretLeftOutlined
          style={{ fontSize: isSmallScreen ? "14px" : "22px" }}
        />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute right-8 md:right-12 top-[17%] md:top-[50%] transform -translate-y-1/2 h-[20px] md:h-[40px] w-[20px] md:w-[40px] bg-white text-[#A2A1A1] p-2 rounded-full flex items-center justify-center transition-all"
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
            {smallScreenImages.map((_, i) => (
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
            {allImages.map((_, i) => (
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
        <Link to={allImages[0].link} className="relative my-4 w-[90%] mx-auto">
          <div className="text-[#6633FF] py-1 text-sm">{allImages[0].tag}</div>
          <img
            src={allImages[0].src}
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

export default Carousel;

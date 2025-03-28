import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CaretRightOutlined } from "@ant-design/icons";
import testimg1 from "../assets/testimgs/testimg1.png";
import testimg2 from "../assets/testimgs/testimg2.png";
import testimg3 from "../assets/testimgs/testimg3.png";
import testimg4 from "../assets/testimgs/testimg4.png";

const images = [
  { src: testimg1, tag: "Sponsored job posts" },
  { src: testimg2, tag: "Trending" },
  { src: testimg3, tag: "Events" },
  { src: testimg4, tag: "Others" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative flex flex-col items-center mt-8">
      {/* Carousel Container */}
      <div className="relative w-[90%] overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...images, ...images].map((image, i) => (
            <div key={i} className="relative flex-shrink-0 w-[60%] md:w-[40%] mx-2">
              <div className="text-[#6633FF] py-1 text-sm">{image.tag}</div>
              <img
                src={image.src}
                alt={`slide-${i}`}
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Forward Button */}
      <button
        onClick={nextSlide}
        className="absolute right-8 top-[50%] transform -translate-y-1/2 h-[80px] w-[80px] bg-black/50 text-white p-2 rounded-full flex items-center justify-center"
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
    </div>
  );
};

export default Carousel;

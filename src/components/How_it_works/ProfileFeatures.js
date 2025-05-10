import React, { useState, useEffect } from "react";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";
import t5 from "../../assets/images/t5.png";
import t6 from "../../assets/images/t6.png";
import {
  ArrowRightOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const ProfileFeatures = () => {
  const aboutresuss = [
    {
      img: t3,
      title: "Pro Headshot",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: t4,
      title: "Full Profile",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: t4,
      title: "Projects History",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: t6,
      title: "Pro photos",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: t4,
      title: "Video Reel",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: t5,
      title: "Print",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: t6,
      title: "Pro photos",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: t5,
      title: "Chat",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: t5,
      title: "Print",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
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

  return (
    <div className="">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-[Inter] text-[23px] lg:text-[28px] mx-auto text-[#000] font-semibold pt-[30px] md:pt-[50px] pl-[30px] md:pl-[135px] md:pb-0"
      >
        Your profile all in one place
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[85%] mx-auto py-10 pb-[120px] md:pb-[60px]">
        {aboutresuss.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-4 duration-300"
          >
            <div className="flex justify-start mb-3">
              <img
                src={item.img}
                alt={`about-img-${index}`}
                className="h-[80px] w-auto object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 flex-grow text-[#4FD6FA]">
              <div className="font-[Inter] font-semibold text-[26px] lg:text-[28px]">
                {item.title}
              </div>
              <p className="font-[Roboto] font-normal text-[#8F9093] text-sm sm:text-base w-[80%] ">
                {item.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileFeatures;

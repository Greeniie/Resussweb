import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  LockFilled,
} from "@ant-design/icons";
import img1 from "../assets/testimgs/img1.png";
import img2 from "../assets/testimgs/img2.png";
import img3 from "../assets/testimgs/img3.png";
import img4 from "../assets/testimgs/img4.png";
import adsmallscreens from "../assets/testimgs/adsmallscreens.png";
import moment from "moment";
import filters from "../assets/images/filtersmobile.png";

import { Tooltip } from "antd";
import { Link } from "react-router-dom";

const JobList = () => {
  const jobs = [
    {
      jobTitle: "NEW FACES SEARCH",
      info: "Are you passionate about bringing characters to life through animation? Ready to dive into the exciting world of animation and make an impact? Join our team today!",
      image: img1,
      call_type: { tag: "opencall", color: "#EB2B93" },
      role: "",
      jobRoles: ["Film", "TV/Series", "Other"],
      location: "Lagos, Nigeria",
      expiryDate: "2025-05-10",
    },
    {
      jobTitle: "AcTORS FOR series",
      info: "Are you passionate about bringing characters to life through animation? Ready to dive into the exciting world of animation and make an impact? Join our team today!",
      image: img2,
      call_type: { tag: "general hire", color: "#FFC107" },
      role: { name: "Art Director", color: "#000" },
      jobRoles: ["Film", "TV/Series", "Other"],
      location: "Lagos, Nigeria",
      expiryDate: "2025-05-15",
    },
    {
      jobTitle: "diamond island production",
      info: "Are you passionate about bringing characters to life through animation? Ready to dive into the exciting world of animation and make an impact? Join our team today!",
      image: img3,
      call_type: { tag: "closedcall", color: "#60E2AC" },
      role: "",
      jobRoles: ["Film", "TV/Series", "Other"],
      location: "Lagos, Nigeria",
      expiryDate: "2025-05-20",
    },
    {
      jobTitle: "looking for writers",
      info: "Are you passionate about bringing characters to life through animation? Ready to dive into the exciting world of animation and make an impact? Join our team today!",
      image: img4,
      call_type: { tag: "opencall", color: "#EB2B93" },
      jobRoles: ["Film", "TV/Series", "Other"],
      location: "Lagos, Nigeria",
      expiryDate: "2025-05-24",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white min-h-[480px] mt-[30px] md:mt-0 rounded-[30px] mb-[30px] md:rounded-[35px] px-[15px] md:px-[50px] py-[30px] md:py-[35px]"
      >
        <div className="block md:hidden">
          <div className="flex gap-[10px] items-center pb-[20px] border-b">
            <img
              src={filters}
              alt="filter"
              className="h-[16px] w-auto object-cover object-center"
            />
            <div className="text-[#898A8D] text-[14px]">Show filters</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-[15px]">
          {jobs.map((job, index, i) => (
            <React.Fragment>
              {index === 2 && ( // Display the ad after the third article
                <div
                  key={`ad-${index}`}
                  className="block md:hidden w-full my-4"
                >
                  <img
                    src={adsmallscreens}
                    alt="ad"
                    className="block md:hidden rounded-tl-[36px] rounded-tr-[36px]"
                  />
                </div>
              )}
              <JobCard key={i} job={job} />
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);
  const maxInfoLength = 100;

  const toggleMore = () => setShowMore(!showMore);

  const truncatedInfo =
    job.info.length > maxInfoLength && !showMore
      ? job.info.slice(0, maxInfoLength) + "..."
      : job.info;

  const remainingRoles = job.jobRoles.length > 3 ? job.jobRoles.length - 3 : 0;

  // Define role color scheme
  const roleColors = {
    Film: "#EB6A2B",
    "TV/Series": "#31AAEA",
    Other: "#3AAB5F",
    Electrical: "black",
    Producer: "yellow",
  };

  return (
    <div className="border-b border-[#DEDEDE] px-[20px] pb-[20px]">
      <div className="mb-[10px] flex gap-[10px] items-center">
        <div
          className={`text-[10px] bg-[${job.call_type.color}] py-[5px] px-[10px] text-white w-fit rounded-[84px]`}
        >
          {job.call_type.tag}
        </div>
        {job.role !== "" && (
          <div
            className={`text-[10px] bg-[${job?.role?.color}] py-[5px] px-[10px] text-white w-fit rounded-[84px]`}
          >
            {job?.role?.name}
          </div>
        )}
        {job.call_type.tag === "closedcall" && (
          <LockFilled style={{ color: "#000" }} />
        )}
      </div>
      {/* Job Title */}
      <div className="text-[#3A3A3A] text-[16px] uppercase leading-[20px] font-bold mb-[20px]">
        {job.jobTitle}
      </div>

      {/* Image & Info Section */}
      <div className="flex items-center gap-3">
        <img
          src={job.image}
          alt={job.jobTitle}
          className="h-[113px] w-auto object-cover"
        />
        <div>
          <p className="text-sm">
            {truncatedInfo}{" "}
            {job.info.length > maxInfoLength && (
              <button
                onClick={toggleMore}
                className="text-[#6633FF] font-bold border-none bg-transparent cursor-pointer"
              >
                {showMore ? "less" : "more"}
              </button>
            )}
          </p>
        </div>
      </div>

      {/* Job Roles */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-1">
          {job.jobRoles.slice(0, 3).map((role, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-[22px] text-white text-[12px]"
              style={{ backgroundColor: roleColors[role] || "#ccc" }}
            >
              {role}
            </span>
          ))}
        </div>
        <div>
          {remainingRoles > 0 && (
            <span className="text-sm text-[#3A3A3A]">
              {remainingRoles} roles
            </span>
          )}
        </div>
      </div>

      {/* Location & Expiry Date */}
      <div className="flex gap-[30px] items-center mt-3 text-[#3A3A3A] text-[12px]">
        <div className="flex items-center gap-1">
          <EnvironmentOutlined />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <ClockCircleOutlined />
          </div>
          <span className="font-bold">
            {moment(job.expiryDate).fromNow(true)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobList;

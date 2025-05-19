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

const JobList = ({ jobs }) => {
  console.log(jobs);
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
        <div className="flex flex-col gap-4">
          {jobs.map((job, index) => (
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
              <Link to={`/job/details/${job?.id}`} className="">
                <JobCard key={job?.id} job={job} />
              </Link>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);
  const maxdescriptionLength = 100;

  const toggleMore = () => setShowMore(!showMore);

  const truncateddescription =
    job?.description.length > maxdescriptionLength && !showMore
      ? job?.description.slice(0, maxdescriptionLength) + "..."
      : job?.description;

  const jobRoles = job?.job_types?.map((j) => j.name);
  const serviceCat = job?.job_service_categories?.map((j) => j?.job_role_type);

  const roleColors = {
    general: "#FFC107",
    "open-call": "#EB2B93",
    "closed-call": "#60E2AC",
  };

  const remainingRoles =
    job?.job_types.length > 3 ? job?.job_types.length - 3 : 0;

  return (
    <div className="border-b border-[#DEDEDE] px-[20px] pb-[20px]">
      <div className="mb-[10px] flex gap-[10px] items-center">
        <div className="flex items-center gap-1 w-full overflow-x-auto pb-2 whitespace-nowrap">
          {serviceCat?.map((role, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-[22px] text-white text-[12px] w-fit whitespace-nowrap"
              style={{ backgroundColor: roleColors[role] }}
            >
              {role === "general"
                ? "General Hire"
                : role === "open-call"
                ? "Open Call"
                : "Closed Call"}
            </span>
          ))}

          {serviceCat?.map(
            (role, index) =>
              role === "closed-call" && (
                <span key={`lock-${index}`} className="whitespace-nowrap">
                  <LockFilled style={{ color: "#000" }} />
                </span>
              )
          )}

          {job?.job_service_categories[0]?.job_role_type === "general" && (
            <div className="text-[10px] bg-[#000] py-[5px] px-[10px] text-white w-fit rounded-[84px] whitespace-nowrap">
              {job?.job_service_categories[0]?.name}
            </div>
          )}
        </div>
      </div>
      {/* Job Title */}
      <div className="text-[#3A3A3A] text-[16px] uppercase leading-[20px] font-bold mb-[20px]">
        {job?.headline}
      </div>

      {/* Image & description Section */}
      <div className="flex gap-3">
        <div className="w-[150px] h-[113px] flex-shrink-0">
          <img
            src={job?.job_banner}
            alt={job?.jobTitle}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="flex-1">
          <p className="text-sm text-[#696969]">
            {truncateddescription}{" "}
            {job?.description.length > maxdescriptionLength && (
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
          {jobRoles?.slice(0, 3).map((role, index) => (
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
          <span>{job?.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <ClockCircleOutlined />
          </div>
          <span className="font-bold">
            {moment(job?.delivery_timeline).fromNow(true)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobList;

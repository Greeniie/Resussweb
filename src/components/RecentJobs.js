import React, { useState } from "react";
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import testjob from "../assets/testimgs/testjob.png";
import moment from "moment";

const RecentJobs = () => {
  const jobs = [
    {
      jobTitle: "INTERNSHIP OPPORTUNITY: ANIMATOR-IN-TRAINING",
      info: "Are you passionate about bringing characters to life through animation? Ready to dive into the exciting world of animation and make an impact? Join our team today!",
      image: testjob,
      jobRoles: ["Film", "TV/Series", "Other", "Electrical", "Producer"],
      location: "Lagos, Nigeria",
      expiryDate: "2025-04-10",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-4 pt-[15px]">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);
  const maxInfoLength = 80;

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
    <div className="border border-[#D2D0D0] px-[20px] py-[30px] rounded-md">
      {/* Job Title */}
      <div className="text-[#3A3A3A] text-[16px] leading-[20px] font-bold mb-[30px]">
        {job.jobTitle}
      </div>

      {/* Image & Info Section */}
      <div className="flex gap-3">
        <img
          src={job.image}
          alt={job.jobTitle}
          className="h-[70px] w-auto object-cover"
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

export default RecentJobs;

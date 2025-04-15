import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvironmentFilled } from "@ant-design/icons";
import pro6 from "../assets/images/pro6.png";
import filters from "../assets/images/filtersmobile.png";
import share from "../assets/menu-icons/shareblack.png";
import bookmark from "../assets/menu-icons/bookmarkblack.png";

import { Tooltip } from "antd";
import { Link } from "react-router-dom";

const TalentList = ({ talents, title, isExpanded, toggleExpanded }) => {
  const visibleTalents = isExpanded ? talents : talents.slice(0, 8);

  console.log(talents);

  return (
    <AnimatePresence>
      <motion.div
        key={title}
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

        <div className="flex justify-between items-center pb-[10px] md:border-b">
          <div className="text-[#AF98BF] text-[16px] pt-[20px] md:pt-0">
            {title}
          </div>
          <button
            onClick={toggleExpanded}
            className="text-[#461378] text-[14px] font-medium transition-all duration-300"
          >
            {isExpanded ? "Show Less" : "Show All"}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 pt-[20px]">
          {visibleTalents.map((talent, index) => (
            <motion.div
              key={index}
              layout
              className="relative border border-[#DEDEDE] h-[300px] w-full rounded-[25px] overflow-hidden bg-gray-200"
            >
              <Link to={`/user/${talent?.id}`}>
                <div className="flex flex-col gap-[5px] absolute right-[20px] mt-[20px]">
                  <Tooltip placement="left" title="share">
                    <button className="flex items-center justify-center p-2 bg-[#F5F5F5] rounded-[7px]">
                      <img
                        src={share}
                        alt="share"
                        className="h-[11px] md:h-[15px]"
                      />
                    </button>
                  </Tooltip>
                  <Tooltip placement="left" title="bookmark">
                    <button className="flex items-center justify-center p-2 bg-[#F5F5F5] rounded-[7px]">
                      <img
                        src={bookmark}
                        alt="bookmark"
                        className="h-[11px] md:h-[15px]"
                      />
                    </button>
                  </Tooltip>
                </div>

                <img
                  src={talent.profile_photo_url || pro6}
                  alt={`${talent.first_name} ${talent.last_name}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white text-[#545454] p-3">
                  <div className="text-[14px] capitalize font-semibold">
                    {talent.first_name} {talent.last_name}
                  </div>
                  <div className="text-[12px] my-[5px] px-3 py-1 rounded-[30px] bg-[#461378] text-white w-fit">
                    {talent?.services[0]?.name || "No role added"}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <EnvironmentFilled /> {talent.location || "No location"}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TalentList;

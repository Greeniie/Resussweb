import React, { useState } from "react";
import { EnvironmentFilled, EllipsisOutlined } from "@ant-design/icons";
import pro6 from "../assets/images/pro6.png";
import filters from "../assets/images/filtersmobile.png";

const TalentList = ({ talents }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleTalents = showAll ? talents : talents.slice(0, 8);

  return (
    <div className="bg-white min-h-[480px] mt-[30px] md:mt-0 rounded-[30px] mb-[30px] md:rounded-[35px] px-[15px] md:px-[50px] py-[30px] md:py-[35px]">
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
        <div className="text-[#AF98BF] text-[16px] pt-[20px] md:pt-0">Performing Talent</div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-[#461378] text-[14px] font-medium transition-all duration-300"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 pt-[20px]">
        {visibleTalents.map((talent, index) => (
          <div
            key={index}
            className="relative border border-[#DEDEDE] h-[300px] w-full rounded-[25px] overflow-hidden bg-gray-200"
          >
            <button className="absolute right-[10px]">
              <EllipsisOutlined style={{ fontSize: "32px", color: "white" }} />
            </button>
            <img
              src={talent.profile_photo_url ? talent.profile_photo_url : pro6}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentList;

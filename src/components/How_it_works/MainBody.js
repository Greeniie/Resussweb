import React, { useState } from "react";
import Talent from "../How_it_works/Talent";
import Creator from "../How_it_works/Creator";
import Business from "../How_it_works/Business";

const MainBody = () => {
  const [activeTab, setActiveTab] = useState("1");

  const tabItems = [
    { key: "1", label: "Talent" },
    { key: "2", label: "Creator" },
    { key: "3", label: "Business" },
  ];

  return (
    <div className="">
      <div className="hidden md:flex  my-[50px] sm:mt-[60px] md:mt-[100px] lg:mt-[60px] w-fit mx-auto flex gap-[20px] items-center bg-[#F3F3F3] p-[3px] rounded-lg">
        {tabItems.map((tab) => (
          <div
            key={tab.key}
            className={`py-[6px] px-[50px] rounded-lg text-[14px] cursor-pointer transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-[white] text-[#330066] font-medium text-[16px]"
                : "text-[#545454]"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="block md:hidden flex gap-[20px] items-center bg-[#F3F3F3] mt-[350px]  p-[3px]  rounded-lg w-[90%] mx-auto">
        {tabItems.map((tab) => (
          <div
            key={tab.key}
            className={`py-[3px] flex-1 text-center rounded-lg text-[14px] cursor-pointer transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-[white] text-[#330066] font-medium text-[16px]"
                : "text-[#545454]"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {activeTab === "1" && <Talent />}
      {activeTab === "2" && <Creator />}
      {activeTab === "3" && <Business />}
    </div>
  );
};

export default MainBody;

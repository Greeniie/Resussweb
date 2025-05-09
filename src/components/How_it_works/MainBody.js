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
    <div>
      <div className="mt-[60px] my-[50px] w-fit mx-auto flex gap-[20px] items-center bg-[#F3F3F3] p-[3px] rounded-lg">
        {tabItems.map((tab) => (
          <div
            key={tab.key}
            className={`py-[6px] px-[50px] rounded-lg text-[14px] cursor-pointer transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-[white] text-[#330066]"
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

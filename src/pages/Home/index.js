import React, { useState, useEffect } from "react";
import HomeNav from "../../components/HomeNav";
import Carousel from "../../components/Carousel";
import ad from "../../assets/testimgs/ad.png";
import messages from "../../assets/menu-icons/messages.png";
import Articles from "../../components/Articles";
import TalentSpotlight from "../../components/TalentSpotlight";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");

  const tabItems = [
    { key: "1", label: "Today" },
    { key: "2", label: "Talent" },
    { key: "3", label: "Jobs" },
  ];

  return (
    <div>
      <div className="bg-[#EDEBF4] hidden md:block">
        <HomeNav />

        <div className="mt-[30px] w-fit mx-auto flex gap-[20px] items-center bg-white p-[3px] rounded-lg">
          {tabItems.map((tab) => (
            <div
              key={tab.key}
              className={`py-[6px] px-[50px] rounded-lg text-[14px] cursor-pointer transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-[#461378] text-white"
                  : "bg-white text-[#461378]"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {activeTab === "1" && (
          <div>
            <Carousel />
            <div className="py-[30px]">
              <img src={ad} alt="ad" className="h-[100px] w-auto mx-auto" />
            </div>
            <div className="grid grid-cols-3 gap-[50px] w-[90%] mx-auto">
              <div className="col-span-2">
                <div className="text-[#4FD6FA] text-[16px] ">Spotlight</div>
                <Articles />
              </div>
              <div>
                <div className="text-[#AF98BF] text-[16px] ">Spotlight</div>
                <TalentSpotlight />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#EDEBF4] min-h-screen overflow-y-auto block md:hidden">
        <HomeNav />

        <div className="mt-[30px] w-[90%] mx-auto">
          <div className="flex items-center justify-between gap-[10px]">
            <div>
              <Avatar
                style={{ backgroundColor: "#3f8bcaa1" }}
                icon={<UserOutlined />}
                size={30}
              />
            </div>
            <div className="flex gap-[20px] items-center bg-white p-[3px] rounded-lg w-[90%] mx-auto">
              {tabItems.map((tab) => (
                <div
                  key={tab.key}
                  className={`py-[3px] flex-1 text-center rounded-lg text-[14px] cursor-pointer transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-[#461378] text-white"
                      : "bg-white text-[#461378]"
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <div>
              <Link
                to="/messages"
                className="flex flex-col items-center hover:text-[#9900FF]"
              >
                <img
                  src={messages}
                  alt="messages"
                  className="h-[30px] w-auto object-cover object-center"
                />
              </Link>
            </div>
          </div>
        </div>
        {activeTab === "1" && (
          <div className="pb-[100px]">
            <Carousel />
            <div className="py-[15px] md:py-[30px]">
              <img
                src={ad}
                alt="ad"
                className="h-[100px] w-[90%] md:w-auto mx-auto object-center object-contain"
              />
            </div>
            <div className="w-[90%] mx-auto">
              <div>
                <div className="text-[#4FD6FA] text-[16px] mb-3 md:mb-0">
                  Spotlight
                </div>
                <Articles />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

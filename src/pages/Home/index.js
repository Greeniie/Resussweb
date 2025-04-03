import React, { useState, useEffect } from "react";
import HomeNav from "../../components/HomeNav";
import Carousel from "../../components/Carousel";
import ad from "../../assets/testimgs/ad.png";
import messages from "../../assets/menu-icons/messages.png";
import Articles from "../../components/Articles";
import TalentSpotlight from "../../components/TalentSpotlight";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import TalentFilters from "../../components/TalentFilters";
import TalentList from "../../components/TalentList";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../../redux/clientSlice";
import { getAllArticles } from "../../redux/articleSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { articles, users } = useSelector((state) => state);

  const [isLoading, setIsLoading] = useState(true);
  const [isTalentsLoading, setIsTalentsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllArticles()).finally(() => setIsLoading(false));
    dispatch(getAllClients()).finally(() => setIsTalentsLoading(false));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("1");

  const tabItems = [
    { key: "1", label: "Today" },
    { key: "2", label: "Talent" },
    { key: "3", label: "Jobs" },
  ];

  return (
    <div>
      <div className="bg-[#EDEBF4] min-h-screen hidden md:block">
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
                {isLoading ? (
                  <div className="flex justify-center items-center py-10">
                    <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                  </div>
                ) : (
                  <Articles articles={articles?.data?.Articles || []} />
                )}
              </div>
              <div>
                <div className="text-[#AF98BF] text-[16px] ">Spotlight</div>
                <TalentSpotlight />
              </div>
            </div>
          </div>
        )}

        {activeTab === "2" && (
          <div className="grid grid-cols-4 min-h-screen w-[90%] gap-[20px] mx-auto mt-[50px]">
            <div>
              {isTalentsLoading ? (
                <div className="flex justify-center items-center py-10">
                  <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                </div>
              ) : (
                <TalentFilters />
              )}
            </div>
            <div className="col-span-3">
              {isTalentsLoading ? (
                <div className="flex justify-center items-center py-10">
                  <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                </div>
              ) : (
                <TalentList talents={users?.data?.users || []} />
              )}
            </div>
          </div>
        )}

        {activeTab === "3" && (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center text-gray-800 px-4">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🚀 Coming Soon
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg">
              We're working on something amazing. Stay tuned!
            </p>
          </div>
        )}
      </div>

      <div className="bg-[#EDEBF4] min-h-screen overflow-y-auto block md:hidden">
        <HomeNav />

        <div className="mt-[70px] w-[90%] mx-auto">
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

            <div className="w-[90%] mx-auto">
              <div>
                <div className="text-[#4FD6FA] text-[16px] mb-3 md:mb-0">
                  Spotlight
                </div>
                {isLoading ? (
                  <div className="flex justify-center items-center py-10">
                    <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                  </div>
                ) : (
                  <Articles articles={articles?.data?.Articles || []} />
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "2" && (
          <div className="">
            <div>
              {isTalentsLoading ? (
                <div className="flex justify-center items-center py-10">
                  <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                </div>
              ) : (
                <TalentList talents={users?.data?.users || []} />
              )}
            </div>
          </div>
        )}

        {activeTab === "3" && (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center text-gray-800 px-4">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🚀 Coming Soon
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg">
              We're working on something amazing. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

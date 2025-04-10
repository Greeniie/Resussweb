import React, { useState, useEffect, useRef } from "react";
import HomeNav from "../../components/HomeNav";
import Carousel from "../../components/Carousel";
import ad from "../../assets/testimgs/ad.png";
import messages from "../../assets/menu-icons/messages.png";
import Articles from "../../components/Articles";
import TalentSpotlight from "../../components/TalentSpotlight";
import {
  UserOutlined,
  LoadingOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import TalentFilters from "../../components/TalentFilters";
import TalentList from "../../components/TalentList";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../../redux/clientSlice";
import { getAllArticles } from "../../redux/articleSlice";
import { Dropdown } from "antd";
import user from "../../assets/menu-icons/user.png";
import support from "../../assets/menu-icons/support.png";
import bookmark from "../../assets/menu-icons/bookmark.png";
import share from "../../assets/menu-icons/share.png";
import view from "../../assets/menu-icons/user.png";
import setting from "../../assets/menu-icons/setting.png";
import { getProfile } from "../../redux/profileSlice";
import MobileSidebar from "../../components/MobileSidebar";

const Home = () => {
  const dispatch = useDispatch();
  const { articles, users, profile } = useSelector((state) => state);

  const [isLoading, setIsLoading] = useState(true);
  const [isTalentsLoading, setIsTalentsLoading] = useState(true);
  const [articlesError, setArticlesError] = useState(null);
  const [clientsError, setClientsError] = useState(null);

  useEffect(() => {
    dispatch(getProfile());

    dispatch(getAllArticles())
      .catch((err) => {
        console.error("Failed to fetch articles:", err);
        setArticlesError(
          "Failed to load articles. Please check your internet connection."
        );
      })
      .finally(() => setIsLoading(false));

    dispatch(getAllClients())
      .catch((err) => {
        console.error("Failed to fetch clients:", err);
        setClientsError(
          "Failed to load talents. Please check your internet connection."
        );
      })
      .finally(() => setIsTalentsLoading(false));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedList, setExpandedList] = useState(null); // 'actors', 'crew', 'creative' or null

  const actors = users?.data?.users?.filter(
    (user) => user.services?.[0]?.name === "Actor"
  );

  const others = users?.data?.users?.filter(
    (user) => user.services?.[0]?.name !== "Actor"
  );

  const [activeTab, setActiveTab] = useState("1");

  const tabItems = [
    { key: "1", label: "Today" },
    { key: "2", label: "Talent" },
    { key: "3", label: "Jobs" },
  ];

  const items = [
    {
      label: (
        <div className="flex items-center justify-between text-base px-4 py-2">
          <div className="flex gap-3 items-center">
            <img src={user} alt="Profile" className="w-4 h-4" />
            <span className="text-[12px]">Your profile</span>
          </div>

          <RightOutlined style={{ fontStyle: "5px" }} />
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex items-center justify-between text-base px-4 py-2">
          <div className="flex gap-3 items-center">
            <img src={view} alt="view" className="w-4 h-4" />
            <span className="text-[12px]">View my account</span>
          </div>
          <RightOutlined style={{ fontStyle: "5px" }} />
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex items-center justify-between text-base px-4 py-2">
          <div className="flex gap-3 items-center">
            <img src={share} alt="share" className="w-4 h-4" />
            <span className="text-[12px]">Share your profile</span>
          </div>
        </div>
      ),
      key: "2",
    },

    {
      type: "divider",
    },
    {
      label: (
        <div className="flex items-center justify-between text-base px-4 py-2">
          <div className="flex gap-3 items-center">
            <img src={bookmark} alt="bookmark" className="w-4 h-4" />
            <span className="text-[12px]">Bookmarks</span>
          </div>
          <RightOutlined style={{ fontStyle: "5px" }} />
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className="flex items-center justify-between text-base px-4 py-2">
          <div className="flex gap-3 items-center">
            <img src={setting} alt="Settings" className="w-4 h-4" />
            <span className="text-[12px]">Settings</span>
          </div>

          <RightOutlined style={{ fontStyle: "5px" }} />
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div className="flex items-center justify-between text-base px-4 py-2">
          <div className="flex gap-3 items-center">
            <img src={support} alt="support" className="w-4 h-4" />
            <span className="text-[12px]">Support</span>
          </div>

          <RightOutlined style={{ fontStyle: "5px" }} />
        </div>
      ),
      key: "5",
    },
    {
      label: (
        <div className="flex items-center gap-3 text-base px-4 py-2 text-[#9900FF]">
          <span className="text-[12px]">Sign out</span>
        </div>
      ),
      key: "3",
    },
  ];

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  // Close the sidebar when a click outside occurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarVisible(false); // Close sidebar if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSidebar = (event) => {
    event.stopPropagation();
    setSidebarVisible((prev) => {
      const newSidebarState = !prev;
      if (newSidebarState) {
        // Disable body scrolling when the sidebar is open
        document.body.style.overflow = 'hidden';
      } else {
        // Enable body scrolling when the sidebar is closed
        document.body.style.overflow = 'auto';
      }
      return newSidebarState;
    });
  };
  

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
              <div className="md:col-span-2">
                <div className="text-[#4FD6FA] text-[16px]">Spotlight</div>

                {isLoading ? (
                  <div className="flex justify-center items-center py-10">
                    <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                  </div>
                ) : articlesError ? (
                  <div className="text-red-500 text-center py-10">
                    {articlesError}
                  </div>
                ) : (
                  <Articles articles={articles?.data?.Articles || []} />
                )}
              </div>

              <div>
                <div className="text-[#AF98BF] text-[16px]">Spotlight</div>

                {isTalentsLoading ? (
                  <div className="flex justify-center items-center py-10">
                    <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                  </div>
                ) : clientsError ? (
                  <div className="text-red-500 text-center py-10">
                    {clientsError}
                  </div>
                ) : (
                  <TalentSpotlight />
                )}
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
              ) : clientsError ? (
                <div className="text-red-500 text-center py-10">
                  {clientsError}
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
              ) : clientsError ? (
                <div className="text-red-500 text-center py-10">
                  {clientsError}
                </div>
              ) : (
                <div>
                  {(expandedList === null || expandedList === "actors") && (
                    <TalentList
                      id="actors"
                      talents={actors || []}
                      title="Performing Talent"
                      isExpanded={expandedList === "actors"}
                      toggleExpanded={() =>
                        setExpandedList(
                          expandedList === "actors" ? null : "actors"
                        )
                      }
                    />
                  )}

                  {(expandedList === null || expandedList === "crew") && (
                    <TalentList
                      id="crew"
                      talents={others}
                      title="Crew"
                      isExpanded={expandedList === "crew"}
                      toggleExpanded={() =>
                        setExpandedList(expandedList === "crew" ? null : "crew")
                      }
                    />
                  )}

                  {(expandedList === null || expandedList === "creative") && (
                    <TalentList
                      id="creative"
                      talents={others}
                      title="Creative Management"
                      isExpanded={expandedList === "creative"}
                      toggleExpanded={() =>
                        setExpandedList(
                          expandedList === "creative" ? null : "creative"
                        )
                      }
                    />
                  )}
                </div>
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
              <div
                className="flex items-center ml-auto cursor-pointer"
                onClick={toggleSidebar}
              >
                {profile?.singleData?.user?.profile_photo_url ? (
                  <img
                    src={profile?.singleData?.user?.profile_photo_url}
                    alt="profile-picture"
                    className="w-auto h-[30px] object-cover"
                  />
                ) : (
                  <Avatar
                    style={{ backgroundColor: "#3f8bcaa1" }}
                    icon={<UserOutlined />}
                    size={30}
                    shape="square"
                  />
                )}
              </div>

              {/* Dark background overlay */}
              <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                  sidebarVisible
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              ></div>

              {/* Sidebar */}
              <div
                ref={sidebarRef} // Attach the ref to the sidebar
                className={`fixed top-0 left-0 h-full bg-white bg-opacity-70 w-[80%] z-50 transform transition-transform ease-in-out duration-300 ${
                  sidebarVisible ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <MobileSidebar profile={profile?.singleData?.user} toggleSidebar={toggleSidebar} />
              </div>
            </div>

            {/* Tab Navigation */}
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

            {/* Message Link */}
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

        {/* Tab Content */}
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
                ) : articlesError ? (
                  <div className="text-red-500 text-center py-10">
                    {articlesError}
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
              ) : clientsError ? (
                <div className="text-red-500 text-center py-10">
                  {clientsError}
                </div>
              ) : (
                <div>
                  {(expandedList === null || expandedList === "actors") && (
                    <TalentList
                      id="actors"
                      talents={actors || []}
                      title="Performing Talent"
                      isExpanded={expandedList === "actors"}
                      toggleExpanded={() =>
                        setExpandedList(
                          expandedList === "actors" ? null : "actors"
                        )
                      }
                    />
                  )}

                  {(expandedList === null || expandedList === "crew") && (
                    <TalentList
                      id="crew"
                      talents={others}
                      title="Crew"
                      isExpanded={expandedList === "crew"}
                      toggleExpanded={() =>
                        setExpandedList(expandedList === "crew" ? null : "crew")
                      }
                    />
                  )}

                  {(expandedList === null || expandedList === "creative") && (
                    <TalentList
                      id="creative"
                      talents={others}
                      title="Creative Management"
                      isExpanded={expandedList === "creative"}
                      toggleExpanded={() =>
                        setExpandedList(
                          expandedList === "creative" ? null : "creative"
                        )
                      }
                    />
                  )}
                </div>
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

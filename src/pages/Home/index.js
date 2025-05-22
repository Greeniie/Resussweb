import React, { useState, useEffect, useRef, useMemo } from "react";
import HomeNav from "../../components/HomeNav";
import Carousel from "../../components/Carousel";
import ad from "../../assets/testimgs/ad.png";
import adjobpage from "../../assets/testimgs/adjobpage.png";
import testimg3 from "../../assets/testimgs/testimg3.png";
import messages from "../../assets/menu-icons/messages.png";
import Articles from "../../components/Articles";
import TalentSpotlight from "../../components/TalentSpotlight";
import {
  UserOutlined,
  LoadingOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import TalentFilters from "../../components/TalentFilters";
import TalentList from "../../components/TalentList";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../../redux/clientSlice";
import { getAllArticles } from "../../redux/articleSlice";
import { getAllJobs } from "../../redux/jobSlice";
import { getProfile } from "../../redux/profileSlice";
import MobileSidebar from "../../components/MobileSidebar";
import JobList from "../../components/JobList";
import JobFilters from "../../components/JobFilters";
import filterimg from "../../assets/images/filtersmobile.png";

const Home = () => {
  const dispatch = useDispatch();
  const { articles, users, profile, jobs } = useSelector((state) => state);
  const [filters, setFilters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTalentsLoading, setIsTalentsLoading] = useState(true);
  const [isJobsLoading, setIsJobsLoading] = useState(true);
  const [articlesError, setArticlesError] = useState(null);
  const [clientsError, setClientsError] = useState(null);
  const [jobsError, setJobsError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("homeActiveTab") || "1";
  });

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

    if (!users?.data?.users?.length) {
      dispatch(getAllClients())
        .catch((err) => {
          console.error("Failed to fetch clients:", err);
          setClientsError(
            "Failed to load talents. Please check your internet connection."
          );
        })
        .finally(() => setIsTalentsLoading(false));
    } else {
      setIsTalentsLoading(false);
    }

    dispatch(getAllJobs())
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
        setJobsError(
          "Failed to load jobs. Please check your internet connection."
        );
      })
      .finally(() => setIsJobsLoading(false));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("homeActiveTab", activeTab);
  }, [activeTab]);

  const [expandedList, setExpandedList] = useState(null); // 'actors', 'crew', 'creative' or null

  const tabItems = [
    { key: "1", label: "Today" },
    { key: "2", label: "Talent" },
    { key: "3", label: "Jobs" },
  ];

  const talentList = users?.data?.users;
  const [filteredTalents, setFilteredTalents] = useState(talentList || []);

  useEffect(() => {
    if (!filters) {
      setFilteredTalents(talentList || []);
    }
  }, [talentList, filters]);

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleSidebar = (event) => {
    if (event) event.stopPropagation();
    setSidebarVisible((prev) => !prev);
  };

  const jobtags = [
    { name: "Film", color: "#EB6A2B" },
    { name: "Series", color: "#31AAEA" },
    { name: "Other", color: "#3AAB5F" },
  ];

  const applyFilters = (newFilters) => {
    setFilters(newFilters); // update filters state

    const calculateAge = (dob) => {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };

    const filtered = talentList.filter((talent) => {
      const {
        selectedGenders = [],
        location,
        selectedRoles,
        ageRange,
      } = newFilters || {};

      const genderPass =
        !selectedGenders?.length ||
        selectedGenders.includes("All") ||
        selectedGenders.includes(talent.gender);
      const locationPass = !location || talent.location?.includes(location);
      const rolesPass =
        !selectedRoles?.length ||
        talent.services?.some((s) => selectedRoles.includes(s.name));
      const agePass =
        !ageRange ||
        (talent.dob &&
          (() => {
            const age = calculateAge(talent.dob);
            return age >= ageRange[0] && age <= ageRange[1];
          })());

      return genderPass && locationPass && rolesPass && agePass;
    });

    setFilteredTalents(filtered);
  };

  const clearFilters = () => {
    setFilters(null);
    setFilteredTalents(talentList); // reset to full list
    localStorage.removeItem("talentFilters");
  };

  const categorizedTalents = useMemo(() => {
    const categorized = {
      performingTalent: [],
      crew: [],
      creativeManagement: [],
    };

    const sortByProfilePhoto = (a, b) => {
      const aHasPhoto =
        a.profile_photo_url && a.profile_photo_url.trim() !== "";
      const bHasPhoto =
        b.profile_photo_url && b.profile_photo_url.trim() !== "";
      if (aHasPhoto === bHasPhoto) return 0;
      return aHasPhoto ? -1 : 1; // talents with photo first
    };

    filteredTalents.forEach((user) => {
      if (user.services?.[0]?.name === "Actor") {
        categorized.performingTalent.push(user);
      } else if (
        user.services?.[0]?.name === "Producer (Film)" ||
        user.services?.[0]?.name === "Producer (TV commercial)" ||
        user.services?.[0]?.name === "Producer [IM]"
      ) {
        categorized.creativeManagement.push(user);
      } else {
        categorized.crew.push(user);
      }
    });

    categorized.performingTalent.sort(sortByProfilePhoto);
    categorized.crew.sort(sortByProfilePhoto);
    categorized.creativeManagement.sort(sortByProfilePhoto);

    return categorized;
  }, [filteredTalents]);

  const handleShowAll = (category) => {
    setExpandedList((prev) => (prev === category ? null : category));
  };

  const [showFilters, setShowFilters] = useState(false);

  const renderActiveFilters = () => {
    if (!filters || Object.keys(filters).length === 0) {
      return <div className="text-gray-500 text-sm">No filters applied</div>;
    }

    return (
      <div className="flex flex-wrap gap-[5px] mt-2">
        {Object.entries(filters).map(([key, value]) => {
          if (
            value === null ||
            value === undefined ||
            (Array.isArray(value) && value.length === 0)
          )
            return null;

          let displayValue = "";

          if (
            key === "ageRange" &&
            Array.isArray(value) &&
            value.length === 2
          ) {
            displayValue = `${value[0]} - ${value[1]}`;
          } else if (Array.isArray(value)) {
            displayValue = value.join(", ");
          } else if (typeof value === "object") {
            displayValue = JSON.stringify(value);
          } else {
            displayValue = value;
          }

          return (
            <span
              key={key}
              className="text-[12px] mr-2 px-3 py-1 rounded-[30px] bg-[#461378] text-white w-fit"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}: {displayValue}
            </span>
          );
        })}
      </div>
    );
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
                <TalentFilters onApplyFilters={applyFilters} />
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
                  {/* Check if all categories are empty */}
                  {categorizedTalents.performingTalent.length === 0 &&
                  categorizedTalents.crew.length === 0 &&
                  categorizedTalents.creativeManagement.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 mb-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h2 className="text-2xl font-semibold mb-2">
                        No Talents Found
                      </h2>
                      <p className="max-w-md mb-6">
                        Sorry, we couldn't find any talents matching your
                        filters. Try adjusting or clearing your filters to see
                        more results.
                      </p>
                      <button
                        onClick={clearFilters}
                        className="px-5 py-2 bg-[#461378] text-white rounded-lg hover:bg-[#3a0f63] transition"
                      >
                        Clear Filters
                      </button>
                    </div>
                  ) : (
                    <>
                      {filters && (
                        <div className="flex justify-between items-start pb-[20px]">
                          <div>{renderActiveFilters()}</div>
                          <button
                            onClick={clearFilters}
                            disabled={
                              !filters || Object.keys(filters).length === 0
                            }
                            className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                              filters && Object.keys(filters).length > 0
                                ? "bg-[#461378] text-white hover:bg-[#3a0f5d]"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                          >
                            Clear Filters
                          </button>
                        </div>
                      )}
                      {!expandedList && (
                        <>
                          {categorizedTalents.performingTalent.length > 0 && (
                            <TalentList
                              title="Performing Talent"
                              talents={categorizedTalents.performingTalent.slice(
                                0,
                                8
                              )}
                              onShowAll={() =>
                                handleShowAll("performingTalent")
                              }
                            />
                          )}
                          {categorizedTalents.crew.length > 0 && (
                            <TalentList
                              title="Crew"
                              talents={categorizedTalents.crew.slice(0, 8)}
                              onShowAll={() => handleShowAll("crew")}
                            />
                          )}
                          {categorizedTalents.creativeManagement.length > 0 && (
                            <TalentList
                              title="Creative Management"
                              talents={categorizedTalents.creativeManagement.slice(
                                0,
                                8
                              )}
                              onShowAll={() =>
                                handleShowAll("creativeManagement")
                              }
                            />
                          )}
                        </>
                      )}

                      {expandedList === "performingTalent" && (
                        <TalentList
                          title="Performing Talent"
                          talents={categorizedTalents.performingTalent}
                          onShowAll={() => handleShowAll(null)}
                          showAll
                        />
                      )}

                      {expandedList === "crew" && (
                        <TalentList
                          title="Crew"
                          talents={categorizedTalents.crew}
                          onShowAll={() => handleShowAll(null)}
                          showAll
                        />
                      )}

                      {expandedList === "creativeManagement" && (
                        <TalentList
                          title="Creative Management"
                          talents={categorizedTalents.creativeManagement}
                          onShowAll={() => handleShowAll(null)}
                          showAll
                        />
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "3" && (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen w-[90%] gap-[20px] mx-auto mt-[50px]">
            {/* Filter Column */}
            <div>
              {isJobsLoading ? (
                <div className="flex justify-center items-center py-10">
                  <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                </div>
              ) : jobsError ? (
                <div className="text-red-500 text-center py-10">
                  {jobsError}
                </div>
              ) : (
                <JobFilters />
              )}
            </div>

            {/* Job List Column */}
            <div className="col-span-1 md:col-span-2">
              {isJobsLoading ? (
                <div className="flex justify-center items-center py-10">
                  <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                </div>
              ) : jobsError ? (
                <div className="text-red-500 text-center py-10">
                  {jobsError}
                </div>
              ) : (
                <div>
                  <JobList jobs={jobs?.data?.data} />
                </div>
              )}
            </div>

            {/* Sponsored Job Column — Hidden on Tablets/iPads */}
            <div className="hidden lg:block">
              <div className="text-[#CCC6E2] font-medium text-[14px] pb-[10px]">
                Sponsored Job
              </div>

              <div className="bg-white flex flex-col gap-[10px] min-h-[300px] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] mr-auto px-[30px] py-[30px] md:py-[35px]">
                <div className="text-[10px] bg-[#EB2B93] w-fit rounded-[84px] py-[5px] px-[10px] text-white">
                  open call
                </div>
                <div className="text-[#000] text-[16px] uppercase font-semibold leading-[22px]">
                  Living In Bondage
                </div>
                <div>
                  <img
                    src={testimg3}
                    alt="jobbanner"
                    className="h-[180px] w-auto object-center object-cover rounded-[11px]"
                  />
                </div>
                <div className="flex gap-[10px] items-center">
                  {jobtags.map((tag) => (
                    <div
                      key={tag.name}
                      className={`text-[10px] bg-[${tag.color}] py-[5px] px-[10px] text-white w-fit rounded-[84px]`}
                    >
                      {tag.name}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-[30px]">
                  <div className="flex items-center gap-[10px] text-[#696969] text-[11px]">
                    <EnvironmentOutlined
                      style={{ color: "#696969", fontSize: "11px" }}
                    />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-[10px] text-[#696969] text-[11px]">
                    <ClockCircleOutlined
                      style={{ color: "#696969", fontSize: "11px" }}
                    />
                    <span>2 days</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={adjobpage}
                  alt="jobpagead"
                  className="w-[200px] h-auto object-center object-cover"
                />
              </div>
            </div>
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
                  <div
                    className="relative h-[30px] w-[30px] bg-cover" // removed overflow-hidden
                    style={{
                      backgroundImage: `url(${profile?.singleData?.user?.profile_photo_url})`,
                    }}
                  ></div>
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
                className={`fixed top-0 left-0 h-full bg-white bg-opacity-70 w-[80%] z-[9999] transform transition-transform ease-in-out duration-300 ${
                  sidebarVisible ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <MobileSidebar
                  profile={profile?.singleData?.user}
                  toggleSidebar={toggleSidebar}
                />
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
                {/* Show no results if all categories empty */}
                {categorizedTalents.performingTalent.length === 0 &&
                categorizedTalents.crew.length === 0 &&
                categorizedTalents.creativeManagement.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 mb-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">
                      No Talents Found
                    </h2>
                    <p className="max-w-md mb-6">
                      Sorry, we couldn't find any talents matching your filters.
                      Try adjusting or clearing your filters to see more
                      results.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="px-5 py-2 bg-[#461378] text-white rounded-lg hover:bg-[#3a0f63] transition"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Mobile Filters Button */}
                    <div className="pt-[30px] pl-[30px]">
                      <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex gap-[10px] items-center pb-[20px]"
                      >
                        <img
                          src={filterimg}
                          alt="filter"
                          className="h-[16px] w-auto"
                        />
                        <div className="text-[#898A8D] text-[14px]">
                          Show filters
                        </div>
                        <CaretDownOutlined
                          style={{
                            fontSize: "14px",
                            color: "#898A8D",
                            transform: showFilters
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </button>
                    </div>
                    {/* Filters Sidebar */}
                    {showFilters && (
                      <div
                        style={{ zIndex: 9999 }}
                        className={`fixed inset-0 backdrop-blur-sm bg-white/70 flex sm:justify-end justify-center transition-transform duration-700 ease-in-out`}
                      >
                        <TalentFilters onApplyFilters={applyFilters} />
                        <button
                          onClick={() => setShowFilters(false)}
                          className="absolute top-4 right-4 text-gray-500"
                        >
                          <div className="block md:hidden">
                            <div className="flex gap-[10px] items-center">
                              {/* <img
                                src={filterimg}
                                alt="filter"
                                className="h-[16px] w-auto"
                              /> */}
                              <div className="text-[#ff0000] text-[14px]">
                                Hide filters
                              </div>
                              <CaretUpOutlined
                                style={{
                                  fontSize: "14px",
                                  color: "#ff0000",
                                  transform: showFilters
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                }}
                              />
                            </div>
                          </div>
                        </button>
                      </div>
                    )}

                    {filters && (
                      <div className="flex justify-between items-start pb-[20px]">
                        <div>{renderActiveFilters()}</div>
                        <button
                          onClick={clearFilters}
                          disabled={
                            !filters || Object.keys(filters).length === 0
                          }
                          className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                            filters && Object.keys(filters).length > 0
                              ? "bg-[#461378] text-white hover:bg-[#3a0f5d]"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          Clear Filters
                        </button>
                      </div>
                    )}

                    {!expandedList && (
                      <>
                        {categorizedTalents.performingTalent.length > 0 && (
                          <TalentList
                            title="Performing Talent"
                            talents={categorizedTalents.performingTalent.slice(
                              0,
                              8
                            )}
                            onShowAll={() => handleShowAll("performingTalent")}
                          />
                        )}
                        {categorizedTalents.crew.length > 0 && (
                          <TalentList
                            title="Crew"
                            talents={categorizedTalents.crew.slice(0, 8)}
                            onShowAll={() => handleShowAll("crew")}
                          />
                        )}
                        {categorizedTalents.creativeManagement.length > 0 && (
                          <TalentList
                            title="Creative Management"
                            talents={categorizedTalents.creativeManagement.slice(
                              0,
                              8
                            )}
                            onShowAll={() =>
                              handleShowAll("creativeManagement")
                            }
                          />
                        )}
                      </>
                    )}

                    {expandedList === "performingTalent" && (
                      <TalentList
                        title="Performing Talent"
                        talents={categorizedTalents.performingTalent}
                        onShowAll={() => handleShowAll(null)}
                        showAll
                      />
                    )}

                    {expandedList === "crew" && (
                      <TalentList
                        title="Crew"
                        talents={categorizedTalents.crew}
                        onShowAll={() => handleShowAll(null)}
                        showAll
                      />
                    )}

                    {expandedList === "creativeManagement" && (
                      <TalentList
                        title="Creative Management"
                        talents={categorizedTalents.creativeManagement}
                        onShowAll={() => handleShowAll(null)}
                        showAll
                      />
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === "3" && (
          <div className="">
            <div className="">
              {isJobsLoading ? (
                <div className="flex justify-center items-center py-10">
                  <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                </div>
              ) : jobsError ? (
                <div className="text-red-500 text-center py-10">
                  {jobsError}
                </div>
              ) : (
                <div>
                  <JobList jobs={jobs?.data?.data} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

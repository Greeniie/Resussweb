import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import mobilelogo from "../assets/mobilelogo.png";
import { Modal } from "react-bootstrap";
import {
  SearchOutlined,
  CloseCircleOutlined,
  UserOutlined,
  CaretDownOutlined,
  RightOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import Form from "react-bootstrap/Form";
import home from "../assets/menu-icons/home.png";
import resuss from "../assets/menu-icons/resuss.png";
import app from "../assets/menu-icons/app.png";
import projects from "../assets/menu-icons/projects.png";
import messages from "../assets/menu-icons/messages.png";
import homeactive from "../assets/menu-icons/homeactive.png";
import resussactive from "../assets/menu-icons/resussactive.png";
import appactive from "../assets/menu-icons/appactive.png";
import projectsactive from "../assets/menu-icons/projectsactive.png";
import messagesactive from "../assets/menu-icons/messagesactive.png";
import usericon from "../assets/menu-icons/user.png";
import support from "../assets/menu-icons/support.png";
import bookmark from "../assets/menu-icons/bookmark.png";
import view from "../assets/menu-icons/view.png";
import share from "../assets/menu-icons/share.png";
import setting from "../assets/menu-icons/setting.png";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/profileSlice";
import { logout } from "../redux/authSlice";
import ExpirySession from "../utils/expirySession";
import verified from "../assets/menu-icons/verified.png";

import { Dropdown } from "antd";
import { liveBaseURL } from "../networkUrl";

const HomeNav = () => {
  const user = ExpirySession.get("user");
  const yourAuthToken = user?.access_token;

  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState({});
  const [hasSearched, setHasSearched] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [logoSpacing, setLogoSpacing] = useState("gap-x-20"); // Default spacing
  const [menuSpacing, setMenuSpacing] = useState("gap-x-24"); // Default spacing
  const location = useLocation();

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSearchCollapsed(width < 1024); // Adjust breakpoint for search collapse

      // Dynamically adjust spacing between logo & search
      if (width >= 1280) {
        setLogoSpacing("gap-x-20"); // Extra wide screens
        setMenuSpacing("gap-x-24");
      } else if (width >= 1024) {
        setLogoSpacing("gap-x-14"); // Large screens
        setMenuSpacing("gap-x-14");
      } else {
        setLogoSpacing("gap-x-8"); // Medium/smaller screens
        setMenuSpacing("gap-x-8");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      requestAnimationFrame(() => {
        if (window.scrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = window.scrollY;
      });

      // Prevents flickering when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!showSearchModal || searchValue.trim() === "") {
      setHasSearched(false);
      setSearchResults(null); // Optional: reset previous results too
    }
  }, [showSearchModal, searchValue]);

  const fullName = `${profile?.singleData?.user?.first_name || ""}${
    profile?.singleData?.user?.last_name || ""
  }`.toLowerCase();

  const handleShare = async (talent) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Share your profile",
          url: `https://resussweb.netlify.app/user/${profile?.singleData?.user?.first_name}${profile?.singleData?.user?.last_name}?id=${profile?.singleData?.user?.id}`, // Current page URL
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support the share API
      alert("Share feature is not supported on this browser.");
    }
  };

  const items = [
    {
      label: (
        <Link
          to={`/${fullName}`}
          className="flex items-center justify-between text-base px-4 py-2"
        >
          <div className="flex gap-3 items-center">
            <img src={usericon} alt="Profile" className="w-4 h-4" />
            <span className="text-[12px]">Your profile</span>
          </div>

          <RightOutlined style={{ fontStyle: "5px" }} />
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          to={`/user/${fullName}`}
          state={{ id: profile?.singleData?.user?.id }}
          className="flex items-center justify-between text-base px-4 py-2"
        >
          <div className="flex gap-3 items-center">
            <img
              src={view}
              alt="view"
              className="w-auto h-3 object-cover object-center"
            />
            <span className="text-[12px]">View my account</span>
          </div>
          <RightOutlined style={{ fontStyle: "5px" }} />
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <div
          onClick={() => handleShare()}
          className="flex items-center justify-between text-base px-4 py-2 cursor-pointer"
        >
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
        <div
          className="flex items-center gap-3 text-base px-4 py-2 text-[#9900FF]"
          onClick={() => dispatch(logout())}
        >
          <span className="text-[12px]">Sign out</span>
        </div>
      ),
      key: "6",
    },
  ];

  const handleClear = () => {
    setSearchValue("");
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults({});
      return;
    }
    setHasSearched(true);
    setLoadingResults(true);
    try {
      const response = await fetch(`${liveBaseURL}/user/search/general`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${yourAuthToken}`, // <- make sure this is set
        },
        body: JSON.stringify({ input: query }),
      });

      const data = await response.json();
      setSearchResults(data); // assuming API returns { users: [], articles: [], jobs: [] }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoadingResults(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch(searchValue);
    }, 500); // debounce so it doesn't fire too often

    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  return (
    <nav className="homenavbar">
      <div className="md:hidden">
        <div
          style={{ zIndex: "99" }}
          className={`fixed bg-[#fff] top-0 left-0 w-full transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center gap-[20px] py-[10px] md:hidden px-[10px]">
            <img src={logo} className="h-[30px] w-auto" alt="logo" />

            {/* Search Button */}
            {!showSearch ? (
              <button
                onClick={() => setShowSearchModal(true)}
                className="text-[#abb0ba]"
              >
                <SearchOutlined style={{ fontSize: "22px" }} />
              </button>
            ) : (
              <Form.Group className="relative w-full transition-all duration-300">
                <div className="absolute bottom-[5px] left-3 flex items-center text-[#abb0ba]">
                  <SearchOutlined style={{ fontSize: "20px" }} />
                </div>

                {searchValue && (
                  <button
                    className="absolute bottom-[5px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                    onClick={() => setSearchValue("")}
                  >
                    <CloseCircleOutlined />
                  </button>
                )}

                <Form.Control
                  onClick={() => setShowSearchModal(true)}
                  type="text"
                  name="searchValue"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search"
                  className="border-[#6633FF] p-1 custom-placeholder ps-5"
                />
              </Form.Group>
            )}
          </div>
        </div>
        <div
          style={{ zIndex: "99" }}
          className="fixed bottom-0 left-0 w-full bg-white shadow-md py-2 flex justify-center"
        >
          <div className="flex gap-[20px] items-center">
            {[
              {
                name: "Home",
                path: "/home",
                icon: home,
                activeIcon: homeactive,
              },
              {
                name: "Resources",
                path: "/resources",
                icon: resuss,
                activeIcon: resussactive,
              },
              {
                name: "Applications",
                path: "/applications",
                icon: app,
                activeIcon: appactive,
              },
              {
                name: "Your Projects",
                path: "/projects",
                icon: projects,
                activeIcon: projectsactive,
              },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center w-[60px] hover:text-[#9900FF] ${
                  location.pathname === item.path
                    ? "text-[#9900FF]"
                    : "text-[#ABB0BA]"
                }`}
              >
                <img
                  src={
                    location.pathname === item.path
                      ? item.activeIcon
                      : item.icon
                  }
                  alt={item.name}
                  className="h-[20px] w-auto object-cover object-center"
                />
                <div className="text-[10px]">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center w-full py-4 bg-white px-6 md:px-10 lg:px-16">
        {/* Left Section (Logo + Search) */}
        <div className={`flex items-center ${logoSpacing} flex-nowrap`}>
          <img
            src={logo}
            className="h-[40px] w-auto object-contain flex-shrink-0"
            alt="logo"
          />

          {/* Search - Toggle Between Input & Icon */}
          {isSearchCollapsed ? (
            <button
              className="text-[#abb0ba] hover:text-[#9900FF] focus:outline-none"
              onClick={() => setShowSearchModal(true)}
            >
              <SearchOutlined style={{ fontSize: "24px" }} />
            </button>
          ) : (
            <Form.Group className="relative w-full w-[400px]">
              <div className="absolute bottom-[10px] left-3 flex items-center text-[#abb0ba]">
                <SearchOutlined style={{ fontSize: "20px" }} />
              </div>

              {searchValue && (
                <button
                  className="absolute bottom-[10px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                  onClick={() => setSearchValue("")}
                >
                  <CloseCircleOutlined />
                </button>
              )}

              <Form.Control
                onClick={() => setShowSearchModal(true)}
                type="text"
                name="searchValue"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search anything"
                className="border-[#6633FF] p-2 custom-placeholder ps-5 w-full"
              />
            </Form.Group>
          )}
        </div>

        {/* Right Section (Icons & Avatar) */}
        <div
          className={`flex items-center ${menuSpacing}  flex-nowrap ${
            showSearchModal ? "hidden" : "flex"
          }`}
        >
          <div className="flex items-center gap-x-6">
            {[
              {
                name: "Home",
                path: "/home",
                icon: home,
                activeIcon: homeactive,
              },
              {
                name: "Resources",
                path: "/resources",
                icon: resuss,
                activeIcon: resussactive,
              },
              {
                name: "Applications",
                path: "/applications",
                icon: app,
                activeIcon: appactive,
              },
              {
                name: "Projects",
                path: "/projects",
                icon: projects,
                activeIcon: projectsactive,
              },
              {
                name: "Messages",
                path: "/messages",
                icon: messages,
                activeIcon: messagesactive,
              },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center w-[50px] hover:text-[#9900FF] ${
                  location.pathname === item.path
                    ? "text-[#9900FF]"
                    : "text-[#ABB0BA]"
                }`}
              >
                <img
                  src={
                    location.pathname === item.path
                      ? item.activeIcon
                      : item.icon
                  }
                  alt={item.name}
                  className="h-[20px] w-auto object-cover object-center"
                />
                <div className="text-[10px]">{item.name}</div>
              </Link>
            ))}
          </div>

          {/* Avatar */}

          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div
              className="flex items-center ml-auto cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              {profile?.singleData?.user?.profile_photo_url ? (
                <div
                  className="relative h-[40px] w-[40px] bg-cover overflow-hidden"
                  style={{
                    backgroundImage: `url(${profile?.singleData?.user?.profile_photo_url})`,
                  }}
                ></div>
              ) : (
                <Avatar
                  style={{ backgroundColor: "#3f8bcaa1" }}
                  icon={<UserOutlined />}
                  size={40}
                  shape="square"
                />
              )}

              <CaretDownOutlined />
            </div>
          </Dropdown>
        </div>
        {/* Search Modal (Like LinkedIn) */}
        <Modal
          size="lg"
          show={showSearchModal}
          onHide={() => setShowSearchModal(false)}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Header
            closeButton
            className="flex items-center justify-between bg-[#f8f9fa] rounded-t-2xl shadow-sm"
          >
            <div className="flex-1 relative">
              <Form.Control
                autoFocus
                type="text"
                name="searchValue"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search anything..."
                className="pl-4 pr-12 py-3 rounded-full shadow-inner focus:ring-2 focus:ring-[#6633FF] focus:outline-none text-sm"
              />
              {searchValue && (
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-[#6633FF] transition"
                  onClick={() => setSearchValue("")}
                >
                  <CloseCircleOutlined className="text-lg" />
                </button>
              )}
            </div>
          </Modal.Header>

          <Modal.Body className="p-3 md:p-6">
            <div className="max-h-[70vh] overflow-y-auto pr-2">
              {loadingResults ? (
                <div className="flex justify-center items-center py-10">
                  <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
                </div>
              ) : (
                <>
                  {hasSearched ? (
                    !searchResults?.users?.length &&
                    !searchResults?.articles?.length &&
                    !searchResults?.jobs?.length ? (
                      <div className="text-center text-gray-500 py-10">
                        No results found.
                      </div>
                    ) : (
                      <div className="flex flex-col gap-8 py-2">
                        {searchResults?.users?.length > 0 && (
                          <div>
                            <div className="text-lg md:text-xl text-[#70E1FF] font-semibold mb-3">
                              Talents
                            </div>
                            <div className="flex flex-col gap-3">
                              {searchResults.users.map((user) => (
                                <Link
                                  to={`/user/${user?.first_name}${user?.last_name}`}
                                  state={{ id: user?.id }}
                                  key={user?.id}
                                  className="result-card"
                                >
                                  <div
                                    className="avatar"
                                    style={{
                                      backgroundImage: `url(${user?.profile_photo_url})`,
                                    }}
                                  ></div>
                                  <div>
                                    <div className="font-medium text-gray-800 flex items-center gap-[10px]">
                                      {user.first_name} {user.last_name}{" "}
                                      <span>
                                        {user?.level === "verified" && (
                                          <div className="">
                                            <img
                                              src={verified}
                                              alt="bookmark"
                                              className="h-[20px] w-auto object-center object-cover"
                                            />
                                          </div>
                                        )}
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                      {user?.services?.length > 0 ? (
                                        user.services.map((role, index) => (
                                          <div
                                            key={index}
                                            className={`px-3 py-1 rounded-full text-xs ${
                                              index === 0
                                                ? "bg-[#461378] text-white"
                                                : "bg-[#F6E9FF] text-[#330066]"
                                            }`}
                                          >
                                            {role.name}
                                          </div>
                                        ))
                                      ) : (
                                        <span className="text-[#461378] text-xs">
                                          No roles selected
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {searchResults?.articles?.length > 0 && (
                          <div>
                            <div className="text-lg md:text-xl text-[#70E1FF] font-semibold mb-3">
                              Articles
                            </div>
                            <div className="flex flex-col gap-3">
                              {searchResults.articles.map((article) => (
                                <Link
                                  to={`/article/details/${article?.id}`}
                                  key={article?.id}
                                  className="result-card"
                                >
                                  <div
                                    className="avatar"
                                    style={{
                                      backgroundImage: `url(${article?.image_path})`,
                                    }}
                                  ></div>
                                  <span className="font-medium text-gray-800">
                                    {article?.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {searchResults?.jobs?.length > 0 && (
                          <div>
                            <div className="text-lg md:text-xl text-[#70E1FF] font-semibold mb-3">
                              Jobs
                            </div>
                            <div className="flex flex-col gap-3">
                              {searchResults.jobs.map((job) => (
                                <Link
                                  to={`/job/${job?.id}`}
                                  key={job.id}
                                  className="result-card"
                                >
                                  <div
                                    className="avatar"
                                    style={{
                                      backgroundImage: `url(${job?.job_banner})`,
                                    }}
                                  ></div>
                                  <span className="font-medium text-gray-800">
                                    {job?.headline}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  ) : (
                    <div className="text-center text-gray-400 py-10">
                      Start typing to search.
                    </div>
                  )}
                </>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </nav>
  );
};

export default HomeNav;

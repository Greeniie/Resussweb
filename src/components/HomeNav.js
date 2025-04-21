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
import user from "../assets/menu-icons/user.png";
import support from "../assets/menu-icons/support.png";
import bookmark from "../assets/menu-icons/bookmark.png";
import view from "../assets/menu-icons/user.png";
import share from "../assets/menu-icons/share.png";
import setting from "../assets/menu-icons/setting.png";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/profileSlice";
import { logout } from "../redux/authSlice";

import { Dropdown } from "antd";

const HomeNav = () => {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
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

  const fullName = `${profile?.singleData?.user?.first_name || ""}${
    profile?.singleData?.user?.last_name || ""
  }`.toLowerCase();

  const items = [
    {
      label: (
        <Link
          to={`/${fullName}`}
          className="flex items-center justify-between text-base px-4 py-2"
        >
          <div className="flex gap-3 items-center">
            <img src={user} alt="Profile" className="w-4 h-4" />
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
          to={`/user/${profile?.singleData?.user?.id}`}
          className="flex items-center justify-between text-base px-4 py-2"
        >
          <div className="flex gap-3 items-center">
            <img src={view} alt="view" className="w-4 h-4" />
            <span className="text-[12px]">View my account</span>
          </div>
          <RightOutlined style={{ fontStyle: "5px" }} />
        </Link>
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
                placeholder="Search"
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
        <Modal show={showSearchModal} onHide={() => setShowSearchModal(false)}>
          <Modal.Header closeButton>
            <Form.Control
              autoFocus
              type="text"
              name="searchValue"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="border-[#6633FF] p-2 w-full relative"
            />
            {searchValue && (
              <button
                className="absolute top-[30px] right-12 flex items-center cursor-pointer text-[#abb0ba]"
                onClick={() => setSearchValue("")}
              >
                <CloseCircleOutlined />
              </button>
            )}
          </Modal.Header>
          <Modal.Body>
            {/* Render search results dynamically */}
            <p className="text-center text-[#abb0ba]">
              Search results will appear here...
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </nav>
  );
};

export default HomeNav;

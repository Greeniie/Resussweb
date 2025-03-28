import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import mobilelogo from "../assets/mobilelogo.png";
import {
  SearchOutlined,
  CloseCircleOutlined,
  UserOutlined,
  CaretDownOutlined,
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

const HomeNav = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down -> Hide the search bar
        setIsVisible(false);
      } else {
        // Scrolling up -> Show the search bar
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <nav className="navbar bg-[#fff]">
      <div className="flex justify-between items-center gap-[20px] py-[10px] md:hidden">
      <div
      className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center gap-[20px] py-[10px] md:hidden px-[10px]">
        {/* Logo */}
        <img src={mobilelogo} className="h-[30px] w-auto" alt="logo" />

        {/* Search Bar */}
        <Form.Group className="relative w-full">
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
            type="text"
            name="searchValue"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            className="border-[#6633FF] p-1 custom-placeholder ps-5"
          />
        </Form.Group>
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

      <div className="hidden md:flex md:justify-between md:items-center w-[90%] mx-auto py-[10px]">
        <div className="flex gap-[80px] items-center">
          <img
            src={logo}
            className="h-[40px] w-auto object-center object-contain"
            alt="logo"
          />
          <Form.Group className="relative max-w-[400px]">
            <div className="absolute bottom-[10px] left-3 flex items-center text-[#abb0ba]">
              <SearchOutlined style={{ fontSize: "20px" }} />
            </div>

            {searchValue && (
              <button
                className="absolute bottom-[10px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                onClick={handleClear}
              >
                <CloseCircleOutlined />
              </button>
            )}
            <Form.Control
              type="text"
              name="searchValue"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="border-[#6633FF] p-2 custom-placeholder ps-5"
            />
          </Form.Group>
        </div>

        <div className="flex gap-[50px] items-center">
          <div className="flex gap-[20px] items-center">
            {/* Menu Items */}
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

          <div className="flex items-center">
            <Avatar
              style={{ backgroundColor: "#3f8bcaa1" }}
              icon={<UserOutlined />}
              size={40}
            />
            <CaretDownOutlined />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;

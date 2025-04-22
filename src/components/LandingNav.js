import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  SearchOutlined,
  CloseCircleOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import hamburger from "../assets/menu-icons/hamburgericon.png";
import { useSelector } from "react-redux";

const LandingNav = () => {
  const [menuSpacing, setMenuSpacing] = useState("gap-x-24"); // Default spacing
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Dynamically adjust spacing between logo & search
      if (width >= 1280) {
        setMenuSpacing("gap-x-24");
      } else if (width >= 1024) {
        setMenuSpacing("gap-x-14");
      } else {
        setMenuSpacing("gap-x-8");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Features", path: "/features" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
    { name: "Join now", path: "/create-account" },
  ];

  return (
    <nav>
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex justify-between items-center gap-[20px] py-[20px] w-[90%] mx-auto">
          <img
            src={logo}
            className="h-[40px] w-auto object-cover object-center"
            alt="logo"
          />
          <button onClick={() => setMobileMenuOpen(true)}>
            <img
              src={hamburger}
              alt="menu"
              className="h-[32px] w-auto object-cover object-center"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {/* Mobile Menu Overlay */}
        <div
          style={{ zIndex: "9999" }}
          className={`fixed top-0 right-0 h-full w-full bg-white flex flex-col px-6 py-10 shadow-2xl transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <img
              src={logo}
              className="h-[40px] w-auto object-contain"
              alt="logo"
            />
            <button onClick={() => setMobileMenuOpen(false)}>
              <CloseCircleOutlined className="text-2xl text-[#461378]" />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-left">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[#461378] text-[18px] font-semibold hover:text-[#9900FF] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <Link
                to="/home"
                className="mt-6 border-2 border-[#461378] rounded-full text-[#461378] text-center py-2 px-4 font-semibold hover:bg-[#f2eaff] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Go to Home
              </Link>
            ) : (
              <Link
                to="/login"
                className="mt-6 border-2 border-[#461378] rounded-full text-[#461378] text-center py-2 px-4 font-semibold hover:bg-[#f2eaff] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center w-full pt-10 px-6 md:px-18 lg:px-20">
        <img
          src={logo}
          className="h-[40px] w-auto object-contain flex-shrink-0"
          alt="logo"
        />

        <div
          className={`flex items-center ${menuSpacing} flex-nowrap`}
          style={{ zIndex: "999" }}
        >
          <div className="flex items-center justify-between gap-[30px]">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className=" text-[#461378] hover:text-[#9900FF] font-medium"
              >
                <div className="text-[16px]">{item.name}</div>
              </Link>
            ))}
          </div>

          <div className="flex items-center ml-auto">
            {isLoggedIn ? (
              <Link
                to="/home"
                className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-4 py-1 rounded-[60px] font-medium text-[16px]"
              >
                Go to Home
              </Link>
            ) : (
              <Link
                to="/login"
                className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-4 py-1 rounded-[60px] font-medium text-[16px]"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;

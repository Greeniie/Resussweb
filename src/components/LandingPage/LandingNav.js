import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CloseCircleOutlined } from "@ant-design/icons";

import hamburger from "../../assets/menu-icons/hamburgericon.png";
import { useSelector } from "react-redux";

const LandingNav = () => {
  const location = useLocation();

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
    { name: "How it works", path: "/how-it-works" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
    { name: "Join now", path: "/create-account" },
  ];

  return (
    <nav>
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex justify-between items-center gap-[20px] py-[20px] w-[90%] mx-auto">
          <Link to="/">
            <img
              src={logo}
              className="h-[40px] w-auto object-cover object-center"
              alt="logo"
            />
          </Link>

          <button onClick={() => setMobileMenuOpen(true)}>
            <img
              src={hamburger}
              alt="menu"
              className="h-[32px] w-auto object-cover object-center"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          style={{ zIndex: 9999 }}
          className={`fixed inset-0 backdrop-blur-sm bg-white/70 flex sm:justify-end justify-center transition-transform duration-500 ease-in-out ${
            mobileMenuOpen
              ? "translate-y-0 sm:translate-x-0"
              : "translate-y-full sm:translate-x-full"
          }`}
        >
          <div className="w-full sm:w-[400px] h-[100dvh] sm:h-full bg-white shadow-2xl sm:rounded-l-3xl rounded-t-3xl p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#461378] hover:text-[#9900FF] transition-colors duration-300"
                aria-label="Close menu"
              >
                <CloseCircleOutlined className="text-3xl" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-6 text-left">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium tracking-wide transition-all duration-200 w-fit ${
                    location.pathname === item.path
                      ? "text-[#461378] border-b-[3px] border-[#461378]"
                      : "text-[#461378] hover:text-[#9900FF]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Footer Action Button */}
            <div className="mt-auto pt-10">
              {isLoggedIn ? (
                <Link
                  to="/home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-3 rounded-full bg-[#461378] text-white font-semibold text-base hover:bg-[#5e1a9d] transition-all duration-300 shadow-md"
                >
                  Go to Home
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-3 rounded-full bg-[#461378] text-white font-semibold text-base hover:bg-[#5e1a9d] transition-all duration-300 shadow-md"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center w-full pt-10 px-6 md:px-18 lg:px-20">
        <Link to="/">
          <img
            src={logo}
            className="h-[40px] w-auto object-contain flex-shrink-0"
            alt="logo"
          />
        </Link>

        <div
          className={`flex items-center ${menuSpacing} flex-nowrap`}
          style={{ zIndex: "999" }}
        >
          <div className="flex items-center justify-between gap-[30px]">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="link group text-[16px] font-medium relative transition-colors duration-300"
              >
                <div className="relative">
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-[#461378] transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>
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

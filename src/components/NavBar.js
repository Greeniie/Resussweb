import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="flex justify-between items-center md:hidden">
          <div>
            <img src={logo} className="h-[30px] w-auto" alt="logo" />
          </div>
          
         
        </div>

        <div className="hidden md:flex md:justify-between md:items-center w-full">
          <div>
            <img src={logo} className="h-[40px] w-auto" alt="logo" />
          </div>
          <div className="flex gap-[20px] items-center text-center bg-white p-[3px] rounded-lg ">
          <div className="py-[6px] px-[50px] rounded-lg bg-[#461378] text-[#fff] text-[14px]">
            Today
          </div>
          <div className="py-[6px] px-[50px] rounded-lg bg-[#fff] text-[#461378] text-[14px]">
            Talent
          </div>
          <div className="py-[6px] px-[50px] rounded-lg bg-[#fff] text-[#461378] text-[14px]">
            Jobs
          </div>
          </div>
          
          <div className="min-w-[140px]"></div>

        </div>
      </nav>
    </>
  );
};

export default NavBar;

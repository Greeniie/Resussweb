import React from "react";
import { Link } from "react-router-dom";
import login1 from "../../assets/images/login1.png";
import StoreButtons1 from "../StoreButtons1";

const HeroSection = () => {
  return (
    <div>
      <div
        style={{ zIndex: "9" }}
        className="absolute top-[-120px] right-[-75px] block md:hidden relative"
      >
        <img
          src={login1}
          alt="hero"
          className="w-auto h-[400px] object-center object-cover absolute top-[50px] right-[-57px]"
        />
      </div>
      
      <div className="block md:grid md:grid-cols-3 w-[90%] md:w-[80%] mx-auto relative">
        <div className="w-[90%] mx-auto md:mr-auto relative col-span-2 ">
          <div className="hidden md:block pb-[10px] font-semibold text-[45px] text-[#461378] pt-[90px] leading-tight w-full">
            Find your next job and <br /> elevate your media career
          </div>
          <div className="block md:hidden text-left pb-[10px] font-semibold text-[35px] pt-[150px] text-[#461378] pt-[90px] leading-tight w-full">
            Find your next <br /> job and elevate your career
          </div>
          <div className="pb-[40px] text-[20px] text-[#461378] pt-[10px] font-normal hidden md:block">
            Discover and be discovered. Unlock earning <br /> opportunities,
            create projects, find talent, and showcase <br /> your exceptional
            skills
          </div>

          <div className="pb-[40px] text-[14px] text-left text-[#461378] pt-[10px] font-normal block md:hidden">
            Discover and be discovered. Unlock earning opportunities, create
            projects, find talent, and showcase your exceptional skills
          </div>
          <div className="hidden md:block pb-[40px]">
            {" "}
            <Link
              to="/create-account"
              className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-24 py-3 md:py-2 rounded-[60px]  font-medium text-[18px]"
            >
              Get Started
            </Link>
          </div>

          <div className="block md:hidden pb-[10px] text-center">
            {" "}
            <Link
              to="/create-account"
              className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-24 py-3 md:py-2 rounded-[60px]  font-medium text-[18px]"
            >
              Get Started
            </Link>
          </div>

          <StoreButtons1 />
        </div>

        <div
          style={{ zIndex: "9" }}
          className="absolute top-[-120px] right-[-75px] hidden md:block"
        >
          <img
            src={login1}
            alt="hero"
            className="w-auto h-[720px] object-center object-cover"
          />
        </div>
      </div>

      {/* <div
        className="overflow-x-hidden relative block md:hidden"
        style={{ zIndex: "9" }}
      >
        <div>
          <img
            src={login1}
            alt=""
            className="w-[550px] h-auto object-center object-cover absolute top-[-70px] right-[-130px]"
          />
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;

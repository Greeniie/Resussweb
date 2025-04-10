import React from "react";
import { Link } from "react-router-dom";
import login1 from "../../assets/images/login1.png";
import StoreButtons1 from "../StoreButtons1";

const HeroSection = () => {
  return (
    <div>
      <div className="block md:grid md:grid-cols-3 w-full md:w-[90%] lg:w-[80%] mx-auto relative overflow-x-hidden overflow-y-hidden md:min-h-[700px]">
        <div className="w-full md:w-[95%] lg:w-[90%] mx-auto md:mr-auto relative col-span-2">
          {/* Mobile Image */}
          <div style={{ zIndex: "9" }} className="overflow-x-hidden block md:hidden">
            <img
              src={login1}
              alt="hero"
              className="w-auto h-[350px] sm:h-[400px] object-center object-cover absolute top-[-80px] right-[-130px]"
            />
          </div>

          {/* Desktop + Tablet Headline */}
          <div className="hidden md:block pb-[10px] font-semibold text-[32px] lg:text-[45px] text-[#461378] pt-[60px] lg:pt-[90px] leading-tight w-full max-w-[95%] lg:max-w-full">
            Find your next job and <br /> elevate your media career
          </div>

          {/* Mobile Headline */}
          <div className="block w-[85%] mx-auto md:hidden text-left font-semibold text-[30px] sm:text-[35px] pt-[150px] text-[#461378] leading-tight w-full">
            Find your next <br /> job and elevate <br /> your career
          </div>

          {/* Desktop + Tablet Subtext */}
          <div className="pb-[40px] text-[16px] lg:text-[20px] text-[#461378] pt-[10px] font-normal hidden md:block max-w-[95%] lg:max-w-full">
            Discover and be discovered. Unlock earning <br /> opportunities,
            create projects, find talent, and showcase <br /> your exceptional skills
          </div>

          {/* Mobile Subtext */}
          <div className="pb-[40px] text-[14px] text-left text-[#461378] pt-[10px] font-normal block md:hidden w-[85%] mx-auto">
            Discover and be discovered. Unlock earning opportunities, create
            projects, find talent, and showcase your exceptional skills
          </div>

          {/* Desktop + Tablet Button */}
          <div className="hidden md:block pb-[40px]">
            <Link
              to="/create-account"
              className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-16 lg:px-24 py-3 md:py-2 rounded-[60px] font-medium text-[16px] lg:text-[18px]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="block md:hidden pb-[10px] text-center">
            <Link
              to="/create-account"
              className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-16 sm:px-24 py-3 md:py-2 rounded-[60px] font-medium text-[16px] sm:text-[18px]"
            >
              Get Started
            </Link>
          </div>

          <StoreButtons1 />
        </div>

        {/* Desktop + Tablet Image */}
        <div
          style={{ zIndex: "9" }}
          className="absolute top-[-60px] lg:top-[-80px] right-[-60px] lg:right-[-75px] hidden md:block"
        >
          <img
            src={login1}
            alt="hero"
            className="w-auto h-[500px] lg:h-[650px] object-center object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

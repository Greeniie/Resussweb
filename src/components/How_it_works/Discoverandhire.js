import React from "react";
import t8 from "../../assets/images/t8.png";
import t9 from "../../assets/images/t9.png";

const Discoverandhire = () => {
  return (
    <div className="h-[380px] mb-[280px] md:mb-0">
      <div className="relative w-full md:w-[90%] lg:w-[85%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 h-[480px]">
          <div className="w-[80%] col-span-2 ml-auto">
            <div className="pt-[80px]">
              <div className="text-[30px] text-[#4FD6FA] font-semibold pb-[10px] leading-[35px] pt-[40px] ">
                <span className="text-[#461378]">Discover & </span>
                <br />
                Hire with Confidence
              </div>
              <div className="text-[23px] text-[#898A8D] pb-[30px] w-[90%]">
                <div>
                  Explore professional Slates—full CVs, reels, and project
                  histories. Find the right people fast, and connect directly
                  in-platform.
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={t8}
              alt="resuss"
              className="w-[400px] h-auto object-center object-cover absolute top-[-40px] right-[100px]"
            />
            <img
              src={t9}
              alt="resuss"
              className="w-[300px] h-auto object-center object-cover absolute bottom-[-20px] right-[237px]"
            />
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 pt-[60px] px-6 md:px-12">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <img
                src={t8}
                alt=""
                className="h-[320px] w-auto object-contain"
              />
              <img
                src={t9}
                alt="resuss"
                className="w-[220px] h-auto object-center object-cover absolute bottom-[-70px] left-[20px]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-[30px] text-[#4FD6FA] leading-[30px] font-semibold pb-[20px]">
                <span className="text-[#461378]">Discover & </span>
                <br />
                Hire with Confidence
              </div>
              <div className="text-[18px] text-[#898A8D]">
                Explore professional Slates—full CVs, reels, and project
                histories. Find the right people fast, and connect directly
                in-platform..
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
          <div className="text-center relative">
            <img
              src={t8}
              alt=""
              className="h-[320px] w-auto object-center object-cover mx-auto absolute top-[-60px] right-[15%]"
            />
            <img
              src={t9}
              alt="resuss"
              className="w-[220px] h-auto object-center object-cover absolute top-[100px] left-[40px]"
            />
          </div>
          <div className="w-full">
            <div className="pt-[350px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#4FD6FA] font-semibold pb-[20px]">
                <span className="text-[#461378]">Discover & </span>
                <br />
                Hire with Confidence
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                Explore professional Slates—full CVs, reels, and project
                histories. Find the right people fast, and connect directly
                in-platform.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discoverandhire;

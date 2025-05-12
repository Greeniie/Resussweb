import React from "react";
import t10 from "../../assets/images/t10.png";
import t11 from "../../assets/images/t11.png";
import { Link } from "react-router-dom";

const WorkSeamlessly = () => {
  return (
    <div className="bg-[#EDE8FC] min-h-[600px]">
      <div className="relative w-full md:w-[90%] lg:w-[85%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 h-[480px] pt-[100px]">
          <div>
            <img
              src={t10}
              alt=""
              className="w-[600px] h-auto object-center object-cover absolute"
            />
          </div>
          <div className="w-[80%] col-span-2 ml-auto">
            <div className="pl-[60px]">
              <div className="text-[35px] text-[#461378] font-medium pb-[20px] leading-[35px] pt-[100px]">
                Work Seamlessly
              </div>
              <div className="font-[Roboto] text-[20px] text-[#000] pb-[30px] w-[95%] font-normal">
                <div>
                  Message, share project briefs, update roles, and keep
                  everything in one place. Resuss helps you focus on the
                  creative—not the admin.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 pt-[60px] px-6 md:px-12">
            <div className="w-full  mb-6 md:mb-0 flex justify-center">
              <img
                src={t10}
                alt=""
                className="h-[400px] w-auto object-contain"
              />
            </div>
            <div className="w-full">
              <div className="text-[30px] text-[#461378] font-semibold pb-[20px] pt-[50px]">
                Work Seamlessly
              </div>
              <div className="text-[18px] text-[#898A8D]">
                Message, share project briefs, update roles, and keep everything
                in one place. Resuss helps you focus on the creative—not the
                admin.
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
          <div className="text-center">
            <img
              src={t10}
              alt=""
              className="h-[350px] w-auto object-center object-cover mx-auto absolute top-[-80px]"
            />
          </div>
          <div className="w-full">
            <div className="pt-[300px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#461378] font-semibold pb-[20px]">
                Work Seamlessly
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                Message, share project briefs, update roles, and keep everything
                in one place. Resuss helps you focus on the creative—not the
                admin.
              </div>
            </div>
          </div>
        </div>
        <div className="block md:flex gap-[100px] justify-center pt-[50px] lg:pt-[150px] pl-[0] w-[90%] md:w-full mx-auto">
          <div className="w-full md:w-[60%]">
            <div className="pb-[100px] md:pb-[150px]">
              <div className="pt-[70px] md:pt-[260px] pb-[0] md:pt-[60px] text-center">
                <Link
                  to="/create-account"
                  className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-[80px] md:px-[150px] py-3 md:py-2 rounded-[60px] font-medium text-[18px]"
                >
                  Get Started
                </Link>
              </div>
              <div className="text-center text-[30px] md:text-[35px] text-[#461378] font-medium leading-[35px] pt-[50px] w-full md:w-[90%] mx-auto">
                online or Download the app now and start collaborating
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSeamlessly;

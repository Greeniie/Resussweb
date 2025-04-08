import React from "react";
import whitelogo from "../../assets/images/logowhite.png";
import StoreButtons from "../StoreButtons";
import { Link } from "react-router-dom";

const Footer = () => {
  const talent = [
    "Business Account",
    "Point of Sale",
    "Terminal Loan",
    "Expense Card",
  ];
  const business = [
    "Business Account",
    "Point of Sale",
    "Terminal Loan",
    "Expense Card",
  ];
  const resources = [
    "Business Account",
    "Point of Sale",
    "Terminal Loan",
    "Expense Card",
  ];

  var today = new Date();
  var date = today.getFullYear();

  return (
    <div className="footer bg-[#330066] min-h-[550px]">
      <div className="border-b border-[#9661CC]">
        <div className="w-[80%] md:w-[85%] mx-auto">
          <div className="flex flex-wrap gap-y-10 md:grid md:grid-cols-5 pt-[30px] pb-[100px] md:py-[150px]">
            {/* First Column */}
            <div className="w-full md:col-span-2 md:w-[75%] pr-4">
              <div className="pb-[20px]">
                <img
                  src={whitelogo}
                  alt="logo"
                  className="h-[35px] w-auto object-cover object-center"
                />
              </div>
              <div className="text-[14px] text-[#C5C5C5] font-normal">
                We are a pioneering tech company; our goal is to simplify the
                African entertainment industry and global spaces. Expression and
                innovation are rooted in our shared love for everything
                creative.
              </div>
              <div className="mt-4">
                <StoreButtons />
              </div>
            </div>

            {/* Link Sections */}
            <div className="w-1/2 md:w-auto flex flex-col gap-[5px] pt-[30px] md:pt-[50px]">
              <div className="pb-[10px] text-[#F3F2F2] font-semibold text-[16px] ">
                Talent
              </div>
              {talent.map((t, index) => (
                <div
                  className="text-[14px] text-[#C5C5C5] font-normal"
                  key={index}
                >
                  {t}
                </div>
              ))}
            </div>

            <div className="w-1/2 md:w-auto flex flex-col gap-[5px] pt-[30px] md:pt-[50px]">
              <div className="pb-[10px] text-[#F3F2F2] font-semibold text-[16px] ">
                Business
              </div>
              {business.map((b, index) => (
                <div
                  className="text-[14px] text-[#C5C5C5] font-normal"
                  key={index}
                >
                  {b}
                </div>
              ))}
            </div>

            <div className="w-full sm:w-1/2 md:w-auto flex flex-col gap-[5px] pt-[10px] md:pt-[50px]">
              <div className="pb-[10px] text-[#F3F2F2] font-semibold text-[16px] ">
                Resources
              </div>
              {resources.map((r, index) => (
                <div
                  className="text-[14px] text-[#C5C5C5] font-normal"
                  key={index}
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:flex md:justify-between items-center w-[85%] mx-auto py-[20px]">
        <div className="text-[14px] text-[#C5C5C5] font-normal">
          {date} &copy; The Resuss Company
        </div>
        <Link className="text-[14px] text-[#C5C5C5] font-normal">
          Terms & Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;

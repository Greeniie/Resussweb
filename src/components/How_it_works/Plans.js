import React, { useState } from "react";
import rolepic from "../../assets/images/rolepic.png";
import checkk from "../../assets/images/checkk.png";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const Plans = () => {
  const standard = [
    "Powerful fundraising tools",
    "Engage your community",
    "Dedicated team",
    "SEC filing help",
  ];

  const premium = [
    "Powerful fundraising tools",
    "Engage your community",
    "Dedicated team",
    "SEC filing help",
    "Powerful fundraising tools",
    "Engage your community",
    "Dedicated team",
  ];

  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const toggleDetails2 = () => {
    setShowDetails2((prev) => !prev);
  };

  return (
    <div className="md:w-[90%] mx-auto block lg:grid lg:grid-cols-3  mb-[70px]">
      <div className="bg-none lg:bg-[#F8F8F8] lg:min-h-[750px] rounded-tl-0 lg:rounded-tl-[49px] rounded-bl-0 lg:rounded-bl-[49px] p-[50px]">
        <div className="text-[25px] font-[Inter] pb-[20px] font-semibold text-[#4FD6FA] lg:text-[#461378]">
          Clean & Simple Plans
        </div>
        <div className="text-[14px] md:text-[18px] text-[#545454] font-normal font-[Roboto]">
          A one-time payment gives you full access to post your job listing. No
          hidden fees, no renewals—just post your role and start getting
          responses..
        </div>
        <div className="pt-[50px] pb-[80px] lg:block hidden">
          <img
            src={rolepic}
            alt="resuss"
            className="w-[400px] h-auto object-center object-cover"
          />
        </div>

        <div className="text-[10px] md:text-[10px] text-[#545454] font-normal font-[Roboto] hidden lg:block">
          Once verified, you can post roles for your projects using either a
          Standard or Premium Post. Whether you're looking for a stylist,
          cinematographer, or PA, your listing{" "}
        </div>
      </div>
      <div className="bg-none lg:bg-[#EDEBF4] lg:min-h-[750px] rounded-tr-0 lg:rounded-tr-[49px] rounded-br-0 lg:rounded-br-[49px] col-span-2 p-[50px]">
        <div className="block lg:grid lg:grid-cols-2 gap-[50px]">
          <div>
            <div className="bg-[#B858F9] py-[20px] px-[30px] rounded-[23px]">
              <div className="bg-[#461378] px-2 text-[20px] text-white font-[Inter] w-fit rounded-[8px]">
                Standard Post
              </div>
              <div className="break-word text-white font-[Roboto] text-[18px] py-[20px] border-b border-[#7533A1] w-[85%]">
                Need to send your reel, credits, or CV? With one click, share a
                beautiful,
              </div>
              <div className="font-[Inter] text-white text-[18px] py-[20px] font-semibold">
                ₦<span className="text-[32px]">5,000</span> per post
              </div>
            </div>
            <div className="block lg:hidden pt-[10px]">
                <div className="flex justify-end">
                <button
                onClick={toggleDetails}
                className="flex items-center gap-2 text-[#B858F9] font-sm mb-4"
              >
                {showDetails ? "Less Details" : " More Details"}
                {showDetails ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </button>
                </div>
          

              {showDetails && (
                <div className="flex flex-col gap-[15px] pb-[20px] lg:hidden block">
                  {standard.map((s, i) => (
                    <div key={i} className="flex items-center gap-[20px]">
                      <div>
                        <img
                          src={checkk}
                          alt="resuss"
                          className="h-[20px] w-auto object-cover"
                        />
                      </div>
                      <div className="font-[Inter] text-[14px] md:text-[18px] text-[#545454] font-normal">
                        {s}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-[50px] flex flex-col gap-[15px] hidden lg:block">
              {standard.map((s, i) => (
                <div key={i} className="flex items-center gap-[20px]">
                  <div>
                    <img
                      src={checkk}
                      alt="resuss"
                      className="h-[20px] w-auto object-cover"
                    />
                  </div>
                  <div className="font-[Inter] text-[14px] md:text-[18px] text-[#545454] font-normal">
                    {s}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-[#000] py-[20px] px-[30px] rounded-[23px]">
              <div className="bg-[#fff] px-2 text-[20px] text-black font-[Inter] w-fit rounded-[8px]">
                Premium Post
              </div>
              <div className="break-word text-white font-[Roboto] text-[18px] py-[20px] border-b border-[#ABB0BA] w-[85%]">
                Need to send your reel, credits, or CV? With one click, share a
                beautiful,
              </div>
              <div className="font-[Inter] text-white text-[18px] py-[20px] font-semibold">
                ₦<span className="text-[32px]">10,000</span> per post
              </div>
            </div>
            <div className="block lg:hidden pt-[10px]">
                <div className="flex justify-end">
                <button
                onClick={toggleDetails2}
                className="flex items-center gap-2 text-[#000] font-sm mb-4"
              >
                {showDetails2 ? "Less Details" : " More Details"}
                {showDetails2 ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </button>
                </div>
          

              {showDetails2 && (
                <div className="flex flex-col gap-[15px] pb-[20px] lg:hidden block">
                  {premium.map((s, i) => (
                    <div key={i} className="flex items-center gap-[20px]">
                      <div>
                        <img
                          src={checkk}
                          alt="resuss"
                          className="h-[20px] w-auto object-cover"
                        />
                      </div>
                      <div className="font-[Inter] text-[14px] md:text-[18px] text-[#545454] font-normal">
                        {s}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-[50px] flex flex-col gap-[15px] hidden lg:block">
              {premium.map((s, i) => (
                <div key={i} className="flex items-center gap-[20px]">
                  <div>
                    <img
                      src={checkk}
                      alt="resuss"
                      className="h-[20px] w-auto object-cover"
                    />
                  </div>
                  <div className="font-[Inter] text-[14px] md:text-[18px] text-[#545454] font-normal">
                    {s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

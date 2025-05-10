import React from "react";
import t7 from "../../assets/images/t7.png";

const ShareInstantly = () => {
  return (
    <div className="bg-[#B6F0FF] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[350px]">
      <div className="relative w-full md:w-[90%] lg:w-[85%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 h-[480px]">
          <div>
            <img
              src={t7}
              alt="resuss"
              className="w-[550px] h-auto object-center object-cover absolute top-[-75px]"
            />
          </div>
          <div className="w-[80%] col-span-2 ml-auto">
            <div className="pt-[80px] pl-[30px]">
              <div className="text-[30px] text-[#461378] font-semibold pb-[10px] leading-[35px] pt-[40px] ">
                Share Instantly... Anytime
              </div>
              <div className="text-[23px] text-[#898A8D] pb-[30px] w-[80%]">
                <div>
                  Need to send your reel, credits, or CV? With one click, share
                  a beautiful, professional link—no attachments, no confusion.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col items-center md:items-start md:gap-6 pt-[60px] px-6 md:px-12">
            <div className="w-full">
              <img
                src={t7}
                alt=""
                className="h-[320px] w-auto object-contain absolute top-[-120px]"
              />
            </div>
            <div className="w-full">
              <div className="text-[30px] text-[#461378] font-semibold pb-[50px] pt-[150px]">
              Share Instantly... Anytime
              </div>
              <div className="text-[18px] text-[#898A8D]">
                Resuss is a professional platform that brings valuable tools
                that empowers producers/ creators and talent, allowing seamless
                collaborative success.
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
        <div className="text-center">
            <img
              src={t7}
              alt=""
              className="h-[250px] w-auto object-center object-cover mx-auto absolute top-[-120px]"
            />
          </div>
          <div className="w-full">
            <div className="pt-[160px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#461378] font-semibold pb-[20px]">
              Share Instantly... Anytime
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[80px]">
                Resuss is a professional platform that brings valuable tools
                that empowers producers/ creators and talent, allowing seamless
                collaborative success.
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default ShareInstantly;

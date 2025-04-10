import React from "react";
import featureimg from "../../assets/images/features_profileB 1.png";

const Features = () => {
  return (
    <div className="bg-[#EDEBF4]">
      <div className="relative w-full md:w-[90%] lg:w-[85%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 h-[480px]">
          <div>
            <img
              src={featureimg}
              alt=""
              className="w-[550px] h-auto object-center object-cover absolute top-[-85px]"
            />
          </div>
          <div className="w-[80%] col-span-2 ml-auto">
            <div className="pt-[80px]">
              <div className="text-[35px] text-[#461378] font-semibold pb-[10px]">
                The new industry standard
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                Resuss is a professional platform that brings valuable tools
                that empowers producers/ creators and talent, allowing seamless
                collaborative success.
              </div>
            </div>
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 pt-[60px] px-6 md:px-12">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <img
                src={featureimg}
                alt=""
                className="h-[320px] w-auto object-contain"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-[30px] text-[#461378] font-semibold pb-[20px]">
                The new industry standard
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
          <div className="w-full">
            <div className="pt-[50px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#461378] font-semibold pb-[20px]">
                The new industry standard
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                Resuss is a professional platform that brings valuable tools
                that empowers producers/ creators and talent, allowing seamless
                collaborative success.
              </div>
            </div>
          </div>
          <div className="text-center">
            <img
              src={featureimg}
              alt=""
              className="h-[320px] w-auto object-center object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

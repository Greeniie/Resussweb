import React from "react";
import featureimg from "../../assets/images/features_profileB 1.png";

const Features = () => {
  return (
    <div className="bg-[#EDEBF4]">
      <div className="relative h-[400px] w-full md:w-[85%] mx-auto">
        <div className="hidden md:grid md:grid-cols-3">
          <div className="">
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
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="w-full">
            <div className="pt-[50px] md:pt-[80px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#461378] font-semibold pb-[20px]">
                The new industry standard
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                Resuss is a professional platform that brings valuable tools
                that empowers producers/ creators and talent, allowing seamless
                collaborative success.
              </div>{" "}
            </div>
          </div>
          <div className="">
            <img
              src={featureimg}
              alt=""
              className="h-[320px] w-auto object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

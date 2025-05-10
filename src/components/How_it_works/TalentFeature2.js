import React from "react";
import t2 from "../../assets/images/t2.png";

const TalentFeature2 = () => {
  return (
    <div className="">
      <div className="relative w-full md:w-[90%] lg:w-[80%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-2 h-[480px]">
          <div className="w-full">
            <div className="pt-[200px]">
              <div className="text-[35px] text-[#461378] font-medium pb-[10px] leading-[35px]">
                <span className="text-[#4FD6FA]">Store</span> All Your Creative
                Progress
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px] w-[90%]">
                From your latest projects to past gigs and milestones— Resuss is
                the one place to keep track of your entire creative journey.
              </div>
            </div>
          </div>
          <div>
            <img
              src={t2}
              alt=""
              className="w-[500px] h-auto object-center object-cover absolute"
            />
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col items-center md:items-start md:gap-6 pt-[60px] px-6 md:px-12">
            <div className="w-full">
              <div className="text-[30px] text-[#461378] font-semibold pb-[20px]">
                <span className="text-[#4FD6FA]">Store</span> All Your Creative
                Progress
              </div>
              <div className="">
                <img
                  src={t2}
                  alt=""
                  className="h-[400px] w-auto object-contain"
                />
              </div>
              <div className="text-[20px] text-[#898A8D]">
                From your latest projects to past gigs and milestones— Resuss is
                the one place to keep track of your entire creative journey.
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
          <div className="w-full">
            <div className="pt-[50px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#461378] font-semibold pb-[20px]">
              <span className="text-[#4FD6FA]">Store</span> All Your Creative
              Progress
              </div>
              <div className="text-center">
                <img
                  src={t2}
                  alt=""
                  className="h-[320px] w-auto object-center object-cover mx-auto"
                />
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                From your latest projects to past gigs and milestones— Resuss is
                the one place to keep track of your entire creative journey.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentFeature2;

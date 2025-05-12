import React from "react";
import c5 from "../../assets/images/c5.png";
import t7 from "../../assets/images/t7.png";

const PostJobs = () => {
  return (
    <div className="h-[450px] mb-[280px] md:mb-0">
      <div className="relative w-full md:w-[90%] lg:w-[85%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 h-[480px]">
          <div className="w-[80%] col-span-2 ml-auto">
            <div className="pt-[80px]">
              <div className="text-[30px] text-[#461378] font-semibold pb-[10px] leading-[35px] pt-[40px] ">
                Post Jobs & Roles
              </div>
              <div className="text-[18px] text-[#545454] pt-[20px] pb-[30px] w-[80%] font-[Roboto]">
                <div>
                  Once verified, you can post roles for your projects using
                  either a Standard or Premium Post. Whether you're looking for
                  a stylist, cinematographer, or PA, your listing reaches
                  actively searching creatives ready to work
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={c5}
              alt="resuss"
              className="w-[400px] h-auto object-center object-cover absolute top-[-40px] right-[100px]"
            />
            <img
              src={t7}
              alt="resuss"
              className="w-[300px] h-auto object-center object-cover absolute top-[40px] right-[-100px]"
            />
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 pt-[60px] px-6 md:px-12">
            <div className="w-full md:w-1/2">
              <div className="text-[30px] text-[#461378] font-semibold pb-[20px]">
                Post Jobs & Roles
              </div>
              <div className="text-[18px] text-[#898A8D]">
                Once verified, you can post roles for your projects using either
                a Standard or Premium Post. Whether you're looking for a
                stylist, cinematographer, or PA, your listing reaches actively
                searching creatives ready to work
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <img
                src={c5}
                alt=""
                className="h-[320px] w-auto object-contain"
              />
              <img
                src={t7}
                alt="resuss"
                className="w-[220px] h-auto object-center object-cover absolute bottom-[-40px] right-[20px]"
              />
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
          <div className="text-[30px] leading-[30px] text-[#461378] font-semibold pb-[20px] pt-[50px] w-[85%] mx-auto">
            Post Jobs & Roles
          </div>
          <div className="text-center relative">
            <img
              src={c5}
              alt=""
              className="h-[320px] w-auto object-center object-cover mx-auto absolute top-[0] right-[15%]"
            />
            <img
              src={t7}
              alt="resuss"
              className="w-[250px] h-auto object-center object-cover absolute top-[230px] right-[0]"
            />
          </div>
          <div className="w-full">
            <div className="pt-[400px] w-[85%] mx-auto">
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                Once verified, you can post roles for your projects using either
                a Standard or Premium Post. Whether you're looking for a
                stylist, cinematographer, or PA, your listing reaches actively
                searching creatives ready to work
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJobs;

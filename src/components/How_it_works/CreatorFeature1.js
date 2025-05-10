import React from "react";
import c1 from "../../assets/images/c1.png";

const CreatorFeature1 = () => {
  return (
    <div className="">
      <div className="relative w-full md:w-[90%] lg:w-[80%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-2 h-[480px]">
          <div className="w-full">
            <div className="pt-[100px]">
              <div className="text-[35px] text-[#4FD6FA] font-medium pb-[10px] leading-[35px]">
                <span className="text-[#461378]">Create</span> your <br />
                Professional Profile
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px] w-[90%]">
                Build a digital profile that reflects your work as a creative
                lead—include projects, roles, collaborators, brand or production
                credits, and more.
              </div>
            </div>
          </div>
          <div>
            <img
              src={c1}
              alt=""
              className="w-[450px] h-auto object-center object-cover absolute"
            />
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col items-center md:items-start md:gap-6 pt-[20px] px-6 md:px-12">
            <div className="w-full">
              <div className="text-[30px] text-[#4FD6FA] font-semibold pb-[20px]">
              <span className="text-[#461378]">Create</span> your <br />
              Professional Profile
              </div>
              <div className="">
                <img
                  src={c1}
                  alt=""
                  className="h-[400px] w-auto object-contain"
                />
              </div>
              <div className="text-[20px] text-[#898A8D]">
              Build a digital profile that reflects your work as a creative
                lead—include projects, roles, collaborators, brand or production
                credits, and more.
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
          <div className="w-full">
            <div className="pt-[30px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#4FD6FA] font-semibold pb-[20px]">
              <span className="text-[#461378]">Create</span> your <br />
              Professional Profile
              </div>
              <div className="text-center">
                <img
                  src={c1}
                  alt=""
                  className="h-[320px] w-auto object-center object-cover mx-auto"
                />
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
              Build a digital profile that reflects your work as a creative
                lead—include projects, roles, collaborators, brand or production
                credits, and more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorFeature1;

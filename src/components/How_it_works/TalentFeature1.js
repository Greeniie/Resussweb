import React from "react";
import t1 from "../../assets/images/t1.png";

const TalentFeature1 = () => {
  return (
    <div>
      <div className="relative w-full lg:w-[85%] mx-auto">
        {/* Desktop layout - lg and above */}
        <div className="hidden lg:grid lg:grid-cols-3 h-[480px]">
          <div>
            <img
              src={t1}
              alt=""
              className="w-[500px] h-auto object-center object-cover absolute"
            />
          </div>
          <div className="w-[80%] col-span-2 ml-auto">
            <div className="pt-[80px]">
              <div className="text-[35px] text-[#4FD6FA] font-medium pb-[10px] leading-[35px] pt-[40px]">
                <span className="text-[#461378]">Create</span> your <br />
                Professional Profile
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px] w-[80%]">
                <div>
                  Build a rich, digital CV tailored for the creative industry.
                  Add your roles, skills, experience, education, portfolio, and
                  reel.
                </div>
                <div className="pt-[20px]">
                  Think of it as your creative career’s home base.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout - shown on all screens below lg (including tablets) */}
        <div className="block lg:hidden">
          <div className="w-full">
            <div className="pt-[30px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#4FD6FA] font-medium pb-[20px] sm:pt-0 md:pt-[0] lg:pt-0">
                <span className="text-[#461378]">Create</span> your <br />
                Professional Profile
              </div>
              <div className="text-center">
                <img
                  src={t1}
                  alt=""
                  className="sm: h-[350px] md:h-[400px] w-auto object-center object-cover mx-auto"
                />
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                <div>
                  Build a rich, digital CV tailored for the creative industry.
                  Add your roles, skills, experience, education, portfolio, and
                  reel.
                </div>
                <div className="pt-[20px]">
                  Think of it as your creative career’s home base.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentFeature1;

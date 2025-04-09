import React from "react";
import network from "../../assets/images/home_network_top 1.png";
import cast from "../../assets/images/feature_jobs_top 1.png";
import hn from "../../assets/images/home_network 1.png";

const Features3 = () => {
  const filterCategories = [
    "Actor",
    "Agent",
    "Content Creator",
    "Director",
    "Hair & Makeup",
    "Media Company",
    "Producer",
    "Studio Exec",
    "Voice Talent",
    "Screen Writer",
  ];

  return (
    <div className="relative w-full md:w-[85%] m-auto mb-[50px]">
      <div className="hidden md:block">
        <img
          src={cast}
          alt=""
          className="w-[550px] h-auto object-center object-cover absolute top-[-300px]"
        />
      </div>

      <div className="overflow-x-hidden relative block md:hidden w-[90%] ml-auto">
        <div className="text-[20px] w-[68%] text-[#898A8D] pb-[100px] mt-[150px]">
          Post auditions, and discover talent—all in one place, simplifying
          pre-production for creators and unlocking limitless possibilities.
        </div>
        <div>
          <img
            src={cast}
            alt=""
            className="w-[550px] h-auto object-center object-cover absolute top-[-70px] right-[-130px]"
          />
        </div>
      </div>

      <div className="relative min-h-[400px] w-full md:w-[85%] mx-auto mb-[50px]">
        <div className="block md:grid md:grid-cols-2">
          <div className="w-full">
            <div className="pt-[20px] md:pt-[80px] w-[85%] mx-auto">
              <div className="text-[30px] md:text-[35px] text-[#461378] font-semibold leading-[30px] md:leading-[40px] pb-[80px] md:pb-[10px] mt-[50px] md:mt-[200px]">
                Creators find and match talent to projects
              </div>
              <div className="hidden md:block text-[20px] text-[#898A8D] pb-[30px]">
                Post auditions, and discover talent—all in one place,
                simplifying pre-production for creators and unlocking limitless
                possibilities.
              </div>{" "}
              <div className="flex flex-wrap gap-[10px] pt-[20px] w-full md:w-[70%]">
                {filterCategories.map((filter, index) => (
                  <div
                    key={index}
                    className="text-[14px] px-[20px] py-[5px] border rounded-[50px] transition-all text-[#545454] border-[#dedede]"
                  >
                    {filter}
                  </div>
                ))}
              </div>
              <div className="block md:hidden text-[20px] text-[#898A8D] py-[30px]">
                Post auditions, and discover talent—all in one place,
                simplifying pre-production for creators and unlocking limitless
                possibilities.
              </div>{" "}
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={network}
              alt=""
              className="w-[500px] h-auto object-center object-cover absolute top-[60px] right-[-50px]"
            />
            <div className="text-[20px] text-[#898A8D] pb-[30px] mt-[600px]">
              Post auditions, and discover talent—all in one place, simplifying
              pre-production for creators and unlocking limitless possibilities.
            </div>
            <img
              src={hn}
              alt=""
              className="h-[350px] w-auto object-center object-cover absolute top-[180px] right-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features3;

import React from "react";
import featureimg from "../../assets/images/features_profileB 1.png";
import login2 from "../../assets/images/login2.png";

const Features2 = () => {
  return (
    <div className="bg-[#fff] md:bg-[#EDEBF4]">
      <div className="relative w-[90%] md:w-[85%] mx-auto mt-[30px] md:mt-0">

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 md:min-h-[440px]">
          <div className="w-full md:w-[80%] col-span-2 mr-auto">
            <div>
              <div className="text-[35px] text-[#461378] font-semibold leading-[40px] pb-[10px]">
                Creators find and match talent to projects
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                Post auditions, and discover talent—all in one place,
                simplifying pre-production for creators and unlocking limitless
                possibilities.
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={login2}
              alt=""
              className="h-[550px] w-auto object-center object-cover scale-x-[-1] absolute top-[-85px] right-[200px]"
            />
          </div>
        </div>

        {/* Tablet-only layout */}
        <div className="hidden md:flex lg:hidden flex-col-reverse md:flex-row items-center justify-between pt-[60px] md:pt-[60px] gap-6">
          <div className="w-full md:w-1/2">
            <div className="text-[30px] text-[#461378] font-semibold leading-[36px] pb-[20px]">
              Creators find and match talent to projects
            </div>
            <div className="text-[18px] text-[#898A8D]">
              Post auditions, and discover talent—all in one place,
              simplifying pre-production for creators and unlocking limitless
              possibilities.
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={login2}
              alt=""
              className="h-[400px] w-auto object-contain scale-x-[-1]"
            />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden max-h-[200px]">
          <div className="text-[25px] text-[#4FD6FA] font-semibold leading-[30px] pb-[10px] w-[90%] mx-auto">
            Creators find and match talent to projects
          </div>
          <div className="absolute bottom-[-680px] left-[-130px]">
            <img
              src={login2}
              alt=""
              className="h-[350px] w-auto object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;

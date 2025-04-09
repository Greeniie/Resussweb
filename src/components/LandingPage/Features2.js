import React from "react";
import featureimg from "../../assets/images/features_profileB 1.png";
import login2 from "../../assets/images/login2.png";

const Features2 = () => {
  return (
    <div className="bg-[#fff] md:bg-[#EDEBF4]">
      <div className="relative max-h-[200px] md:min-h-[440px] w-[85%] mx-auto mt-[280px] md:mt-[0]">
        <div className="block md:grid md:grid-cols-3">
          <div className="w-full md:w-[80%] col-span-2 mr-auto">
            <div>
              <div className="text-[25px] md:text-[35px] text-[#4FD6FA] md:text-[#461378] font-semibold leading-[30px] md:leading-[40px] pb-[10px]">
                Creators find and match talent to projects
              </div>
              <div className="hidden md:block text-[20px] text-[#898A8D] pb-[30px]">
                Post auditions, and discover talent—all in one place,
                simplifying pre-production for creators and unlocking limitless
                possibilities.
              </div>{" "}
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={login2}
              alt=""
              className="h-[550px] w-auto object-center object-cover scale-x-[-1] absolute top-[-85px] right-[100px]"
            />
          </div>
          <div className="md:hidden block">
            <img
              src={login2}
              alt=""
              className="h-[350px] w-auto object-center object-cover absolute bottom-[-710px] left-[-140px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;

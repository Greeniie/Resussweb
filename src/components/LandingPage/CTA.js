import React from "react";
import ctaimg from "../../assets/images/iPhone_App_3c 1.png";
import cta2 from "../../assets/images/cta2.png";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="relative bg-[#B6F0FF] min-h-[450px]">
      {/* Image for larger screens (desktop) */}
      <div className="hidden lg:block">
        <img
          src={ctaimg}
          alt=""
          className="h-[500px] w-auto object-center object-cover absolute left-[150px] top-[-70px]"
        />
      </div>

      {/* Image for medium and smaller screens (tablet and mobile) */}
      <div className="md:hidden block">
        <img
          src={ctaimg}
          alt=""
          className="h-[300px] w-auto object-center object-cover absolute left-1/2 top-[-50px] transform -translate-x-1/2"
        />
      </div>

      {/* Second image for desktop */}
      <div className="hidden lg:block">
        <img
          src={cta2}
          alt=""
          className="h-[250px] w-auto object-center object-cover absolute right-[270px] top-[120px]"
        />
      </div>

      {/* Text and button section */}
      <div className="max-w-3xl mx-auto px-4 py-3 md:py-8 text-center">
        <div className="pt-[260px] pb-[0] md:pt-[90px] ">
          <Link
            to="/create-account"
            className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-5 md:px-28 py-3 md:py-2 rounded-[60px] font-medium text-[18px]"
          >
            Get Started
          </Link>
        </div>
        <div className="hidden md:block text-[35px] text-[#461378] font-medium leading-[35px] pt-[30px]">
          online or Download the app <br /> now and start collaborating
        </div>
      </div>
    </div>
  );
};

export default CTA;

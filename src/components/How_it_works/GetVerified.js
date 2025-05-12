import React from "react";
import c3 from "../../assets/images/c3.png";

const GetVerified = () => {
  return (
    <div className="bg-[#EDE8FC] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[350px]">
      <div className="relative w-full md:w-[90%] lg:w-[85%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:block text-center h-[400px]">
          <div>
            <img
              src={c3}
              alt="resuss"
              className="w-[250px] h-auto object-center object-cover absolute left-[-50px] top-[50px]"
            />
          </div>
          <div className="w-full">
            <div className="pt-[80px]">
              <div className="text-[30px] text-[#461378] font-semibold pb-[10px] leading-[35px] pt-[40px] font-[Inter] ">
                Get Verified for Safety & Trust
              </div>
              <div className="text-[18px] text-[#000] pt-[20px] w-[63%] mx-auto font-normal font-[Roboto]">
                <div>
                  To post jobs, you must be verified.{" "}
                  <span className="font-semibold">
                    This protects our talent and crew, ensuring that every
                    listing is real, professional, and safe.
                  </span>{" "}
                  Verification builds trust across the Resuss network.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col items-center md:items-start md:gap-6 pt-[60px] px-6 md:px-12">
            <div className="w-full">
              <img
                src={c3}
                alt=""
                className="h-[320px] w-auto object-contain absolute"
              />
            </div>
            <div className="w-full">
              <div className="text-[30px] text-[#461378] font-semibold pb-[50px] pt-[350px]">
                Share Instantly... Anytime
              </div>
              <div className="text-[18px] text-[#545454] pb-[20px]">
              <div>
                  To post jobs, you must be verified.{" "}
                  <span className="font-semibold text-black">
                    This protects our talent and crew, ensuring that every
                    listing is real, professional, and safe.
                  </span>{" "}
                  Verification builds trust across the Resuss network.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
          <div className="text-center pt-[100px]">
            <img
              src={c3}
              alt=""
              className="h-[200px] w-auto object-center object-cover mx-auto"
            />
          </div>
          <div className="w-full">
            <div className="pt-[40px] w-[90%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#461378] text-center font-semibold pb-[40px]">
                Get Verified for <br />
                Safety & Trust
              </div>
              <div className="text-[20px] text-[#545454] pb-[80px] text-center">
                <div>
                  To post jobs, you must be verified.{" "}
                  <span className="font-semibold text-black">
                    This protects our talent and crew, ensuring that every
                    listing is real, professional, and safe.
                  </span>{" "}
                  Verification builds trust across the Resuss network.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetVerified;

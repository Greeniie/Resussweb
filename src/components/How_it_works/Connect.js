import React from "react";
import t10 from "../../assets/images/t10.png";
import t11 from "../../assets/images/t11.png";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="bg-[#EDE8FC] min-h-[600px]">
      <div className="relative w-full md:w-[90%] lg:w-[85%] mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 h-[480px] pt-[100px]">
          <div>
            <img
              src={t10}
              alt=""
              className="w-[600px] h-auto object-center object-cover absolute"
            />
          </div>
          <div className="w-[80%] col-span-2 ml-auto">
            <div className="pl-[60px]">
              <div className="text-[35px] text-[#461378] font-medium pb-[20px] leading-[35px] pt-[100px]">
                Connect & <br />
                Collaborate
              </div>
              <div className="font-[Roboto] text-[20px] text-[#000] pb-[30px] w-[75%] font-normal">
                <div>
                  Creators can find and hire crew or talent. Crew and talent can
                  connect with opportunities. It’s a smart matchmaking space for
                  the entire creative ecosystem.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet-specific layout (iPads) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 pt-[60px] px-6 md:px-12">
            <div className="w-full  mb-6 md:mb-0 flex justify-center">
              <img
                src={t10}
                alt=""
                className="h-[400px] w-auto object-contain"
              />
            </div>
            <div className="w-full">
              <div className="text-[30px] text-[#461378] font-semibold pb-[20px] pt-[50px]">
                Connect & <br />
                Collaborate
              </div>
              <div className="text-[18px] text-[#898A8D]">
                Creators can find and hire crew or talent. Crew and talent can
                connect with opportunities. It’s a smart matchmaking space for
                the entire creative ecosystem.
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
          <div className="text-center">
            <img
              src={t10}
              alt=""
              className="h-[350px] w-auto object-center object-cover mx-auto absolute top-[-80px]"
            />
          </div>
          <div className="w-full">
            <div className="pt-[300px] w-[85%] mx-auto">
              <div className="text-[30px] leading-[30px] text-[#461378] font-semibold pb-[20px]">
                Connect & <br />
                Collaborate
              </div>
              <div className="text-[20px] text-[#898A8D] pb-[30px]">
                Creators can find and hire crew or talent. Crew and talent can
                connect with opportunities. It’s a smart matchmaking space for
                the entire creative ecosystem.
              </div>
            </div>
          </div>
        </div>
        <div className="block md:flex gap-[100px] justify-center pt-[50px] md:pt-[150px] pl-[0] w-[90%] md:w-full mx-auto md:pl-[60px]">
          <div>
            <img
              src={t11}
              alt=""
              className="w-[150px] h-auto object-center object-cover"
            />
          </div>

          <div className="w-full md:w-[60%]">
            <div className="pt-[20px]">
              <div className="text-[35px] text-[#461378] font-medium pb-[30px] leading-[35px]">
                Why Use Resuss?
              </div>
              <div className="flex flex-col gap-[20px] font-[Roboto] font-normal text-[20px] text-[#461378]">
                <div className="flex items-center md:items-start gap-[10px] md:gap-[20px]">
                  <div className="bg-[#461378] rounded-full w-[10px] h-[10px] md:w-[20px] md:h-[20px] shrink-0"></div>

                  <div>
                    <span className="font-semibold">
                      Professional presentation{" "}
                    </span>
                    that sets you apart
                  </div>
                </div>
                <div className="flex items-center md:items-start gap-[10px] md:gap-[20px]">
                  <div className="bg-[#461378] rounded-full w-[10px] h-[10px] md:w-[20px] md:h-[20px] shrink-0"></div>

                  <div>
                    <span className="font-semibold">
                      One link to rule them all
                    </span>{" "}
                    —no more scattered reels, CVs, and bios
                  </div>
                </div>
                <div className="flex items-center md:items-start gap-[10px] md:gap-[20px]">
                  <div className="bg-[#461378] rounded-full w-[10px] h-[10px] md:w-[20px] md:h-[20px] shrink-0"></div>

                  <div>
                    <span className="font-semibold">
                      Designed specifically for creatives,
                    </span>{" "}
                    not general job boards
                  </div>
                </div>
                <div className="flex items-center md:items-start gap-[10px] md:gap-[20px]">
                  <div className="bg-[#461378] rounded-full w-[10px] h-[10px] md:w-[20px] md:h-[20px] shrink-0"></div>

                  <div>
                    <span className="font-semibold">Always up-to-date</span>{" "}
                    with your latest work and roles
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-[100px] md:pb-[150px]">
              <div className="pt-[70px] md:pt-[260px] pb-[0] md:pt-[60px] text-center md:text-left">
                <Link
                  to="/create-account"
                  className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-[80px] md:px-[150px] py-3 md:py-2 rounded-[60px] font-medium text-[18px]"
                >
                  Get Started
                </Link>
              </div>
              <div className="text-center md:text-left text-[30px] md:text-[35px] text-[#461378] font-medium leading-[35px] pt-[50px] w-full md:w-[90%]">
                online or Download the app now and start collaborating
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;

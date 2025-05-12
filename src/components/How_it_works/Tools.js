import React from "react";
import c4 from "../../assets/images/c4.png";
import c7 from "../../assets/images/c7.png";
import c6 from "../../assets/images/c6.png";

const Tools = () => {
  const tools = [
    {
      img: c6,
      title: "Pro Profile",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: c7,
      title: "Project History",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: c6,
      title: "Print",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
    {
      img: c7,
      title: "Shortlist applicants",
      info: "Discover and be discovered. Unlock earning opportunities, create projects.",
    },
  ];

  return (
    <div className="min-h-[500px] bg-[#D8F7FF]">
      <div className="pt-[50px] block lg:grid lg:grid-cols-2 w-[90%] lg:w-[80%] mx-auto gap-[100px]">
        <div className="pb-[30px] md:pb-0">
          <div className="text-[25px] font-[Inter] pb-[20px] font-semibold leading-[25px]">
            Tools that make your process easier
          </div>
          <div className="text-[14px] md:text-[18px] text-[#545454] font-normal font-[Roboto]">
            To post jobs, you must be verified. This protects our talent and
            crew, ensuring that every listing is real, professional, and safe.
            Verification builds trust across the Resuss network.
          </div>
          <div>
            <img
              src={c4}
              alt="resuss"
              className="w-[400px] h-auto object-center object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          {tools.map((t, i) => (
            <div key={i} className="flex gap-[20px]">
                <img
                  src={t.img}
                  alt={`about-img-${i}`}
                  className="h-[80px] w-auto object-contain"
                />
              <div>
                <div className="flex flex-col gap-2 flex-grow text-[#000]">
                  <div className="font-[Inter] font-semibold text-[14px] lg:text-[20px]">
                    {t.title}
                  </div>
                  <p className="font-[Roboto] font-normal text-[#545454] text-sm sm:text-base w-[80%]">
                    {t.info}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;

import React from "react";
import talent1 from "../assets/testimgs/talent1.png";
import talent2 from "../assets/testimgs/talent2.png";

const TalentSpotlight = () => {
  const talents = [
    {
      image: talent1,
      full_name: "Abiola Sobo",
      role: "Content Creator",
    },
    {
      image: talent2,
      full_name: "Chinwe Igwe",
      role: "Content Creator",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-4 pt-[15px]">
      {talents.map((talent, index) => (
        <div
          key={index}
          className="relative h-[310px] w-[50%] bg-contain bg-no-repeat rounded-[25px] overflow-hidden"
          style={{ backgroundImage: `url(${talent.image})` }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-white text-[#545454] p-3">
            <h3 className="text-lg text-[#545454] font-semibold">
              {talent.full_name}
            </h3>
            <div className="text-[12px] p-2 rounded-[30px] bg-[#461378] text-white w-fit">
              {talent.role}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TalentSpotlight;

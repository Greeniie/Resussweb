import React from "react";
import chat from "../assets/images/chat.svg.png";
import like from "../assets/images/like.svg.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import bimg from "../assets/images/bimg.svg.png";

const ArticleBody = () => {
  return (
    <div className="bg-[#fff] mx-[20px] rounded-lg px-[20px] md:px-[50px] py-[20px] my-[20px] md:my-0">
      <div className="block md:grid md:grid-cols-3 gap-[50px] md:gap-[100px] pt-0 md:pt-[20px]">
        <div className="col-span-2">
          <div className="header text-[20px] md:text-[50px] text-lg font-bold leading-6 tracking-tight  font-inter md:font-semibold md:leading-[63px] md:tracking-tighter text-left">
            The Perils and Journey of a Creative in Nigeria: Nollywood's Wild
            Ride
          </div>
          <div className="flex justify-between items-center py-[30px]">
            <div className="block md:flex md:items-center gap-[20px]">
              <div className="author text-[10px] md:text-[16px]">
                Tunde Bandejo
              </div>
              <div className="date text-[10px] md:text-[16px]">
                March 4, 2024 
              </div>
            </div>
            <div className="flex gap-[10px] md:gap-[20px]">
              <div className="flex items-center gap-[5px] md:gap-[10px]">
                <div>
                  <img src={chat} alt="chat" className="h-[10px] md:h-[30px]" />
                </div>
                <div className="text-[11px] md:text-[16px]">200</div>
              </div>
              <div className="flex items-center gap-[5px] md:gap-[10px]">
                <div>
                  <img src={like} alt="chat" className="h-[10px] md:h-[30px]" />
                </div>
                <div className="text-[11px] md:text-[16px]">14k</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={img2} alt="pic2" />
            </div>
            <div className="py-[20px] md:py-[50px] body text-[14px] md:text-[24px] font-inter text-base font-normal leading-5 text-left md:text-2xl md:font-normal md:leading-[44px] md:tracking-tight">
              In the chaotic, vibrant world of Nigeria's creative scene, every
              aspiring artist, filmmaker, and storyteller embarks on a
              rollercoaster journey fraught with excitement, challenges, and the
              occasional absurdity that only Nollywood can offer. Welcome to the
              wild west of creativity, where the line between dreams and reality
              blurs, and every setback is just another twist in the plot. Of
            </div>
            <div>
              <img src={img3} alt="pic3" />
            </div>
            <div className="py-[20px] md:py-[50px] body text-[14px] md:text-[24px] font-inter text-base font-normal leading-5 text-left md:text-2xl md:font-normal md:leading-[44px] md:tracking-tight">
              There are many young creatives, armed with nothing but a dream and
              a smartphone. They set out to conquer the Nigerian creative space,
              fueled by passion and a relentless drive to express themselves in
              ways that resonate with the masses. But as they dive headfirst
              into the fray, they quickly realize that navigating the tumultuous
              waters of the Nigerian creative scene is no easy feat. The reality
              sets in. The myths and stories of politics and games they have
              always heard and read about in the creative industry begin to play
              out before their very eyes.
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <button className="hidden bg-[#461378] text-[#fff] rounded px-[20px] py-[10px] md:flex md:items-center md:gap-[8px]">
            <div>Go to App</div>
            <img src={bimg} className="h-[20px] w-auto" alt="bimg" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;

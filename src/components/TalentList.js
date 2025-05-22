import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  EnvironmentFilled,
} from "@ant-design/icons";
import pro6 from "../assets/images/pro6.png";
import share from "../assets/menu-icons/shareblack.png";
import bookmark from "../assets/menu-icons/bookmarkblack.png";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";

const TalentList = ({
  talents,
  title,
  onShowAll,
  showAll,
}) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMoreRef = useRef(null);

  const visibleTalents = talents.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < talents.length) {
          setVisibleCount((prev) => prev + 8);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [visibleCount, talents.length]);

  const handleShare = async (talent) => {
    const url = `https://resussweb.netlify.app/user/${talent.first_name}${talent.last_name}?id=${talent.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Share your profile", url });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      } catch (err) {
        alert("Couldn't copy link.");
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white min-h-[480px] mt-0 md:mt-0 rounded-[30px] mb-[30px] md:rounded-[35px] px-[15px] md:px-[50px] py-[30px] md:py-[35px]"
      >
        {/* Header */}

        <div className="flex justify-between items-center pb-[10px] md:border-b">
          <div className="text-[#AF98BF] text-[16px] md:pt-0">{title}</div>
          <button
            onClick={onShowAll}
            className="text-[#461378] text-[14px] font-medium"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>

        {/* Talent Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 pt-[20px]">
          {visibleTalents?.map((talent) => (
            <motion.div
              key={talent.id}
              layout
              className="group relative border border-[#DEDEDE] h-[300px] w-full rounded-[25px] overflow-hidden bg-gray-200"
            >
              {/* Share & Bookmark */}
              <div className="flex flex-col gap-[5px] absolute right-[20px] mt-[20px] lg:opacity-0 lg:pointer-events-none group-hover:lg:opacity-100 group-hover:lg:pointer-events-auto transition-opacity duration-300 z-10">
                <Tooltip placement="left" title="share">
                  <button
                    onClick={() => handleShare(talent)}
                    className="p-2 bg-[#F5F5F5] rounded-[7px]"
                  >
                    <img
                      src={share}
                      alt="share"
                      className="h-[11px] md:h-[15px]"
                    />
                  </button>
                </Tooltip>
                <Tooltip placement="left" title="bookmark">
                  <button className="p-2 bg-[#F5F5F5] rounded-[7px]">
                    <img
                      src={bookmark}
                      alt="bookmark"
                      className="h-[11px] md:h-[15px]"
                    />
                  </button>
                </Tooltip>
              </div>

              {/* Talent Info */}
              <Link
                to={`/user/${talent.first_name}${talent.last_name}`}
                state={{ id: talent.id }}
              >
                <img
                  src={talent.profile_photo_url || pro6}
                  alt={`${talent.first_name} ${talent.last_name}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white text-[#545454] p-3">
                  <div className="text-[14px] capitalize font-semibold">
                    {talent.first_name} {talent.last_name}
                  </div>
                  <div className="text-[12px] my-[5px] px-3 py-1 rounded-[30px] bg-[#461378] text-white w-fit">
                    {talent?.services[0]?.name || "No role added"}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <EnvironmentFilled /> {talent.location || "No location"}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Infinite scroll sentinel */}
        <div ref={loadMoreRef} className="h-10 mt-10"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TalentList;

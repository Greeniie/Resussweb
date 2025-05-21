import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  EnvironmentFilled,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import pro6 from "../assets/images/pro6.png";
import filterimg from "../assets/images/filtersmobile.png";
import share from "../assets/menu-icons/shareblack.png";
import bookmark from "../assets/menu-icons/bookmarkblack.png";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import TalentFilters from "./TalentFilters";

const TalentList = ({
  talents,
  title,
  onApplyFilters,
  activeFilters,
  handleClearFilters,
  onShowAll,
  showAll,
}) => {
  const [showFilters, setShowFilters] = useState(false);
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

  const renderActiveFilters = () => {
    if (!activeFilters || Object.keys(activeFilters).length === 0) {
      return <div className="text-gray-500 text-sm">No filters applied</div>;
    }

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {Object.entries(activeFilters).map(([key, value]) => {
          if (
            value === null ||
            value === undefined ||
            (Array.isArray(value) && value.length === 0)
          )
            return null;

          let displayValue = "";

          if (key === "ageRange" && Array.isArray(value) && value.length === 2) {
            displayValue = `${value[0]} - ${value[1]}`;
          } else if (Array.isArray(value)) {
            displayValue = value.join(", ");
          } else if (typeof value === "object") {
            displayValue = JSON.stringify(value);
          } else {
            displayValue = value;
          }

          return (
            <span
              key={key}
              className="text-[12px] my-[5px] mr-2 px-3 py-1 rounded-[30px] bg-[#461378] text-white w-fit"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}: {displayValue}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white min-h-[480px] mt-[30px] md:mt-0 rounded-[30px] mb-[30px] md:rounded-[35px] px-[15px] md:px-[50px] py-[30px] md:py-[35px]"
      >
        {/* Mobile Filters Button */}
        <div className="block md:hidden border-b">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex gap-[10px] items-center pb-[20px]"
          >
            <img src={filterimg} alt="filter" className="h-[16px] w-auto" />
            <div className="text-[#898A8D] text-[14px]">Show filters</div>
            <CaretDownOutlined
              style={{
                fontSize: "14px",
                color: "#898A8D",
                transform: showFilters ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
        </div>

        {/* Filters Sidebar */}
        {showFilters && (
          <div
            style={{ zIndex: 9999 }}
            className={`fixed inset-0 backdrop-blur-sm bg-white/70 flex sm:justify-end justify-center transition-transform duration-700 ease-in-out`}
          >
            <TalentFilters
              onApplyFilters={(filters) => {
                onApplyFilters(filters);
                setShowFilters(false);
              }}
              activeFilters={activeFilters}
            />
            <button
              onClick={() => setShowFilters(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <div className="block md:hidden">
                <div className="flex gap-[10px] items-center">
                  <img
                    src={filterimg}
                    alt="filter"
                    className="h-[16px] w-auto"
                  />
                  <div className="text-[#898A8D] text-[14px]">Hide filters</div>
                  <CaretUpOutlined
                    style={{
                      fontSize: "14px",
                      color: "#898A8D",
                      transform: showFilters
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Header */}
        {activeFilters && (
          <div className="flex justify-between items-center pb-[10px]">
            <div>{renderActiveFilters()}</div>
            <button
              onClick={handleClearFilters}
              disabled={
                !activeFilters || Object.keys(activeFilters).length === 0
              }
              className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                activeFilters && Object.keys(activeFilters).length > 0
                  ? "bg-[#461378] text-white hover:bg-[#3a0f5d]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="flex justify-between items-center pb-[10px] md:border-b">
          <div className="text-[#AF98BF] text-[16px] pt-[20px] md:pt-0">
            {title}
          </div>
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

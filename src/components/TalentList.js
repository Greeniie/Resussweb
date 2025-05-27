import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvironmentFilled } from "@ant-design/icons";
import pro6 from "../assets/images/pro6.png";
import shareIcon from "../assets/menu-icons/shareblack.png";
import bookmarkIcon from "../assets/menu-icons/bookmarkblack.png";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";

const TalentList = ({
  talents,
  title,
  onShowAll,
  showAll,
  filters,
  clearFilters,
}) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMoreRef = useRef(null);

  const renderActiveFilters = () => {
    if (!filters || Object.keys(filters).length === 0) {
      return <div className="text-gray-500 text-sm">No filters applied</div>;
    }
  
    const { selectedGenders, location, selectedRoles, ageRange } = filters;
  
    const filterChips = [];
  
    if (selectedGenders && selectedGenders.length > 0 && !selectedGenders.includes("All")) {
      filterChips.push(...selectedGenders.map(g => g.charAt(0).toUpperCase() + g.slice(1)));
    }
  
    if (ageRange && ageRange.length === 2) {
      filterChips.push(`${ageRange[0]} - ${ageRange[1]} yrs`);
    }
  
    if (location) {
      filterChips.push(location.charAt(0).toUpperCase() + location.slice(1));
    }
  
    if (selectedRoles && selectedRoles.length > 0) {
      filterChips.push(...selectedRoles);
    }
  
    return (
      <div className="flex flex-wrap gap-[5px] mt-2">
        {filterChips.map((chip, idx) => (
          <span
            key={idx}
            className="text-[12px] mr-1 px-3 py-1 rounded-[48px] border border-[#ABB0BA] text-[#545454] w-fit"
          >
            {chip}
          </span>
        ))}
      </div>
    );
  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < talents.length) {
          setVisibleCount((prev) => prev + 8);
        }
      },
      { threshold: 1.0 }
    );

    const current = loadMoreRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [visibleCount, talents.length]);

  const handleShare = async (talent) => {
    const slug = `${talent.first_name?.toLowerCase() || ""}-${
      talent.last_name?.toLowerCase() || ""
    }`;
    const url = `https://resussweb.netlify.app/user/${slug}?id=${talent.id}`;

    try {
      if (navigator.share) {
        await navigator.share({ title: "Check out this talent", url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Profile link copied!");
      }
    } catch (err) {
      alert("Failed to share or copy.");
    }
  };

  const visibleTalents = talents?.slice(0, visibleCount);

  return (
    <AnimatePresence>
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white min-h-[480px] rounded-[30px] md:rounded-[35px] px-[15px] md:px-[50px] py-[30px] md:py-[35px] mb-[30px]"
      >
        {/* Header */}
        {filters && (
          <div className="flex justify-between items-start md:items-center pb-[20px]">
            <div>{renderActiveFilters()}</div>
            <button
              onClick={clearFilters}
              disabled={!filters || Object.keys(filters).length === 0}
              className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                filters && Object.keys(filters).length > 0
                  ? "bg-[#461378] text-white hover:bg-[#3a0f5d]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Clear Filters
            </button>
          </div>
        )}
        <div className="flex justify-between items-center pb-2 md:border-b">
          {(!filters || Object.keys(filters).length === 0) && (
            <h2 className="text-[#AF98BF] text-[16px]">{title}</h2>
          )}

          {!filters || Object.keys(filters).length === 0 ? (
            <button
              onClick={onShowAll}
              className="text-[#461378] text-[14px] font-medium"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          ) : null}
        </div>

        {/* Talent Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 pt-[20px]">
          {visibleTalents.map((talent) => {
            const {
              id,
              first_name,
              last_name,
              profile_photo_url,
              services = [],
              location,
            } = talent;
            const fullName = `${first_name || ""} ${last_name || ""}`.trim();
            const primaryRole =
              services.length > 0 ? services[0].name : "No role added";
            const userSlug = `${first_name?.toLowerCase()}${last_name?.toLowerCase()}`;

            return (
              <motion.div
                key={id}
                layout
                className="group relative border border-[#DEDEDE] h-[300px] w-full rounded-[25px] overflow-hidden bg-gray-200"
              >
                {/* Share & Bookmark */}
                <div className="flex flex-col gap-[5px] absolute right-[20px] top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Tooltip title="Share" placement="left">
                    <button
                      onClick={() => handleShare(talent)}
                      className="p-2 bg-[#F5F5F5] rounded-[7px]"
                    >
                      <img src={shareIcon} alt="share" className="h-[15px]" />
                    </button>
                  </Tooltip>
                  <Tooltip title="Bookmark" placement="left">
                    <button
                      onClick={() =>
                        alert("Bookmark functionality not yet implemented")
                      }
                      className="p-2 bg-[#F5F5F5] rounded-[7px]"
                    >
                      <img
                        src={bookmarkIcon}
                        alt="bookmark"
                        className="h-[15px]"
                      />
                    </button>
                  </Tooltip>
                </div>

                {/* Talent Info */}
                <Link to={`/user/${userSlug}`} state={{ id }}>
                  <img
                    src={profile_photo_url || pro6}
                    alt={fullName}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white text-[#545454] p-3">
                    <div className="text-[14px] font-semibold capitalize">
                      {fullName || "Unnamed"}
                    </div>
                    <div className="text-[12px] my-[5px] px-3 py-1 rounded-[30px] bg-[#461378] text-white w-fit">
                      {primaryRole}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <EnvironmentFilled />
                      {location || "No location"}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Scroll Trigger */}
        <div ref={loadMoreRef} className="h-10 mt-10"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TalentList;

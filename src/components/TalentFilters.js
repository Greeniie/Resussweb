import React, { useState, useEffect } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Form } from "react-bootstrap";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import star from "../assets/images/star.png";
import bookmark from "../assets/images/bookmark.png";
import start from "../assets/images/start.png";
import filters from "../assets/images/filters.png";
import { getProfile } from "../redux/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const TalentFilters = ({ onApplyFilters, filterResetKey }) => {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const location = profile?.singleData?.user?.location;

  // Load saved filters from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("talentFilters"));
    if (saved) {
      setSelectedFilters(saved.selectedFilters || []);
      setSelectedGenders(saved.selectedGenders || []);
      setSelectedRoles(saved.selectedRoles || []);
      setValue(saved.ageRange || [10, 55]);
    }
  }, []);

  useEffect(() => {
    // Reset local UI state when resetKey changes
    setSelectedFilters([]);
    setSelectedGenders([]);
    setSelectedRoles([]);
    setValue([10, 55]);
  }, [filterResetKey]);

  const [isApplying, setIsApplying] = useState(false);
  const [filterApplied, setFilterApplied] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const [showGeneral, setShowGeneral] = useState(true);
  const [showGender, setShowGender] = useState(true);
  const [showAge, setShowAge] = useState(true);
  const [showTalents, setShowTalents] = useState(true);

  const [value, setValue] = useState([10, 55]);

  const filterCategories = [
    "My Location",
    "Active",
    "Popular",
    "Leads",
    "Support",
    "Recommended",
  ];

  const roles = [
    "Actors",
    "Voiceovers",
    "Content Creators",
    "Production Crew",
    "Influencers",
    "Models",
    "Developers [IM]",
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilters((prevSelected) =>
      prevSelected.includes(filter)
        ? prevSelected.filter((item) => item !== filter)
        : [...prevSelected, filter]
    );
  };

  const handleGenderChange = (gender) => {
    if (gender === "All") {
      setSelectedGenders(["Male", "Female"]);
    } else {
      setSelectedGenders((prev) => {
        const updated = prev.includes(gender)
          ? prev.filter((g) => g !== gender)
          : [...prev, gender];
        // Auto-uncheck "All" if not both genders are selected
        return updated.length === 2 ? ["Male", "Female"] : updated;
      });
    }
  };

  const handleRoleChange = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleApplyFilters = () => {
    setIsApplying(true);
    setFilterApplied(false);

    const filtersToApply = {
      selectedFilters,
      selectedGenders: selectedGenders.includes("All")
        ? ["Male", "Female"]
        : selectedGenders,
      selectedRoles,
      ageRange: value,
    };

    if (selectedFilters.includes("My Location") && location) {
      filtersToApply.location = location;
    }

    localStorage.setItem("talentFilters", JSON.stringify(filtersToApply));

    setTimeout(() => {
      onApplyFilters(filtersToApply);
      setIsApplying(false);
      setFilterApplied(true);

      // Optional: Auto-scroll or close on mobile
      if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Remove success indicator after a few seconds
      setTimeout(() => setFilterApplied(false), 2000);
    }, 800); // Simulate a small delay
  };

  return (
    <div className="bg-white h-[100dvh] overflow-y-scroll md:min-h-[1100px] rounded-[30px] mb-[30px] px-[30px] py-[30px] md:py-[35px]">
      {/* Header */}
      <div className="flex gap-[10px] items-center pb-[10px] border-b">
        <img src={star} alt="star" className="h-[16px]" />
        <div className="text-[#4FD6FA] text-[14px]">Talent Management</div>
      </div>

      {/* Start a Project */}
      <div className="flex gap-[10px] items-center py-[10px]">
        <img src={start} alt="start" className="h-[16px]" />
        <div className="text-[#ABB0BA] text-[14px]">Start a Project</div>
      </div>

      {/* Bookmarked */}
      <div className="flex gap-[18px] items-center pb-[10px]">
        <img src={bookmark} alt="bookmark" className="h-[16px]" />
        <div className="text-[#ABB0BA] text-[14px]">Bookmarked</div>
      </div>

      {/* Filters Header */}
      <div className="flex justify-between items-center py-[10px] border-y">
        <div className="flex gap-[10px] items-center">
          <img src={filters} alt="filter" className="h-[16px]" />
          <div className="text-[#4FD6FA] text-[14px]">Filters</div>
        </div>
        <button onClick={() => setShowFilters(!showFilters)}>
          <CaretDownOutlined
            style={{
              fontSize: "14px",
              color: "#4FD6FA",
              transform: showFilters ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>
      </div>

      {showFilters && (
        <>
          {/* General */}
          <div className="border-b pb-[10px]">
            <div className="flex justify-between items-center pt-[10px]">
              <div className="text-[#ABB0BA] text-[14px]">General</div>
              <button onClick={() => setShowGeneral(!showGeneral)}>
                {showGeneral ? (
                  <CaretUpOutlined
                    style={{ fontSize: "14px", color: "#ABB0BA" }}
                  />
                ) : (
                  <CaretDownOutlined
                    style={{ fontSize: "14px", color: "#ABB0BA" }}
                  />
                )}
              </button>
            </div>
            {showGeneral && (
              <div className="flex flex-wrap gap-[10px] pt-[20px]">
                {filterCategories.map((filter, index) => (
                  <div
                    key={index}
                    className={`text-[14px] px-[20px] py-[5px] border rounded-[50px] cursor-pointer ${
                      selectedFilters.includes(filter)
                        ? "bg-[#9900FF] text-[#fff] border-[#9900FF]"
                        : "text-[#545454] border-[#dedede]"
                    } ${
                      filter === "My Location" && !location
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => {
                      if (filter === "My Location" && !location) return;
                      handleFilterClick(filter);
                    }}
                  >
                    {filter}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="border-b">
            <div className="flex justify-between items-center py-[10px]">
              <div className="text-[#ABB0BA] text-[14px]">Gender</div>
              <button onClick={() => setShowGender(!showGender)}>
                {showGender ? (
                  <CaretUpOutlined
                    style={{ fontSize: "14px", color: "#ABB0BA" }}
                  />
                ) : (
                  <CaretDownOutlined
                    style={{ fontSize: "14px", color: "#ABB0BA" }}
                  />
                )}
              </button>
            </div>
            {showGender && (
              <Form.Group className="flex flex-col gap-3 pb-[20px]">
                {["All", "Male", "Female"].map((gender) => (
                  <div
                    key={gender}
                    className="flex items-center gap-2 text-[#9900FF]"
                  >
                    <input
                      type="checkbox"
                      id={gender}
                      checked={selectedGenders.includes(gender)}
                      onChange={() => handleGenderChange(gender)}
                      className="w-5 h-5 accent-[#9900FF]"
                    />
                    <label htmlFor={gender} className="text-sm text-[#ABB0BA]">
                      {gender}
                    </label>
                  </div>
                ))}
              </Form.Group>
            )}
          </div>

          {/* Age */}
          <div className="border-b">
            <div className="flex justify-between items-center py-[10px]">
              <div className="text-[#ABB0BA] text-[14px]">Age</div>
              <button onClick={() => setShowAge(!showAge)}>
                {showAge ? (
                  <CaretUpOutlined
                    style={{ fontSize: "14px", color: "#ABB0BA" }}
                  />
                ) : (
                  <CaretDownOutlined
                    style={{ fontSize: "14px", color: "#ABB0BA" }}
                  />
                )}
              </button>
            </div>
            {showAge && (
              <>
                <div className="flex justify-end my-[10px] text-[#9900FF] text-[12px] font-bold">
                  {value[0]}-{value[1]} yrs
                </div>
                <RangeSlider
                  min={10}
                  max={80}
                  value={value}
                  onInput={handleValueChange}
                />
                <div className="flex justify-between text-[#696969] text-[10px] mt-2">
                  <span>10yrs</span>
                  <span>55yrs+</span>
                </div>
              </>
            )}
          </div>

          {/* Talents */}
          <div className="border-b">
            <div className="flex justify-between items-center py-[10px]">
              <div className="text-[#ABB0BA] text-[14px]">Talents</div>
              <button onClick={() => setShowTalents(!showTalents)}>
                {showTalents ? (
                  <CaretUpOutlined
                    style={{ fontSize: "14px", color: "#ABB0BA" }}
                  />
                ) : (
                  <CaretDownOutlined
                    style={{ fontSize: "14px", color: "#ABB0BA" }}
                  />
                )}
              </button>
            </div>
            {showTalents && (
              <Form.Group className="flex flex-col gap-3 pb-[10px]">
                {(showAll ? roles : roles.slice(0, 6)).map((role) => (
                  <div key={role} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={role}
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleChange(role)}
                      className="w-5 h-5 accent-[#9900FF]"
                    />
                    <label htmlFor={role} className="text-sm">
                      {role}
                    </label>
                  </div>
                ))}
                {roles.length > 6 && (
                  <button
                    type="button"
                    onClick={() => setShowAll(!showAll)}
                    className="text-[#4FD6FA] text-sm mt-2 text-left"
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                )}
              </Form.Group>
            )}
          </div>

          {/* Apply Button */}
          <div className="pt-[20px]">
            <button
              className={`w-full mt-4 py-2 rounded-lg font-semibold text-white ${
                isApplying ? "bg-gray-400" : "bg-[#4FD6FA] hover:bg-[#32c3e7]"
              }`}
              disabled={isApplying}
              onClick={handleApplyFilters}
            >
              {isApplying ? "Applying..." : "Apply Filters"}
            </button>

            {filterApplied && (
              <div className="text-center mt-2 text-green-600 text-sm font-medium">
                ✅ Filters applied successfully!
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TalentFilters;

import React, { useState } from "react";
import star from "../assets/images/star.png";
import bookmark from "../assets/images/bookmark.png";
import start from "../assets/images/start.png";
import filters from "../assets/images/filters.png";
import settings from "../assets/images/settings.png";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import Form from "react-bootstrap/Form";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const TalentFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const [showGeneral, setShowGeneral] = useState(true);
  const [showGender, setShowGender] = useState(true);
  const [showAge, setShowAge] = useState(true);
  const [showTalents, setShowTalents] = useState(true);

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
    setSelectedFilters(
      (prevSelected) =>
        prevSelected.includes(filter)
          ? prevSelected.filter((item) => item !== filter) // Remove if already selected
          : [...prevSelected, filter] // Add if not selected
    );
  };

  const handleGenderChange = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  const handleRoleChange = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((r) => r !== role)); // Remove if already selected
    } else {
      setSelectedRoles([...selectedRoles, role]); // Add if not selected
    }
  };

  const [value, setValue] = useState([10, 55]);
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white min-h-[480px] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] mr-auto px-[30px] py-[30px] md:py-[35px]">
      <div className="flex gap-[10px] items-center pb-[10px] border-b">
        <img
          src={star}
          alt="talentmgt"
          className="h-[16px] w-auto object-cover object-center"
        />
        <div className="text-[#4FD6FA] text-[14px]">Talent Management</div>
      </div>

      <div className="flex gap-[10px] items-center pb-[10px] pt-[20px]">
        <img
          src={start}
          alt="start"
          className="h-[16px] w-auto object-cover object-center"
        />
        <div className="text-[#ABB0BA] text-[14px]">Start a Project</div>
      </div>

      <div className="flex gap-[18px] items-center pb-[10px]">
        <img
          src={bookmark}
          alt="bookmark"
          className="h-[16px] w-auto object-cover object-center"
        />
        <div className="text-[#ABB0BA] text-[14px]">Bookmarked</div>
      </div>
      <div className="flex justify-between items-center pb-[10px] pt-[10px] border-b border-t">
        <div className="flex gap-[10px] items-center">
          <img
            src={filters}
            alt="filter"
            className="h-[16px] w-auto object-cover object-center"
          />
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
        <div>
          {" "}
          {/* General Section */}
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
              <div>
                <div className="flex flex-wrap gap-[10px] pt-[20px]">
                  {filterCategories.map((filter, index) => (
                    <div
                      key={index}
                      className="text-[14px] px-[20px] py-[5px] border rounded-[50px] cursor-pointer transition-all text-[#545454] border-[#dedede]"
                    >
                      {filter}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end my-[10px]">
                  <button>
                    <img
                      src={settings}
                      alt=""
                      className="h-[16px] w-auto object-cover object-center"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Gender Section */}
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
                  <div key={gender} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={gender}
                      className="w-5 h-5 border-gray-300 text-[#ABB0BA] rounded cursor-pointer"
                    />
                    <label
                      htmlFor={gender}
                      className="text-gray-600 text-sm text-[#ABB0BA]"
                    >
                      {gender}
                    </label>
                  </div>
                ))}
              </Form.Group>
            )}
          </div>
          {/* Age Section */}
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
                <div className="flex justify-end my-[10px] text-[#9900ff] text-[12px] font-bold">
                  10-55 yrs
                </div>
                <RangeSlider
                  min={0}
                  max={100}
                  value={[10, 55]}
                  onInput={handleValueChange}
                  style={{ width: "100%", backgroundColor: "#9900FF" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 0",
                    color: "#9900FF",
                    fontSize: "10px",
                  }}
                >
                  <span className="text-[#696969]">10yrs</span>
                  <span className="text-[#696969]">55yrs+</span>
                </div>
              </>
            )}
          </div>
          {/* Talents Section */}
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
            <Form.Group className="flex flex-col gap-3 pb-[20px]">
              {(showAll ? roles : roles.slice(0, 6)).map((role) => (
                <div key={role} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={role}
                    checked={selectedRoles.includes(role)}
                    onChange={() => handleRoleChange(role)}
                    className="w-5 h-5 border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor={role} className="text-gray-600 text-sm">
                    {role}
                  </label>
                </div>
              ))}
              {roles.length > 6 && (
                <button
                  className="text-[#ABB0BA] text-sm font-semibold mt-2 w-fit"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "show Less" : "more"}
                </button>
              )}
            </Form.Group>
          )}
        </div>
      )}
    </div>
  );
};

export default TalentFilters;

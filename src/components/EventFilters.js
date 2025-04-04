import React, { useState } from "react";
import event from "../assets/images/event.png";
import bookmark from "../assets/images/bookmark.png";
import start from "../assets/images/start.png";
import filters from "../assets/images/filters.png";
import settings from "../assets/images/settings.png";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import Form from "react-bootstrap/Form";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const EventFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const [showGeneral, setShowGeneral] = useState(true);
  const [showGender, setShowGender] = useState(true);
  const [showCost, setshowCost] = useState(true);
  const [showTalents, setShowTalents] = useState(true);

  const filterCategories = ["My Location", "My role"];

  const roles = [
    "Movie Premiere",
    "Theatre",
    "Workshop",
    "Art Exhibition",
    "Brand Event",
    "Industry Party",
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilters(
      (prevSelected) =>
        prevSelected.includes(filter)
          ? prevSelected.filter((item) => item !== filter) // Remove if already selected
          : [...prevSelected, filter] // Add if not selected
    );
  };

  const handleRoleChange = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((r) => r !== role)); // Remove if already selected
    } else {
      setSelectedRoles([...selectedRoles, role]); // Add if not selected
    }
  };

  const [value, setValue] = useState([17, 82]);
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white min-h-[480px] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] mr-auto px-[30px] py-[30px] md:py-[35px]">
      <div className="flex gap-[10px] items-center pb-[10px] border-b">
        <img
          src={event}
          alt="event"
          className="h-[16px] w-auto object-cover object-center"
        />
        <div className="text-[#4FD6FA] text-[14px]">Event Calendar</div>
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
                {/* <div className="flex justify-end my-[10px]">
                  <button>
                    <img
                      src={settings}
                      alt=""
                      className="h-[16px] w-auto object-cover object-center"
                    />
                  </button>
                </div> */}
              </div>
            )}
          </div>
          {/* Age Section */}
          <div className="border-b">
            <div className="flex justify-between items-center py-[10px]">
              <div className="text-[#ABB0BA] text-[14px]">Cost</div>
              <button onClick={() => setshowCost(!showCost)}>
                {showCost ? (
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
            {showCost && (
              <>
                <div className="flex justify-end my-[10px] text-[#9900ff] text-[12px] font-bold">
                  ₦{value[0]}k - ₦{value[1]}k
                </div>
                <RangeSlider
                  min={0}
                  max={100}
                  value={value}
                  onInput={handleValueChange}
                  style={{ width: "100%", backgroundColor: "#9900FF" }}
                  thumbsDisabled={[false, false]} // Ensure both thumbs can be moved
                  rangeSlideDisabled={false} // Ensure range sliding is enabled
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
                  <span className="text-[#696969]">Free</span>
                  <span className="text-[#696969]">100k</span>
                </div>
              </>
            )}
          </div>
          {/* Talents Section */}
          <div className="flex justify-between items-center py-[10px]">
            <div className="text-[#ABB0BA] text-[14px]">Event Type</div>
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
              {(showAll ? roles : roles.slice(0, 5)).map((role) => (
                <div key={role} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={role}
                    checked={selectedRoles.includes(role)}
                    onChange={() => handleRoleChange(role)}
                    className="custom-check w-5 h-5 border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor={role} className="text-gray-600 text-sm">
                    {role}
                  </label>
                </div>
              ))}
              {roles.length > 5 && (
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

export default EventFilters;

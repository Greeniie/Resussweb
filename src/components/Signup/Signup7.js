import React, { useState } from "react";
import pro7 from "../../assets/images/pro7.png";
import Form from "react-bootstrap/Form";
import { Select, Input } from "antd";
import {
  ArrowLeftOutlined,
  CloseCircleFilled,
  EditFilled,
} from "@ant-design/icons";
import NavBar from "../NavBar";

const Signup7 = ({ nextStep, prevStep, formData, handleInputChange }) => {
  const locations = [
    "Abia",
    "Abuja",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const locationOptions = locations.map((location) => ({
    value: location,
    label: location,
  }));

  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleLocationChange = (value) => {
    setSelectedValue(value);
    handleInputChange({ target: { name: "location", value } });
  };

  const { TextArea } = Input;

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>
        <div className="hidden md:grid md:grid-cols-2 mt-[50px] gap-[140px]">
          <div className="z-50 bg-white w-[130%] min-h-[480px] rounded-[30px] mx-auto px-[100px] py-[60px]">
            <div className="text-[#4fd6fa] text-[27px] font-semibold">
              Your Location
            </div>
            <div className="text-[#898A8D] text-[16px] pt-[10px] pb-[20px]">
              Add your location
            </div>
            <div className="relative w-[80%] mb-[60px]">
              <label
                style={{ zIndex: "99" }}
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 px-1 bg-white text-gray-500 transition-all ${
                  isFocused || selectedValue
                    ? "top-1 text-xs text-[#330066] "
                    : "text-base"
                }`}
              >
                Location
              </label>

              <div className="relative border border-gray-400 rounded-md px-2 pt-2 pb-1">
                <Select
                  showSearch
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(!!selectedValue)}
                  onChange={handleLocationChange}
                  options={locationOptions}
                  className="w-full"
                  dropdownStyle={{ marginTop: "30px", zIndex: 9999 }}
                  bordered={false}
                />
              </div>
            </div>

            <div className="text-[#4fd6fa] text-[27px] font-semibold">
              Your Bio
            </div>
            <div className="text-[#898A8D] text-[16px] pt-[10px] pb-[20px]">
              Write your bio
            </div>

            <TextArea rows={12} />
          </div>

          <div className="form z-50 bg-white min-h-[480px] w-[80%] mb-[30px] rounded-[40px]  mx-auto px-[40px] py-[50px]">
            <div className="relative h-[300px] w-[300px] flex justify-center items-center">
              <img
                src={pro7}
                className="object-cover object-center h-[300px] w-auto"
                alt="profile"
              />
              {/* File Upload Button */}
              <label className="absolute bottom-[-20px] bg-[#330066] w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                <EditFilled className="text-white text-lg" />
                <input type="file" className="hidden" />
              </label>
            </div>

            <div>
              <div className="text-[#545454] font-bold text-[27px] pt-[50px]">
                Abiola Sobo
              </div>
              <div className="text-[#898A8D] text-[16px]">08037227490</div>
            </div>

            <div className="mt-[40px]">
              <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
                Your selected roles
              </h2>
              <div className="flex flex-col gap-[10px]">
                {formData?.roles.length > 0 ? (
                  formData?.roles.map((role, index) => (
                    <div
                      key={index}
                      className="flex justify-between bg-[#F6E9FF] text-[#545454] px-[15px] py-[10px] rounded-[50px] "
                    >
                      <span>{role}</span>
                      <span className="cursor-pointer">
                        <div>
                          <CloseCircleFilled
                            style={{ fontSize: "20px", color: "#330066" }}
                          />
                        </div>
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-[#461378]">No roles selected</p>
                )}
              </div>

              <button
                onClick={nextStep}
                className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[50px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
              >
                Continue
              </button>
              <div
                onClick={prevStep}
                className=" cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px] md:text-[15px] md:text-[16px]"
              >
                <ArrowLeftOutlined />
                <span>
                  <div className="text-[#330066] text-[12px]">Go back</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden min-h-screen overflow-scroll relative login-bg">
        <div className="px-[20px] pt-[20px]">
          <NavBar />
        </div>
        <div className="relative min-h-screen ">
          <div className="absolute top-[20px] left-0 w-full min-h-[calc(100%-20px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[30px]">
              <div className="relative h-[300px] w-[300px] flex justify-center items-center">
                <img
                  src={pro7}
                  className="object-cover object-center h-[300px] w-auto"
                  alt="profile"
                />
                {/* File Upload Button */}
                <label className="absolute bottom-[-20px] bg-[#330066] w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                  <EditFilled className="text-white text-lg" />
                  <input type="file" className="hidden" />
                </label>
              </div>

              <div>
                <div className="text-[#545454] font-bold text-[27px] pt-[50px]">
                  Abiola Sobo
                </div>
                <div className="text-[#898A8D] text-[16px] pb-[20px]">08037227490</div>
              </div>
              <div className="text-[#4fd6fa] text-[25px] font-semibold leading-snug pb-[20px]">
                Your Location
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px]">
                Add your location.
              </div>

              <div className="relative w-full mb-[60px]">
                <label
                  style={{ zIndex: "99" }}
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 px-1 bg-white text-gray-500 transition-all ${
                    isFocused || selectedValue
                      ? "top-1 text-xs text-[#330066] "
                      : "text-base"
                  }`}
                >
                  Location
                </label>

                <div className="relative border border-gray-400 rounded-md px-2 pt-2 pb-1">
                  <Select
                    showSearch
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(!!selectedValue)}
                    onChange={handleLocationChange}
                    options={locationOptions}
                    className="w-full"
                    dropdownStyle={{ marginTop: "30px", zIndex: 9999 }}
                    bordered={false}
                  />
                </div>
              </div>

              <div className="text-[#4fd6fa] text-[25px] font-semibold leading-snug pb-[20px]">
                Your Bio
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px]">
                Write your bio
              </div>
              <TextArea rows={12} />

              <button
                onClick={nextStep}
                className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[50px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
              >
                Continue
              </button>
              <div
                onClick={prevStep}
                className=" cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px] md:text-[15px] md:text-[16px]"
              >
                <ArrowLeftOutlined />
                <span>
                  <div className="text-[#330066] text-[12px]">Go back</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup7;

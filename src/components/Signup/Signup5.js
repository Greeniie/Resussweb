import React, { useState, useRef, useEffect } from "react";
import profile from "../../assets/images/profile.png";

import Form from "react-bootstrap/Form";

import {
  ArrowLeftOutlined,
  SearchOutlined,
  CloseCircleOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";
import NavBar from "../NavBar";

const Signup5 = ({
  roles,
  prevStep,
  nextStep,
  formData,
  handleInputChange,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedRolesRef = useRef(null);
  const [isStatusBoxVisible, setIsStatusBoxVisible] = useState(true);

  const [searchValue, setSearchValue] = useState("");

  const filteredRoles = roles.filter((role) =>
    role.toLowerCase().includes(searchValue.toLowerCase())
  );

  const groupedFilteredRoles = filteredRoles.reduce((acc, role) => {
    const firstLetter = role.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(role);
    return acc;
  }, {});

  const handleClear = () => {
    setSearchValue("");
  };

  // Use formData.roles instead of local state
  const selectedRoles = formData.roles || [];

  const handleSelectRole = (role) => {
    let updatedRoles;
    if (selectedRoles.includes(role)) {
      updatedRoles = selectedRoles.filter((r) => r !== role);
    } else if (selectedRoles.length < 3) {
      updatedRoles = [...selectedRoles, role];
    } else {
      return; // Prevent selecting more than 3 roles
    }

    // Update formData using handleInputChange
    handleInputChange({
      target: { name: "roles", value: updatedRoles },
    });
  };

  console.log(formData);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsStatusBoxVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (selectedRolesRef.current) {
      observer.observe(selectedRolesRef.current);
    }

    return () => {
      if (selectedRolesRef.current) {
        observer.unobserve(selectedRolesRef.current);
      }
    };
  }, []);

  const scrollToSelectedRoles = () => {
    selectedRolesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>
        <div className="hidden md:grid md:grid-cols-3 mt-[50px] gap-[30px] px-[60px]">
          <div className="col-span-2">
            <div className="form z-50 bg-white min-h-[480px] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px]  mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
              <div className="flex items-center gap-[10px] text-[#4fd6fa] text-[27px] font-semibold">
                Complete Role
              </div>
              <div className="text-[#898A8D] text-[16px] pb-[40px]">
                Select your role, you can select up to three roles that you
                want.{" "}
                <span className="font-bold">
                  Note that the first selected role is your main role
                </span>
              </div>
              <Form.Group className="mb-3 relative w-[50%] ">
                <Form.Label>What do you do?</Form.Label>

                <div className="absolute bottom-[10px] left-3 flex items-center text-[#abb0ba]">
                  <SearchOutlined style={{ fontSize: "20px" }} />
                </div>

                {searchValue && (
                  <button
                    className="absolute bottom-[15px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                    onClick={handleClear}
                  >
                    <CloseCircleOutlined />
                  </button>
                )}
                <Form.Control
                  type="text"
                  name="searchValue"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search Role"
                  className="border-[#6633FF] p-2 custom-placeholder ps-5"
                />
              </Form.Group>

              {Object.keys(groupedFilteredRoles).length > 0 ? (
                <div>
                  {Object.keys(groupedFilteredRoles)
                    .sort()
                    .map((letter) => (
                      <div key={letter}>
                        <div className="pt-[30px] pb-[10px] font-bold text-[30px] text-[#EDE8FC]">
                          {letter}
                        </div>
                        <div className="flex flex-wrap gap-[10px]">
                          {groupedFilteredRoles[letter].map((role, index) => (
                            <div
                              key={index}
                              className={`text-[14px] px-[20px] py-[5px] border rounded-[50px] cursor-pointer transition-all
                    ${
                      selectedRoles.includes(role)
                        ? "bg-[#DFD1E7] text-[#461378] border-[#A388EE]"
                        : "text-[#545454] border-[#dedede]"
                    }`}
                              onClick={() => handleSelectRole(role)}
                            >
                              {role}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="pt-[50px]">
                  No results. Please check that you are spelling the role
                  correctly
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="form z-50 bg-white min-h-[480px] mb-[30px] rounded-[40px]  mx-auto px-[40px] py-[35px]">
              <div className="pb-[40px]">
                <img
                  src={profile}
                  className="object-cover object-center w-[80px] h-auto"
                  alt="profile"
                />
              </div>

              <div>
                <div className="text-[#545454] text-[27px]">Abiola Sobo</div>
                <div className="text-[#898A8D] text-[16px]">08037227490</div>
              </div>

              <div className="mt-[40px]">
                <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
                  Your selected roles
                </h2>
                <div className="flex flex-col gap-[10px]">
                  {selectedRoles.length > 0 ? (
                    selectedRoles.map((role, index) => (
                      <div
                        key={index}
                        className={`flex justify-between px-[15px] py-[10px] rounded-[50px] ${
                          index === 0
                            ? "bg-[#461378] text-white"
                            : "bg-[#F6E9FF] text-[#330066]"
                        }`}
                      >
                        <span>{role}</span>
                        <span className="cursor-pointer">
                          <div onClick={() => handleSelectRole(role)}>
                            <CloseCircleFilled style={{ fontSize: "20px" }} />
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
      </div>

      <div className="block md:hidden min-h-screen overflow-scroll relative login-bg">
        <div className="px-[20px] pt-[20px]">
          <NavBar />
        </div>

        {/* Fixed Status and Scroll Button - Hidden when at bottom */}
        {isStatusBoxVisible && (
          <div className="fixed bottom-[40px] right-[10px] w-[60%] bg-[#330066] text-white px-4 py-2 rounded-full flex items-center justify-between gap-4 shadow-lg z-[1000]">
            <span>{selectedRoles.length} roles selected</span>
            <button
              onClick={scrollToSelectedRoles}
              className="bg-white text-[#330066] px-3 py-1 rounded-full"
            >
              ↓
            </button>
          </div>
        )}

        <div className="relative min-h-screen">
          <div className="absolute top-[20px] left-0 w-full min-h-[calc(100%-20px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[30px]">
              <div className="text-[#4fd6fa] text-[25px] font-semibold">
                Complete Role
              </div>
              <div className="text-[#898A8D] text-[14px]">
                Select your role, you can select up to three roles that you
                want.{" "}
                <span className="font-bold">
                  Note that the first selected role is your main role
                </span>
              </div>

              {/* Search Input */}
              <Form.Group className="relative w-full mt-[20px]">
                <Form.Label>What do you do?</Form.Label>
                <div className="absolute bottom-[10px] left-3 flex items-center text-[#abb0ba]">
                  <SearchOutlined style={{ fontSize: "20px" }} />
                </div>

                {searchValue && (
                  <button
                    className="absolute bottom-[15px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                    onClick={handleClear}
                  >
                    <CloseCircleOutlined />
                  </button>
                )}
                <Form.Control
                  type="text"
                  name="searchValue"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search Role"
                  className="border-[#6633FF] p-2 custom-placeholder ps-5"
                />
              </Form.Group>

              {/* Role List */}
              {Object.keys(groupedFilteredRoles).length > 0 ? (
                <div className="pb-[20px]">
                  {Object.keys(groupedFilteredRoles)
                    .sort()
                    .map((letter) => (
                      <div key={letter}>
                        <div className="pt-[10px] font-bold text-[30px] text-[#EDE8FC]">
                          {letter}
                        </div>
                        <div className="flex flex-wrap gap-[10px]">
                          {groupedFilteredRoles[letter].map((role, index) => (
                            <div
                              key={index}
                              className={`text-[14px] px-[20px] py-[5px] border rounded-[50px] cursor-pointer transition-all ${
                                selectedRoles.includes(role)
                                  ? "bg-[#DFD1E7] text-[#461378] border-[#A388EE]"
                                  : "text-[#545454] border-[#dedede]"
                              }`}
                              onClick={() => handleSelectRole(role)}
                            >
                              {role}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="py-[50px]">
                  No results. Please check that you are spelling the role
                  correctly
                </div>
              )}

              {/* Selected Roles */}
              <div className="border-t">
                <div className="mt-[20px]" ref={selectedRolesRef}>
                  <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
                    Your selected roles
                  </h2>
                  <div className="flex flex-col gap-[10px]">
                    {selectedRoles.length > 0 ? (
                      selectedRoles.map((role, index) => (
                        <div
                          key={index}
                          className={`flex justify-between px-[15px] py-[10px] rounded-[50px] ${
                            index === 0
                              ? "bg-[#461378] text-white"
                              : "bg-[#F6E9FF] text-[#330066]"
                          }`}
                        >
                          <span>{role}</span>
                          <span className="cursor-pointer">
                            <div onClick={() => handleSelectRole(role)}>
                              <CloseCircleFilled style={{ fontSize: "20px" }} />
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
                    className="bg-[#4FD6FA] rounded-[50px] mb-[40px] w-full mt-[50px] p-[8px] text-[15px] text-white font-medium"
                  >
                    Continue
                  </button>
                  <div
                    onClick={prevStep}
                    className="cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px]"
                  >
                    <ArrowLeftOutlined />
                    <span>Go back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup5;

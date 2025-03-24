import React, { useState } from "react";
import logo from "../assets/logo.png";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Form from "react-bootstrap/Form";

const HomeNav = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <>
      <nav className="navbar">
        <div className="flex justify-between items-center md:hidden">
          <div>
            <img src={logo} className="h-[30px] w-auto" alt="logo" />
          </div>
        </div>

        <div className="hidden md:flex md:justify-between md:items-center w-full px-[50px] py-[20px]">
          <div className="flex gap-[50px] items-center">
            <div>
              <img src={logo} className="w-[150px] h-auto object-center object-contain" alt="logo" />
            </div>
            <Form.Group className="relative w-full ">
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
                placeholder="Search"
                className="border-[#6633FF] p-2 custom-placeholder ps-5"
              />
            </Form.Group>
          </div>
          <div className="flex gap-[50px] items-center">
            </div>{" "}
        </div>
      </nav>
    </>
  );
};

export default HomeNav;

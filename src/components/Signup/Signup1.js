import React, { useState, useRef } from "react";
import signup1 from "../../assets/images/signup1.png";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const Signup1 = ({ nextStep }) => {
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>
        <div className="hidden md:grid md:grid-cols-2 mt-[50px] px-[50px] pl-[100px]">
          {/* <div
          style={{ zIndex: "-1" }}
          className="absolute left-[40px] top-[120px]"
        >
          <img
            src={signup1}
            className="w-auto w-auto h-[550px] object-center object-cover"
            alt="signup1"
          />
        </div> */}

          <div className="w-[90%]">
            <div className="font-bold text-[45px] text-[#461378] pt-[60px] leading-tight w-full">
              Find your next job
              <br />
              and elevate your career
            </div>
            <div className="text-[20px] text-[#461378] pt-[20px]">
              Discover the new talent, projects and collorate with talent across
              Africa
            </div>
          </div>

          <div>
            <div className="form z-50 bg-white min-h-[400px] w-[80%] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
              <div className="flex items-center gap-[10px] text-[#4fd6fa] text-[27px] font-semibold pb-[10px]">
                Get started with Resuss
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px] md:text-[15px] md:text-[16px]">
                Let us have your email address
              </div>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter your email address"
                    className="border-[#abb0ba] p-2 custom-placeholder"
                  />
                </Form.Group>

                <button
                  onClick={nextStep}
                  className="bg-[#4FD6FA] rounded-[50px] mb-[20px] rounded-[60px] w-full mt-[20px] py-[12px] px-[10px] text-[16px] text-white font-medium"
                >
                  Submit
                </button>
                <div className="text-[#898A8D] text-[14px] md:text-[15px] md:text-[16px]">
                  Already have an account?{" "}
                  <span>
                    <Link to="/login" className="no-underline text-[#6633FF]">
                      Click here
                    </Link>
                  </span>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden min-h-screen overflow-scroll relative login-bg">
        <div className="px-[20px] pt-[20px]">
          <NavBar />
        </div>

        <div className="absolute top-[0px] right-[-220px] overflow-hidden w-full">
          <img
            src={signup1}
            className="w-auto h-[400px] object-cover object-right max-w-none"
            alt="login2"
          />
        </div>

        <div className="relative min-h-screen ">
          <div className="absolute top-[150px] left-0 w-full min-h-[calc(100%-150px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[60px]">
              <div className="text-[#4fd6fa] text-[25px] font-semibold leading-[36px] pb-[50px]">
                Get started with Resuss
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter your email address"
                    className="border-[#abb0ba] p-2 custom-placeholder"
                    // onChange={(evt) => handleInputChange(evt)}
                  />
                </Form.Group>
              </Form>
              <div className="text-[#898A8D] text-[14px] md:text-[15px] md:text-[16px]">
                Already have an account?{" "}
                <span>
                  <Link to="/login" className="no-underline text-[#6633FF]">
                    Click here
                  </Link>
                </span>
              </div>
            </div>

            <button
              onClick={nextStep}
              className="bg-[#4FD6FA] rounded-[60px] w-full my-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup1;

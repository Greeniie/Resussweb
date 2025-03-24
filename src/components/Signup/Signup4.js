import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import NavBar from "../NavBar";

const Signup4 = ({ nextStep, prevStep }) => {
  const [phone, setPhone] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>
        <div className="hidden md:grid md:grid-cols-2 mt-[50px] pl-[100px]">
          <div className="w-[90%]">
            <div className="font-bold text-[45px] text-[#461378] pt-[60px] leading-tight w-full">
              Let's build a profile and <br /> get you on the center <br />{" "}
              stage
            </div>
            <div className="text-[20px] text-[#461378] pt-[20px]">
              Discover the new talent, projects and collorate with talent across
              Africa
            </div>
          </div>
          <div>
            <div className="form z-50 bg-white min-h-[480px] w-[80%] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px]  mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
              <div className="flex items-center gap-[10px] text-[#4fd6fa] text-[24px] md:text-[26px] md:text-[27px] font-semibold pb-[10px]">
                Complete profile
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px] md:text-[15px] md:text-[16px]">
                Set up your Resuss account with your details and occupation
              </div>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="f_name"
                    placeholder="Enter first name"
                    className="border-[#abb0ba] p-2 custom-placeholder"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>

                  <Form.Control
                    type="text"
                    name="l_name"
                    placeholder="Enter last name"
                    className="border-[#abb0ba] p-2 custom-placeholder"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <PhoneInput
                    country={"ng"} // Default country set to Nigeria
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputClass="border-[#abb0ba] custom-placeholder"
                    buttonClass="border-[#abb0ba]"
                  />
                </Form.Group>

                <Form.Group className="mb-3 relative">
                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
                  />
                  <div
                    className="absolute bottom-[15px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <EyeInvisibleOutlined />
                    ) : (
                      <EyeOutlined />
                    )}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Referral (optional)</Form.Label>

                  <Form.Control
                    type="text"
                    name="referral"
                    placeholder="Enter referral code"
                    className="border-[#abb0ba] p-2 custom-placeholder"
                  />
                </Form.Group>
                <Form.Group className="flex items-start gap-2 pb-[20px]">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="w-5 h-5 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="text-gray-600 text-sm leading-5"
                  >
                    Yes, I understand and agree to the{" "}
                    <Link
                      to="/login"
                      className="text-[#6633FF] cursor-pointer hover:underline"
                    >
                      App Terms of Service
                    </Link>
                    , including the{" "}
                    <Link
                      to="/login"
                      className="text-[#6633FF] cursor-pointer hover:underline"
                    >
                      User Agreement
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/login"
                      className="text-[#6633FF] cursor-pointer hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </Form.Group>

                <button
                  onClick={nextStep}
                  className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[20px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
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
              </Form>
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
              <div className="text-[#4fd6fa] text-[25px] font-semibold">
                Complete Profile
              </div>
              <div className="text-[#898A8D] text-[14px]">
                Set up your Resuss account with your details and occupation
              </div>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="f_name"
                  placeholder="Enter first name"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>

                <Form.Control
                  type="text"
                  name="l_name"
                  placeholder="Enter last name"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  country={"ng"} // Default country set to Nigeria
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputClass="border-[#abb0ba] custom-placeholder"
                  buttonClass="border-[#abb0ba]"
                />
              </Form.Group>

              <Form.Group className="mb-3 relative">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
                />
                <div
                  className="absolute bottom-[15px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Referral (optional)</Form.Label>

                <Form.Control
                  type="text"
                  name="referral"
                  placeholder="Enter referral code"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                />
              </Form.Group>
              <Form.Group className="flex items-start gap-2 pb-[20px]">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-5 h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="text-gray-600 text-sm leading-5"
                >
                  Yes, I understand and agree to the{" "}
                  <Link
                    to="/login"
                    className="text-[#6633FF] cursor-pointer hover:underline"
                  >
                    App Terms of Service
                  </Link>
                  , including the{" "}
                  <Link
                    to="/login"
                    className="text-[#6633FF] cursor-pointer hover:underline"
                  >
                    User Agreement
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/login"
                    className="text-[#6633FF] cursor-pointer hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </Form.Group>

              <button
                onClick={nextStep}
                className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[20px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
              >
                Continue
              </button>
              <div
                onClick={prevStep}
                className=" cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px] md:text-[15px] md:text-[16px] pb-[10px]"
              >
                <ArrowLeftOutlined />
                <span>
                  <div className="text-[#330066] text-[12px]">Go back</div>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup4;

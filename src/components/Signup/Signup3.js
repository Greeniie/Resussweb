import React, { useState, useRef } from "react";
import signup3 from "../../assets/images/signup3.png";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import NavBar from "../NavBar";

const Signup3 = ({ nextStep }) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>
        <div className="hidden md:grid md:grid-cols-2 mt-[50px] px-[50px] pl-[100px]">
          {/* <div
        style={{ zIndex: "-1" }}
        className="absolute left-[80px] top-[200px]"
      >
        <img
          src={signup3}
          className="w-auto h-[430px] object-center object-cover"
          alt="signup3"
        />
      </div> */}
          <div className="w-[90%]">
            <div className="font-bold text-[45px] text-[#461378] pt-[60px] leading-tight w-full">
              Verify you've got <br /> the shine in you
            </div>
            <div className="text-[20px] text-[#461378] pt-[20px]">
              Discover the new talent, projects and collorate with talent across
              Africa
            </div>
          </div>

          <div>
            <div className="form z-50 bg-white min-h-[400px] w-[80%] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px]  mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
              <div className="text-[#4fd6fa] text-[27px] font-semibold pb-[10px]">
                Verify
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px] md:text-[15px] md:text-[16px]">
                Enter OTP code sent to your email address
              </div>
              <div className="flex justify-start gap-3 my-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 border border-gray-300 text-center text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD6FA]"
                  />
                ))}
              </div>
              <button
                onClick={nextStep}
                className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[20px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
              >
                Continue
              </button>
              <div className="flex items-center gap-[10px] no-underline text-[#B8B8B8] text-[14px] md:text-[15px] md:text-[16px]">
                <ArrowLeftOutlined />
                <span>
                  <Link to="/login" className="no-underline text-[#B8B8B8]">
                    Back to login
                  </Link>
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
        <div className="absolute top-[0px] right-[-120px] overflow-hidden w-full">
          <img
            src={signup3}
            className="w-auto h-[400px] object-cover object-right max-w-none"
            alt="login2"
          />
        </div>
        <div className="relative min-h-screen ">
          <div className="absolute top-[200px] left-0 w-full min-h-[calc(100%-200px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[30px]">
              <div className="text-[#4fd6fa] text-[25px] font-semibold">
                Verify
              </div>
              <div className="text-[#898A8D] text-[14px]">
                Enter OTP code sent to your email address
              </div>

              <div className="flex justify-start gap-2 mt-[30px]">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 border border-gray-300 text-center text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD6FA]"
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextStep}
              className="bg-[#4FD6FA] rounded-[60px] w-full mb-[10px] mt-[20px] px-[10px] py-[12px] text-[18px] text-white font-medium"
            >
              Continue
            </button>
            <div className=" pt-[20px] flex items-center gap-[10px] no-underline text-[#B8B8B8] text-[14px] md:text-[15px] md:text-[16px]">
              <ArrowLeftOutlined />
              <span>
                <Link to="/login" className="no-underline text-[#B8B8B8]">
                  Back to login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup3;

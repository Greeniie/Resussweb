import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import forgot1 from "../../assets/images/forgot1.png";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {
 MailOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const Fp2 = ({nextStep}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden forgot-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>

        <div>
          <div
            style={{ zIndex: "-1" }}
            className="absolute right-[50px] top-[100px]"
          >
            <img
              src={forgot1}
              className="w-auto h-[560px] object-center object-cover"
              alt="forgotpassword"
            />
          </div>
        </div>

        <div className="form z-50 bg-white min-h-[400px] w-[500px] rounded-[30px] md:rounded-[35px] md:rounded-[40px] border border-[#abb0ba] mx-auto mt-[100px] px-[40px] md:px-[50px] md:px-[60px] py-[30px] md:py-[35px] md:py-[40px]">
          <div className="flex gap-[10px] text-[#4fd6fa] text-[27px] font-semibold pb-[10px]">
            <MailOutlined /> <span>Check your email</span>
          </div>
          <div className="text-[#898A8D] text-[16px]">
            We have sent password recovery instructions to your email.
          </div>

          <button onClick={nextStep} className="bg-[#4FD6FA] hover:bg-[#6633FF] rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full mt-[40px] mb-[5px] px-[10px] py-[12px] text-[16px] text-white font-medium">
              Continue
            </button>
            <div className="text-[#b8b8b8] text-[16px] pt-[10px] pb-[60px]">
              Didn't receive an email?
              <span className="pl-[5px]">
                <Link
                  to="/forgot-password"
                  className="no-underline text-[#6633FF]"
                >
                  Click to resend
                </Link>
              </span>
            </div>
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

      <div className="block md:hidden min-h-screen overflow-hidden w-full relative forgot-bg">
        <div className="px-[20px] pt-[20px]">
          <NavBar />
        </div>

        <div className="absolute top-[30px] right-[0px] overflow-hidden w-full">
          <img
            src={forgot1}
            className="w-[420px] h-[640px] object-cover object-right max-w-none"
            alt="forgotpassword"
          />
        </div>

        <div className="relative min-h-screen">
          <div className="absolute top-[200px] left-0 w-full min-h-[calc(100%-200px)] bg-white z-[999] rounded-t-[58px] px-[40px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[60px]">
              <div className="flex gap-[10px] text-[#4fd6fa] text-[25px] font-semibold leading-[36px] ">
                <MailOutlined /> <span>Check your email</span>
              </div>
              <div className="text-[#898A8D] text-[14px] pt-[10px]">
              We have sent password recovery instructions to your email.

              </div>
            </div>
            <button onClick={nextStep} className="bg-[#4FD6FA] rounded-[60px] w-full mb-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium">
                Continue
              </button>
              <div className="text-[#b8b8b8] text-[16px] pt-[10px] pb-[30px]">
                Didn't receive an email?
                <span className="pl-[5px]">
                  <Link
                    to="/forgot-password"
                    className="no-underline text-[#6633FF]"
                  >
                    Click to resend
                  </Link>
                </span>
              </div>

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
  );
};

export default Fp2;

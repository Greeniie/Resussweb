import React, { useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import forgot1 from "../../assets/images/forgot1.png";
import forgot2 from "../../assets/images/forgot2.png";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
const Rp2 = () => {
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
            src={forgot2}
            className="w-auto h-[560px] object-center object-cover"
            alt="forgotpassword"
          />
        </div>
      </div>

      <div className="form z-50 bg-white min-h-[300px] w-[500px] rounded-[30px] md:rounded-[35px] md:rounded-[40px] border border-[#abb0ba] mx-auto mt-[100px] px-[40px] md:px-[50px] md:px-[60px] py-[30px] md:py-[35px] md:py-[40px]">
        <div className="flex gap-[10px]  text-[27px] font-semibold pb-[20px]">
          <CheckCircleFilled style={{ color: "#4AC974" }} />
          <span className="text-[#4fd6fa] text-[25px] font-semibold">Reset Successful</span>
        </div>
        <div className="text-[#898A8D] text-[16px] pb-[50px]">
          You can now log in to your account using your new password. Keep
          your account secure and enjoy using our platform.
        </div>

        <Link
            to="/login"
            className="block hover:bg-[#6633FF] bg-[#4FD6FA] rounded-[50px] mb-[30px] px-[10px] py-[12px] text-[16px] text-white font-medium text-center"
          >
            Go to Log In
          </Link>
      </div>
    </div>

    <div className="block md:hidden min-h-screen overflow-hidden w-full relative forgot-bg">
      <div className="px-[20px] pt-[20px]">
        <NavBar />
      </div>

      <div className="absolute top-[30px] right-[0px] overflow-hidden w-full">
        <img
          src={forgot2}
          className="w-[420px] h-[640px] object-cover object-right max-w-none"
          alt="forgotpassword"
        />
      </div>

      <div className="relative min-h-screen">
        <div className="absolute top-[200px] left-0 w-full min-h-[calc(100%-200px)] bg-white z-[999] rounded-t-[58px] px-[40px] pt-[50px] overflow-y-auto">
          <div className="pt-[20px] pb-[40px]">
            <div className="flex gap-[10px] text-[30px] font-semibold leading-[36px] ">
              <CheckCircleFilled style={{ color: "#4AC974" }} />
              <span className="text-[#4fd6fa] text-[25px]">Reset Successful</span>
            </div>
            <div className="text-[#898A8D] text-[14px] pt-[10px]">
              You can now log in to your account using your new password.
              Keep your account secure and enjoy using our platform.
            </div>
          </div>

          <Link
            to="/login"
            className="block hover:bg-[#6633FF] bg-[#4FD6FA] rounded-[50px] mb-[30px] px-[10px] py-[12px] text-[16px] text-white font-medium text-center"
          >
            Go to Log In
          </Link>
        </div>
      </div>
    </div>
  </div>  )
}

export default Rp2
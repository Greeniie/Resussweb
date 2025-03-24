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



const Rp1 = ({nextStep}) => {

    const inputRefs = useRef([]);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState("");
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      if (password !== e.target.value) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
    };
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
          <div className="text-[#4fd6fa] text-[27px] font-semibold pb-[10px]">
            Set new password
          </div>
          <div className="text-[#898A8D] text-[16px]">
            Must be at least 8 characters
          </div>

          <Form className="mt-4">
            <Form.Group className="mb-3 relative">
              <div className="relative">
                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center cursor-pointer text-[#abb0ba]"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 relative">
              <div className="relative">
                <Form.Control
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <div
                  className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center cursor-pointer text-[#abb0ba]"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  {confirmPasswordVisible ? (
                    <EyeInvisibleOutlined />
                  ) : (
                    <EyeOutlined />
                  )}
                </div>
              </div>
              <div className="min-h-[20px]">
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </Form.Group>

            <button onClick={nextStep} className="bg-[#4FD6FA] hover:bg-[#6633FF] rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full mb-[50px] px-[10px] py-[12px] text-[16px] text-white font-medium">
              Reset Password
            </button>
          </Form>
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
            <div className="pt-[20px] pb-[40px]">
              <div className="text-[#4fd6fa] text-[34px] font-semibold leading-[36px] ">
                Set new password
              </div>
              <div className="text-[#898A8D] text-[14px] pt-[15px]">
                Must be at least 8 characters
              </div>
            </div>

            <Form>
              <Form.Group className="mb-3 relative">
                <div className="relative">
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center cursor-pointer text-[#abb0ba]"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <EyeInvisibleOutlined />
                    ) : (
                      <EyeOutlined />
                    )}
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 relative">
                <div className="relative">
                  <Form.Control
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <div
                    className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center cursor-pointer text-[#abb0ba]"
                    onClick={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                  >
                    {confirmPasswordVisible ? (
                      <EyeInvisibleOutlined />
                    ) : (
                      <EyeOutlined />
                    )}
                  </div>
                </div>
                <div className="min-h-[20px]">
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
              </Form.Group>
              <button onClick={nextStep} className="bg-[#4FD6FA] rounded-[60px] w-full mt-[10px] mb-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium">
                Reset Password
              </button>
            </Form>

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
    </div>  )
}

export default Rp1
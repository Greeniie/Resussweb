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

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs = useRef([]);

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

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
      {/* <div>
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
            Forgot password
          </div>
          <div className="text-[#898A8D] text-[16px]">
          Please enter your email address, and we will 
          send you instructions about changing your password.
           
          </div>

          <Form className="mt-4">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="title"
                placeholder="Your email address"
                className="border-[#abb0ba] p-2 custom-placeholder"
              />
            </Form.Group>


            <button className="bg-[#4FD6FA] hover:bg-[#6633FF] rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full my-[40px] px-[10px] py-[12px] text-[16px] text-white font-medium">
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
            <div className="pt-[20px] pb-[60px]">
              <div className="text-[#4fd6fa] text-[36px] font-semibold leading-[36px] ">
              Forgot Password
              </div>
              <div className="text-[#898A8D] text-[18px] pt-[30px]">
              Please enter your email address, and we will 
              send you instructions about changing your password.
               
              </div>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Your email address"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                  // onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>

             

              <button className="bg-[#4FD6FA] rounded-[60px] w-full my-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium">
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
      </div> */}

      {/* <div>
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

          <Form className="mt-4">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="title"
                placeholder="Your email address"
                className="border-[#abb0ba] p-2 custom-placeholder"
              />
            </Form.Group>

            <button className="bg-[#4FD6FA] hover:bg-[#6633FF] rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full mt-[40px] mb-[5px] px-[10px] py-[12px] text-[16px] text-white font-medium">
              Continue
            </button>
            <div className="text-[#b8b8b8] text-[16px] pt-[10px] pb-[60px]">
                Didn't receive an email?
                <span className="pl-[5px]">
                  <Link to="/forgot-password" className="no-underline text-[#6633FF]">
                    Click to resend
                  </Link>
                </span>
              </div>
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
            <div className="pt-[20px] pb-[60px]">
              <div className="flex gap-[10px] text-[#4fd6fa] text-[34px] font-semibold leading-[36px] ">
              <MailOutlined /> <span>Check your email</span>
              </div>
              <div className="text-[#898A8D] text-[18px] pt-[30px]">
                Please enter your email address, and we will send you
                instructions about changing your password.
              </div>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Your email address"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                  // onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>

              <button className="bg-[#4FD6FA] rounded-[60px] w-full my-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium">
                Continue
              </button>
              <div className="text-[#b8b8b8] text-[16px] pt-[10px] pb-[30px]">
                Didn't receive an email?
                <span className="pl-[5px]">
                  <Link to="/forgot-password" className="no-underline text-[#6633FF]">
                    Click to resend
                  </Link>
                </span>
              </div>
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
</div> */}
      {/* <div>
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
            Verify
          </div>
          <div className="text-[#898A8D] text-[16px]">
            Enter OTP code sent to your email address
          </div>

          <div className="flex justify-start gap-3 mt-[30px]">
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

          <button className="bg-[#4FD6FA] hover:bg-[#6633FF] rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full my-[40px] px-[10px] py-[12px] text-[16px] text-white font-medium">
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
            <div className="pt-[20px] pb-[10px]">
              <div className="text-[#4fd6fa] text-[36px] font-semibold leading-[36px] ">
                Verify
              </div>
              <div className="text-[#898A8D] text-[18px] pt-[30px]">
                Enter OTP code sent to your email address
              </div>
            </div>
            <div className="flex justify-start gap-3 mt-[30px]">
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
            <button className="bg-[#4FD6FA] rounded-[60px] w-full my-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium">
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
</div> */}

      {/* <div>
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

              <button className="bg-[#4FD6FA] hover:bg-[#6633FF] rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full mb-[50px] px-[10px] py-[12px] text-[16px] text-white font-medium">
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
                <div className="text-[#898A8D] text-[18px] pt-[15px]">
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
                <button className="bg-[#4FD6FA] rounded-[60px] w-full mt-[10px] mb-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium">
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
      </div> */}
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
              <span className="text-[#4fd6fa]">Reset Successful</span>
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
                  <span className="text-[#4fd6fa]">Reset Successful</span>
                </div>
                <div className="text-[#898A8D] text-[18px] pt-[15px]">
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
      </div>
    </div>
  );
};

export default ForgotPassword;

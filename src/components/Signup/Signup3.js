import React, { useState, useRef, useEffect } from "react";
import signup3 from "../../assets/images/signup3.png";
import { ArrowLeftOutlined } from "@ant-design/icons";
import NavBar from "../NavBar";
import { useDispatch } from "react-redux";
import { verifySignupOTP } from "../../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { Spinner } from "react-bootstrap";
import OtpInput from "../OtpInput";

const Signup3 = ({ nextStep }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const [formData, setFormData] = useState({ otp: "" });
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFormData({ otp: otp.join("") });
  }, [otp]);

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

  const onFinish = (e) => {
    e.preventDefault();
    setConfirmLoading(true);

    dispatch(verifySignupOTP(formData)).then((response) => {
      if (response.type === "auth/verifySignupOTP/fulfilled") {
        notification.success({ message: "OTP verified successfully" });
        setConfirmLoading(false);
        nextStep();
      } else if (response.type === "auth/verifySignupOTP/rejected") {
        setConfirmLoading(false);
        setError(response?.payload?.message || "An unknown error occurred"); // Handle error message correctly
      } else {
        setConfirmLoading(false);
        notification.error({
          message: "Error verifying otp, please try again",
        });
      }
    });
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
              <OtpInput otp={otp} setOtp={setOtp} />
              <button
                disabled={otp.some((digit) => digit === "")}
                onClick={onFinish}
                className={`${
                  otp.some((digit) => digit === "")
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#4FD6FA] hover:bg-[#6633FF]"
                } bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[20px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium`}
              >
                {confirmLoading ? "Please wait..." : "Continue"}
                {confirmLoading ? <Spinner size="sm" /> : ""}
              </button>

              <div className="min-h-[20px]">
                {error && (
                  <p className="text-red-500 text-sm pt-[5px]">{error}</p>
                )}
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

              <OtpInput otp={otp} setOtp={setOtp} />
            </div>

            <button
              disabled={otp.some((digit) => digit === "")}
              onClick={onFinish}
              className={`${
                otp.some((digit) => digit === "")
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#4FD6FA] hover:bg-[#6633FF]"
              } bg-[#4FD6FA] rounded-[60px] w-full mb-[10px] mt-[20px] px-[10px] py-[12px] text-[18px] text-white font-medium`}
            >
              {confirmLoading ? "Please wait..." : "Continue"}
              {confirmLoading ? <Spinner size="sm" /> : ""}
            </button>
            <div className="min-h-[20px]">
              {error && (
                <p className="text-red-500 text-sm pt-[5px]">{error}</p>
              )}
            </div>
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

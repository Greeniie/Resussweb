import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import forgot1 from "../../assets/images/forgot1.png";
import forgot2 from "../../assets/images/forgot2.png";
import { useDispatch } from "react-redux";
import { verifyOTP } from "../../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { Spinner } from "react-bootstrap";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import OtpInput from "../OtpInput";

const Fp3 = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ otp: "" });
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

      // Update formData when otp changes
      useEffect(() => {
        setFormData({ otp: otp.join("") });
      }, [otp]);


  const onFinish = (e) => {
    e.preventDefault();
    setConfirmLoading(true);

    dispatch(verifyOTP(formData)).then((response) => {
      if (response.type === "auth/verifyOTP/fulfilled") {
        notification.success({ message: "OTP verified successfully" });
        setConfirmLoading(false);
        navigate("/reset-password", { state: { formData } });
      } else if (response.type === "auth/verifyOTP/rejected") {
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

          <OtpInput otp={otp} setOtp={setOtp}/>

          <div className="min-h-[20px]">
            {error && <p className="text-red-500 text-sm pt-[5px]">{error}</p>}
          </div>

          <button
            disabled={otp.some((digit) => digit === "")}
            onClick={onFinish}
            className={`${
              otp.some((digit) => digit === "")
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#4FD6FA] hover:bg-[#6633FF]"
            } rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full my-[40px] px-[10px] py-[12px] text-[16px] text-white font-medium`}
          >
            {confirmLoading ? "Verifying" : "Continue"}
            {confirmLoading ? <Spinner size="sm" /> : ""}
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
              <div className="text-[#4fd6fa] text-[25px] font-semibold leading-[36px] ">
                Verify
              </div>
              <div className="text-[#898A8D] text-[14px] pt-[10px]">
                Enter OTP code sent to your email address
              </div>
            </div>
            <OtpInput otp={otp} setOtp={setOtp}/>
            <div className="min-h-[20px]">
              {error && (
                <p className="text-red-500 text-sm pt-[5px]">{error}</p>
              )}
            </div>

            <button
              disabled={otp.some((digit) => digit === "")}
              onClick={onFinish}
              className={`${
                otp.some((digit) => digit === "")
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#4FD6FA] hover:bg-[#6633FF]"
              } rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full my-[40px] px-[10px] py-[12px] text-[16px] text-white font-medium`}
            >
              {confirmLoading ? "Verifying" : "Continue"}
              {confirmLoading ? <Spinner size="sm" /> : ""}
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
  );
};

export default Fp3;

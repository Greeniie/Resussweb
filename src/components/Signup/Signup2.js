import React, { useState, useRef } from "react";
import signup2 from "../../assets/images/signup2.png";
import { MailOutlined } from "@ant-design/icons";
import NavBar from "../NavBar";
import { useDispatch } from "react-redux";
import { sendSignupOTP } from "../../redux/authSlice";
import { notification } from "antd";
import { Spinner } from "react-bootstrap";

const Signup2 = ({ nextStep }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const resendOTP = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const values = { email: email };
    setLoading(true);
    dispatch(sendSignupOTP(values)).then((response) => {
      if (response.type === "auth/sendSignupOTP/fulfilled") {
        notification.success({
          message: "We have sent another OTP to your email",
        });
        setLoading(false);
      } else {
        notification.error({
          message: "Error sending OTP, Please try again later",
        });
        setLoading(false);
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
          className="absolute left-[40px] top-[120px]"
        >
          <img
            src={signup2}
            className="w-auto w-auto h-[550px] object-center object-cover"
            alt="signup1"
          />
        </div> */}

          <div className="w-[90%]">
            <div className="font-bold text-[45px] text-[#461378] pt-[60px] leading-tight w-full">
              You're one step <br />
              closer to that next project
            </div>
            <div className="text-[20px] text-[#461378] pt-[20px]">
              Discover the new talent, projects and collorate with talent across
              Africa
            </div>
          </div>

          <div>
            <div className="form z-50 bg-white min-h-[400px] w-[80%] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px]  mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
              <div className="flex items-center gap-[10px] text-[#4fd6fa] text-[27px] font-semibold pb-[10px]">
                <MailOutlined /> <span>Check your email</span>
              </div>

              <div className="text-[#898A8D] text-[14px] md:text-[15px] md:text-[16px]">
                We have sent account creation instructions to your email.
              </div>

              <button
                onClick={nextStep}
                className="bg-[#4FD6FA] rounded-[50px] mb-[20px] md:rounded-[55px] md:rounded-[60px] w-full mt-[30px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
              >
                Continue
              </button>
              <div className="text-[#B8B8B8] text-[14px] md:text-[15px] md:text-[16px]">
                Didn't receive an email?{" "}
                <span>
                  <button
                    onClick={resendOTP}
                    className="no-underline text-[#6633FF] font-semibold"
                  >
                    Click to resend {loading ? <Spinner size="sm" /> : ""}
                  </button>
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
        <div className="absolute top-[0px] right-[-200px] overflow-hidden w-full">
          <img
            src={signup2}
            className="w-auto h-[400px] object-cover object-right max-w-none transform scale-x-[-1]"
            alt="login2"
          />
        </div>

        <div className="relative min-h-screen ">
          <div className="absolute top-[200px] left-0 w-full min-h-[calc(100%-200px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[30px]">
              <div className="flex items-center gap-[10px] text-[#4fd6fa] text-[25px] font-semibold pb-[10px]">
                <MailOutlined /> <span>Check your email</span>
              </div>
              <div className="text-[#898A8D] text-[14px] pt-[10px]">
                We have sent account creation instructions to your email.
              </div>
            </div>

            <button
              onClick={nextStep}
              className="bg-[#4FD6FA] rounded-[60px] w-full mb-[10px] mt-[20px] px-[10px] py-[12px] text-[18px] text-white font-medium"
            >
              Continue
            </button>
            <div className="text-[#B8B8B8] text-[14px] md:text-[15px] md:text-[16px]">
              Didn't receive an email?{" "}
              <span>
                <button
                  onClick={resendOTP}
                  className="no-underline text-[#6633FF] font-semibold"
                >
                  Click to resend {loading ? <Spinner size="sm" /> : ""}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup2;

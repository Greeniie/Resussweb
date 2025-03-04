import React, { useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import signup1 from "../../assets/images/signup1.png";
import signup2 from "../../assets/images/signup2.png";
import signup3 from "../../assets/images/signup3.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  ArrowLeftOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Signup = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);

  const [phone, setPhone] = useState("");
  const inputRefs = useRef([]);

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
    <div className="relative min-h-screen overflow-hidden login-bg hidden md:block px-[80px] pt-[60px]">
      <div>
        <NavBar />
      </div>
      {/* <div className="hidden md:grid md:grid-cols-2 mt-[50px] px-[50px] pl-[350px] gap-[30px]">
        <div
          style={{ zIndex: "-1" }}
          className="absolute left-[40px] top-[120px]"
        >
          <img
            src={signup1}
            className="w-auto w-auto h-[550px] object-center object-cover"
            alt="signup1"
          />
        </div>

        <div className="font-bold text-[54px] text-[#461378] pt-[60px] leading-tight w-[483px]">
          Find your next <br />
          job and elevate your career
        </div>
        <div>
          <div className="form z-50 bg-white min-h-[480px] w-full rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] border border-[#abb0ba] mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
            <div className="text-[#4fd6fa] text-[27px] font-semibold pb-[50px]">
              Get started with Resuss
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

              <button className="bg-[#4FD6FA] rounded-[50px] mb-[20px] rounded-[60px] w-full mt-[20px] py-[12px] px-[10px] text-[16px] text-white font-medium">
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
      </div> */}
      {/* <div className="hidden md:grid md:grid-cols-2 mt-[50px] px-[50px] pl-[350px] gap-[30px]">
        <div
          style={{ zIndex: "-1" }}
          className="absolute left-[40px] top-[120px]"
        >
          <img
            src={signup2}
            className="w-auto w-auto h-[550px] object-center object-cover"
            alt="signup1"
          />
        </div>
        <div className="font-bold text-[54px] text-[#461378] pt-[60px] leading-tight w-[463px]">
          You're one step <br />
          closer to that next project
        </div>
        <div>
          <div className="form z-50 bg-white min-h-[480px] w-full rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] border border-[#abb0ba] mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
            <div className="flex items-center gap-[10px] text-[#4fd6fa] text-[27px] font-semibold pb-[10px]">
              <MailOutlined /> <span>Check your email</span>
            </div>

            <div className="text-[#898A8D] text-[14px] md:text-[15px] md:text-[16px]">
              We have sent password recovery instructions to your email.
            </div>

            <button className="bg-[#4FD6FA] rounded-[50px] mb-[20px] md:rounded-[55px] md:rounded-[60px] w-full mt-[60px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium">
              Continue
            </button>
            <div className="text-[#B8B8B8] text-[14px] md:text-[15px] md:text-[16px]">
              Didn't receive an email?{" "}
              <span>
                <button className="no-underline text-[#6633FF] font-semibold">
                  Click to resend
                </button>
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="hidden md:grid md:grid-cols-2 mt-[50px] px-[50px] gap-[30px] ml-[280px]">
       <div
          style={{ zIndex: "-1" }}
          className="absolute left-[80px] top-[200px]"
        >
          <img
            src={signup3}
            className="w-auto h-[430px] object-center object-cover"
            alt="signup3"
          />
        </div>
      <div className="font-bold text-[54px] text-[#461378] pt-[60px] leading-tight w-[483px]">
        Join other <br />
        creatives and talents
      </div>
      <div>
          <div className="form z-50 bg-white min-h-[480px] w-full rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] border border-[#abb0ba] mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
          <div className="text-[#4fd6fa] text-[27px] font-semibold pb-[10px]">
            Verify
          </div>
          <div className="text-[#898A8D] text-[14px] pb-[20px] md:text-[15px] md:text-[16px]">
            Enter OTP code sent to your email address
          </div>
          <div className="flex justify-start gap-3 my-6">
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
          <button className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[20px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium">
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
    </div> */}
      <div className="hidden md:grid md:grid-cols-2 mt-[50px] pl-[100px]">
        <div className="w-[90%]">
          <div className="font-bold text-[54px] text-[#461378] pt-[60px] leading-tight w-full">
            Join other creatives <br /> and talents
          </div>
          <div className="text-[20px] text-[#461378] pt-[20px]">
            Discover the new talent, projects and collorate with talent across
            Africa
          </div>
        </div>
        <div>
          <div className="form z-50 bg-white min-h-[480px] w-[80%] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] border border-[#abb0ba] mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
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

              <button className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[20px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium">
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
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

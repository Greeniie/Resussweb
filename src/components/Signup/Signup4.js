import React, { useState, useEffect } from "react";
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
import { Spinner } from "react-bootstrap";

const Signup4 = ({ nextStep, prevStep, formData, handleInputChange }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (
      formData.password_confirmation &&
      formData.password !== formData.password_confirmation
    ) {
      setErrors((prev) => ({
        ...prev,
        password_confirmation: "Passwords do not match",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        password_confirmation: "",
      }));
    }
  }, [formData.password, formData.password_confirmation]);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.phone_number)
      newErrors.phone_number = "Phone number is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.password_confirmation) {
      newErrors.password_confirmation = "Confirm password is required";
    } else if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = "Passwords do not match";
    }
    if (!agree) newErrors.agree = "You must agree to the terms";

    return newErrors;
  };


  useEffect(() => {
    if (formData.referral === undefined || formData.referral === null) {
      handleInputChange({
        target: {
          name: "referral",
          value: "",
        },
      });
    }
  }, []);

  const handlePhoneChange = (phone_number) => {
    handleInputChange({
      target: { name: "phone_number", value: phone_number },
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    } else {
      setErrors(validationErrors);
    }
  };

  const renderError = (field) => {
    return (
      errors[field] && (
        <div className="text-red-600 text-sm mt-1">{errors[field]}</div>
      )
    );
  };

  const renderForm = () => (
    <Form onSubmit={handleContinue}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="first_name"
          value={formData.first_name || ""}
          onChange={handleInputChange}
          placeholder="Enter first name"
          className="border-[#abb0ba] p-2 custom-placeholder"
        />
        {renderError("first_name")}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="last_name"
          value={formData.last_name || ""}
          onChange={handleInputChange}
          placeholder="Enter last name"
          className="border-[#abb0ba] p-2 custom-placeholder"
        />
        {renderError("last_name")}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <PhoneInput
          country={"ng"}
          value={formData.phone_number || ""}
          onChange={handlePhoneChange}
          inputClass="border-[#abb0ba] custom-placeholder"
          buttonClass="border-[#abb0ba]"
        />
        {renderError("phone_number")}
      </Form.Group>

      <Form.Group className="mb-3 relative">
        <Form.Label>Password</Form.Label>
        <div className="relative">
          <Form.Control
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password || ""}
            onChange={handleInputChange}
            placeholder="Password"
            className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#abb0ba] cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </div>
        </div>
        <small className="text-gray-500">
          Password must be at least 8 characters
        </small>
        {renderError("password")}
      </Form.Group>

      <Form.Group className="mb-3 relative">
        <Form.Label>Confirm Password</Form.Label>
        <div className="relative">
          <Form.Control
            type={confirmPasswordVisible ? "text" : "password"}
            name="password_confirmation"
            value={formData.password_confirmation || ""}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#abb0ba] cursor-pointer"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            {confirmPasswordVisible ? (
              <EyeInvisibleOutlined />
            ) : (
              <EyeOutlined />
            )}
          </div>
        </div>
        {renderError("password_confirmation")}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Referral (optional)</Form.Label>
        <Form.Control
          type="text"
          name="referral"
          value={formData.referral || ""}
          onChange={handleInputChange}
          placeholder="Enter referral code"
          className="border-[#abb0ba] p-2 custom-placeholder"
        />
      </Form.Group>

      <Form.Group className="flex items-start gap-2 pb-[20px]">
        <input
          type="checkbox"
          id="terms"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked);
            if (errors.agree) {
              setErrors((prev) => ({ ...prev, agree: "" }));
            }
          }}
          className="w-5 h-5 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="text-gray-600 text-sm leading-5">
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
      {renderError("agree")}

      <button
        type="submit"
        disabled={
          !formData.first_name ||
          !formData.last_name ||
          !formData.phone_number ||
          !formData.password ||
          !formData.password_confirmation ||
          formData.password !== formData.password_confirmation ||
          !agree
        }
        className={`${
          !formData.first_name ||
          !formData.last_name ||
          !formData.phone_number ||
          !formData.password ||
          !formData.password_confirmation ||
          formData.password !== formData.password_confirmation ||
          !agree
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#4FD6FA] hover:bg-[#6633FF]"
        } rounded-[50px] mb-[20px] w-full mt-[20px] py-[12px] px-[10px] text-[16px] text-white font-medium`}
      >
        {confirmLoading ? "Please wait..." : "Continue"}
        {confirmLoading ? <Spinner size="sm" /> : ""}
      </button>

      <div
        onClick={prevStep}
        className="cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px]"
      >
        <ArrowLeftOutlined />
        <div className="text-[#330066] text-[12px]">Go back</div>
      </div>
    </Form>
  );

  return (
    <div>
      {/* Desktop View */}
      <div className="relative min-h-screen overflow-y-auto login-bg hidden md:block">
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
            <div className="form z-50 bg-white min-h-[480px] w-[80%] rounded-[30px] mb-[30px] md:rounded-[35px] md:rounded-[40px] mx-auto px-[30px] md:px-[50px] py-[30px] md:py-[35px]">
              <div className="flex items-center gap-[10px] text-[#4fd6fa] text-[24px] md:text-[27px] font-semibold pb-[10px]">
                Complete profile
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px] md:text-[16px]">
                Set up your Resuss account with your details and occupation
              </div>
              {renderForm()}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden min-h-screen overflow-scroll relative login-bg">
        <div className="px-[20px] pt-[20px]">
          <NavBar />
        </div>
        <div className="relative min-h-screen">
          <div className="absolute top-[20px] left-0 w-full min-h-[calc(100%-20px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[30px]">
              <div className="text-[#4fd6fa] text-[25px] font-semibold">
                Complete Profile
              </div>
              <div className="text-[#898A8D] text-[14px]">
                Set up your Resuss account with your details and occupation
              </div>
            </div>
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup4;

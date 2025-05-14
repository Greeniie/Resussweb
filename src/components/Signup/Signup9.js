import React, { useState, useEffect } from "react";
import pro6 from "../../assets/images/pro6.png";
import finish from "../../assets/images/finish.png";

import {
  ArrowLeftOutlined,
  CloseCircleFilled,
  EditFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import Modal from "react-bootstrap/Modal";
import NavBar from "../NavBar";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/authSlice";
import { notification } from "antd";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup9 = ({ nextStep, prevStep, formData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const onFinish = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // 1. Get email from localStorage (or set to empty string)
    const email = localStorage.getItem("email") || "";
  
    // 2. Prepare additional fields
    const additionalData = {
      email: email,
      user_type: "user",
      star_rating_count: "",
      profile_video_url: "",
      dob: "",
      gender: "",
      years_active: "",
    };
  
    // 3. Merge formData with additional data
    const finalFormData = {
      ...formData,
      ...additionalData,
    };
  
    // 4. Dispatch the merged form data
    dispatch(signup(finalFormData)).then((response) => {
      if (response.type === "auth/signup/fulfilled") {
        notification.success({
          message: "Account created successfully",
        });
        setLoading(false);
        navigate("/home");
      } else {
        notification.error({
          message: response?.payload?.message,
        });
        setLoading(false);
        setError({ error: true, message: response?.payload?.message });
      }
    });
  };
  

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>
        <div className="hidden md:grid md:grid-cols-2 mt-[50px] pl-[100px]">
          <div className="w-[90%]">
            <div className="font-bold text-[45px] text-[#461378] pt-[60px] leading-tight w-full">
              Confirm your Profile
            </div>
            <div className="text-[20px] text-[#461378] pt-[20px]">
              Discover the new talent, projects and collorate with talent across
              Africa
            </div>
            <button
              onClick={handleShow}
              className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-[80%] mt-[50px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
            >
              Finish
            </button>
          </div>
          <div className="form z-50 bg-white min-h-[480px] w-[80%] mb-[30px] rounded-[40px]  mx-auto px-[60px] py-[35px]">
            <div>
              <div className="relative h-[300px] w-[300px] flex justify-center items-center">
                <img
                  src={formData.profile_photo_name || pro6}
                  className="object-cover object-center h-[300px] w-auto"
                  alt="profile"
                />
              </div>

              <div>
                <div className="text-[#545454] text-[27px] pt-[20px] font-bold">
                  {formData.first_name} {formData.last_name}
                </div>
                <div className="text-[#898A8D] text-[16px]">
                  {formData.phone_number}
                </div>
                <div className="pt-[10px]">
                  <EnvironmentFilled
                    style={{
                      fontSize: "20px",
                      color: "#6633FF",
                      paddingRight: "10px",
                    }}
                  />
                  <span className="text-[20px] text-[#70E1FF] uppercase font-bold">
                    {formData.coverage_location}
                  </span>
                </div>
                <div className="font-semibold text-[14px] pt-[15px]">
                  {formData.bio}
                </div>
              </div>

              <div className="mt-[40px]">
                <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
                  Your selected roles
                </h2>
                <div className="flex flex-col gap-[10px]">
                  {formData?.roles.length > 0 ? (
                    formData?.roles.map((role, index) => (
                      <div
                        key={index}
                        className={`flex justify-between px-[15px] py-[10px] rounded-[50px] ${
                          index === 0
                            ? "bg-[#461378] text-white"
                            : "bg-[#F6E9FF] text-[#330066]"
                        }`}
                      >
                        <span>{role}</span>
                        <span className="cursor-pointer"></span>
                      </div>
                    ))
                  ) : (
                    <p className="text-[#461378]">No roles selected</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-[40px]">
              <div
                onClick={prevStep}
                className=" cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px] md:text-[15px] md:text-[16px]"
              >
                <ArrowLeftOutlined />
                <span>
                  <div className="text-[#330066] text-[12px]">Go back</div>
                </span>
              </div>
            </div>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            centered
            className="relative modalb"
          >
            <Modal.Body className="relative mx-auto ">
              <div className="px-[50px] text-center bg-white">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[-40px] bg-[#70E1FF] rounded-full h-[90px] w-[90px] flex justify-center items-center">
                  <img
                    src={finish}
                    className="object-cover object-center h-[50px] w-auto"
                    alt="profile"
                  />
                </div>

                <div className="mt-[50px]">
                  <div className="text-[#4FD6FA] text-[30px] font-bold">
                    Great Job!
                  </div>

                  <div className="text-[#898A8D] text-[12px] pt-[10px]">
                    You've completed your profile, you can now apply for jobs
                    and create projects
                  </div>
                </div>

                <button
                  onClick={onFinish}
                  className="bg-[#4FD6FA] rounded-[50px] w-full mt-[30px] p-[10px] text-[16px] text-white font-medium"
                >
                  {loading ? "Please wait..." : "Start Resuss"}
                  {loading ? <Spinner size="sm" /> : ""}
                </button>
                <button className="bg-[#DADADA] rounded-[50px] w-full mt-[15px] p-[10px] text-[16px] text-white font-medium">
                  Setup Filmography
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className="block md:hidden min-h-screen overflow-scroll relative login-bg">
        <div className="px-[20px] pt-[20px]">
          <NavBar />
        </div>
        <div className="relative min-h-screen ">
          <div className="absolute top-[20px] left-0 w-full min-h-[calc(100%-20px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[30px]">
              <div className="text-[#4fd6fa] text-[25px] font-semibold leading-snug">
                Confirm your profile
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px]">
                Discover the new talent, projects and collorate with talent
                across Africa
              </div>
              <div className="relative h-[300px] w-[300px] flex justify-center items-center">
                <img
                  src={formData.profile_photo_name || pro6}
                  className="object-cover object-center h-[300px] w-auto"
                  alt="profile"
                />
              </div>

              <div>
                <div className="text-[#545454] text-[27px] font-bold pt-[30px]">
                  {formData.first_name} {formData.last_name}
                </div>
                <div className="text-[#898A8D] text-[16px]">
                  {formData.phone_number}
                </div>
                <div className="pt-[10px]">
                  <EnvironmentFilled
                    style={{
                      fontSize: "20px",
                      color: "#6633FF",
                      paddingRight: "10px",
                    }}
                  />
                  <span className="text-[20px] text-[#70E1FF] uppercase font-bold">
                    {formData.coverage_location}
                  </span>
                </div>
                <div className="font-semibold text-[14px]">{formData.bio}</div>
              </div>

              <div className="mt-[40px]">
                <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
                  Your selected roles
                </h2>
                <div className="flex flex-col gap-[10px]">
                  {formData?.roles.length > 0 ? (
                    formData?.roles.map((role, index) => (
                      <div
                        key={index}
                        className={`flex justify-between px-[15px] py-[10px] rounded-[50px] ${
                          index === 0
                            ? "bg-[#461378] text-white"
                            : "bg-[#F6E9FF] text-[#330066]"
                        }`}
                      >
                        <span>{role}</span>
                        <span className="cursor-pointer"></span>
                      </div>
                    ))
                  ) : (
                    <p className="text-[#461378]">No roles selected</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div
                  onClick={prevStep}
                  className=" cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px] text-[16px]"
                >
                  <ArrowLeftOutlined />
                  <span>
                    <div className="text-[#330066] text-[12px]">Go back</div>
                  </span>
                </div>
                <button
                  onClick={handleShow}
                  className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-[50%] mt-[30px] p-[10px] text-[16px] text-white font-medium"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup9;

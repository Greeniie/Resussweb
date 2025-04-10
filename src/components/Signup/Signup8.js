import React, { useState, useEffect } from "react";
import pro7 from "../../assets/images/pro7.png";
import thumb from "../../assets/images/thumb.png";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import {
  ArrowLeftOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";
import NavBar from "../NavBar";

const Signup8 = ({ nextStep, prevStep, formData, handleInputChange }) => {
  const info = ["tunde34@gmail.com", "080372233001", "dupefalnaX@flipzone.co"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleContinue = () => {
    handleClose();
    nextStep();
  };

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>
        <div className="hidden md:grid md:grid-cols-3 my-[50px] gap-[30px] px-[60px]">
          <div className="z-50 col-span-2 bg-white w-full min-h-[400px] rounded-[30px] mx-auto px-[50px] py-[60px]">
            <div className="grid grid-cols-2 gap-[30px]">
              <div>
                <div className="relative h-[300px] w-[300px] flex justify-center items-center">
                  <img
                    src={pro7}
                    className="object-cover object-center h-[300px] w-auto"
                    alt="profile"
                  />
                  
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
                        <span className="cursor-pointer">
                        
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-[#461378]">No roles selected</p>
                  )}
                </div>
                </div>
              </div>
              <div>
                <div className="text-[#545454] text-[27px] font-bold">
                  Abiola Sobo
                </div>
                <div className="text-[#898A8D] text-[16px]">08037227490</div>
                <div className="pt-[10px]">
                  <EnvironmentFilled
                    style={{
                      fontSize: "20px",
                      color: "#6633FF",
                      paddingRight: "10px",
                    }}
                  />
                  <span className="text-[20px] text-[#70E1FF] uppercase font-bold">
                    BENIN
                  </span>
                </div>
                <div className="font-semibold text-[14px]">
                  Janet is very excited to be a part of Hamlet at Round Moon
                  Theatre. She recently worked with Round Moon on MacBeth as
                  Witch 1, and at Variety Theatre in Dead Man Walking as Helen's
                  Mother. Janet studied Theatre Performance at Northwestern
                  University, where she received a BFA. For fun, Janet
                  volunteers with the local YMCA as a drama teacher. Her
                  writings on working in the theatre can be found at
                  JanetUnlocked.com. She wants to thank her partner Jeff, and
                  their dog Jet for always supporting her passions.
                </div>
              </div>
            </div>
          </div>

          <div className="form z-50 bg-white min-h-[480px] mb-[30px] rounded-[40px]  mx-auto px-[40px] py-[50px]">
            <div className="text-[#4fd6fa] text-[27px] font-semibold">
              Invite Talent
            </div>
            <div className="text-[#898A8D] text-[16px] pt-[10px] pb-[20px]">
              Invite friends and talents you've worked with and build your
              community. You can add up to 3 friends/talents.
            </div>

            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="emailOrPhone1"
                  placeholder="Email address or Phone Number"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="emailOrPhone2"
                  placeholder="Email address or Phone Number"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="emailOrPhone3"
                  placeholder="Email address or Phone Number"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                />
              </Form.Group>
            </Form>
            <button
              onClick={handleShow}
              className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[30px] md:p-[10px] text-[16px] text-white font-medium"
            >
              Invite
            </button>

            <div className="flex items-center justify-between">
              <div
                onClick={prevStep}
                className=" cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px] text-[16px]"
              >
                <ArrowLeftOutlined />
                <span>
                  <div className="text-[#330066] text-[12px]">Go back</div>
                </span>
              </div>{" "}
            </div>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            centered
            className="relative modal"
          >
            <Modal.Body className="relative mx-auto ">
              <div className="px-[50px] text-center bg-white">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[-40px] bg-[#70E1FF] rounded-full h-[90px] w-[90px] flex justify-center items-center">
                  <img
                    src={thumb}
                    className="object-cover object-center h-[50px] w-auto"
                    alt="profile"
                  />
                </div>

                <div className="mt-[50px]">
                  <div className="text-[#4FD6FA] text-[30px] font-bold">
                    Nice!!!
                  </div>
                  <div>
                    {info.map((data, i) => (
                      <div
                        className="text-[#545454] font-semibold text-[16px] py-[10px]"
                        key={i}
                      >
                        {data}
                      </div>
                    ))}
                  </div>
                  <div className="text-[#898A8D] text-[12px] pt-[10px]">
                    Will be notified that you invited them to be part of your
                    community
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleContinue}
                  className="bg-[#4FD6FA] rounded-[50px] w-full mt-[30px] p-[10px] text-[16px] text-white font-medium"
                >
                  Continue
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
                Review
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px]">
                You can review your information
              </div>
              <div className="relative h-[300px] w-[300px] flex justify-center items-center">
                <img
                  src={pro7}
                  className="object-cover object-center h-[300px] w-auto"
                  alt="profile"
                />
                
              </div>

              <div>
                <div className="text-[#545454] text-[27px] font-bold pt-[30px]">
                  Abiola Sobo
                </div>
                <div className="text-[#898A8D] text-[16px]">08037227490</div>
                <div className="pt-[10px]">
                  <EnvironmentFilled
                    style={{
                      fontSize: "20px",
                      color: "#6633FF",
                      paddingRight: "10px",
                    }}
                  />
                  <span className="text-[20px] text-[#70E1FF] uppercase font-bold">
                    BENIN
                  </span>
                </div>
                <div className="font-semibold text-[14px]">
                  Janet is very excited to be a part of Hamlet at Round Moon
                  Theatre. She recently worked with Round Moon on MacBeth as
                  Witch 1, and at Variety Theatre in Dead Man Walking as Helen's
                  Mother. Janet studied Theatre Performance at Northwestern
                  University, where she received a BFA. For fun, Janet
                  volunteers with the local YMCA as a drama teacher. Her
                  writings on working in the theatre can be found at
                  JanetUnlocked.com. She wants to thank her partner Jeff, and
                  their dog Jet for always supporting her passions.
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
                        <span className="cursor-pointer">
                        
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-[#461378]">No roles selected</p>
                  )}
                </div>
              </div>
              <div className="text-[#4fd6fa] text-[27px] font-semibold pt-[50px]">
                Invite Talent
              </div>
              <div className="text-[#898A8D] text-[16px] pt-[10px] pb-[20px]">
                Invite friends and talents you've worked with and build your
                community. You can add up to 3 friends/talents.
              </div>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="emailOrPhone1"
                    placeholder="Email address or Phone Number"
                    className="border-[#abb0ba] p-2 custom-placeholder"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="emailOrPhone2"
                    placeholder="Email address or Phone Number"
                    className="border-[#abb0ba] p-2 custom-placeholder"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="emailOrPhone3"
                    placeholder="Email address or Phone Number"
                    className="border-[#abb0ba] p-2 custom-placeholder"
                  />
                </Form.Group>
              </Form>
              <button
                onClick={handleShow}
                className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[30px] p-[10px] text-[16px] text-white font-medium"
              >
                Invite
              </button>

              <div className="flex items-center justify-between">
                <div
                  onClick={prevStep}
                  className=" cursor-pointer flex items-center gap-[10px] text-[#330066] text-[12px] text-[16px]"
                >
                  <ArrowLeftOutlined />
                  <span>
                    <div className="text-[#330066] text-[12px]">Go back</div>
                  </span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup8;

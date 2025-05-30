import React, { useState, useEffect } from "react";
import signup6 from "../../assets/images/signup6.png";
import pro6 from "../../assets/images/pro6.png";
import { Spinner } from "react-bootstrap";
import { ArrowLeftOutlined, EditFilled } from "@ant-design/icons";
import NavBar from "../NavBar";
import axios from "axios";
import { notification } from "antd";

const Signup6 = ({ nextStep, prevStep, formData, handleInputChange }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const onChangeImage = async (e) => {
    const image = e.target.files[0];
    setImageLoading(true);

    const imageformData = new FormData();
    imageformData.append("file", image);
    imageformData.append("upload_preset", "resuss_dev");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dcn2e7gon/image/upload",
        imageformData
      );

      const imageUrl = response.data.secure_url;
      setImage(imageUrl);
      handleInputChange("profile_photo_name", imageUrl); // Store the URL, not the file
    } catch (error) {
      console.error("Error uploading image: ", error);
      notification.error({
        message: "Upload Failed",
        description:
          "There was an error uploading your image. Please try again.",
        placement: "topRight",
      });
    } finally {
      setImageLoading(false);
    }
  };


  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>
        <div className="hidden md:grid md:grid-cols-2 mt-[50px] pl-[100px]">
          <div className="w-[90%]">
            <div>
              <img
                src={signup6}
                className="w-auto h-[306px] object-center object-cover"
                alt="signup6"
              />
            </div>
            <div className="font-bold text-[45px] text-[#461378] pt-[60px] leading-tight w-full">
              Join other creatives <br /> and talents
            </div>
            <div className="text-[20px] text-[#461378] pt-[20px]">
              Discover the new talent, projects and collorate with talent across
              Africa
            </div>
          </div>
          <div className="form z-50 bg-white min-h-[480px] w-[80%] mb-[30px] rounded-[40px]  mx-auto px-[40px] py-[35px]">
            <div className="flex items-center gap-[10px] text-[#4fd6fa] text-[27px] pb-[20px] font-semibold">
              Select your Profile picture
            </div>
            <div className="text-[#898A8D] text-[16px] pb-[40px]">
              Add your headshot. <br />
              We recommend you use a clear picture
            </div>
            <div className="relative bg-[#D2CAE9] h-[150px] w-[150px] flex justify-center items-center">
              {imageLoading ? (
                <Spinner
                  animation="border"
                  variant="primary"
                  className="absolute"
                />
              ) : (
                <img
                  src={image || pro6}
                  className="object-cover object-center h-[120px] w-auto"
                  alt="profile"
                />
              )}

              {/* File Upload Button */}
              <label className="absolute bottom-[-20px] bg-[#330066] w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                <EditFilled className="text-white text-lg" />
                <input
                  type="file"
                  className="hidden"
                  onChange={onChangeImage}
                />
              </label>
            </div>

            <div>
              <div className="text-[#545454] text-[27px] pt-[50px]">
              {formData.first_name} {formData.last_name}
              </div>
              <div className="text-[#898A8D] text-[16px]">{formData.phone_number}</div>
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

              <button
                onClick={nextStep}
                className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[50px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
              >
                Continue
              </button>
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
        </div>
      </div>
      <div className="block md:hidden min-h-screen overflow-scroll relative login-bg">
        <div className="px-[20px] pt-[20px]">
          <NavBar />
        </div>
        <div className="relative min-h-screen ">
          <div className="absolute top-[20px] left-0 w-full min-h-[calc(100%-20px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[30px]">
              <div className="text-[#4fd6fa] text-[25px] font-semibold leading-snug pb-[20px]">
                Select your Profile picture
              </div>
              <div className="text-[#898A8D] text-[14px] pb-[20px]">
                Add your headshot. <br />
                We recommend you use a clear picture
              </div>

              <div className="relative bg-[#D2CAE9] h-[150px] w-[150px] flex justify-center items-center">
                <img
                  src={image || pro6}
                  className="object-cover object-center h-[120px] w-auto"
                  alt="profile"
                />
                {/* File Upload Button */}
                <label className="absolute bottom-[-20px] bg-[#330066] w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                  <EditFilled className="text-white text-lg" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={onChangeImage}
                  />
                </label>
              </div>

              <div>
                <div className="text-[#545454] text-[27px] pt-[50px]">
                {formData.first_name} {formData.last_name}
                </div>
                <div className="text-[#898A8D] text-[16px]">{formData.phone_number}</div>
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

                <button
                  onClick={nextStep}
                  className="bg-[#4FD6FA] rounded-[50px] mb-[40px] md:rounded-[55px] md:rounded-[60px] w-full mt-[50px] p-[8px] md:p-[10px] text-[15px] md:text-[16px] text-white font-medium"
                >
                  Continue
                </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup6;

import React from "react";
import {
  ArrowLeftOutlined,
  EnvironmentFilled,
  EditFilled,
  PlayCircleOutlined,
} from "@ant-design/icons";
import pic from "../assets/images/pic.png";
import placeholderimg from '../assets/images/profile.png'
import vid from "../assets/images/vid.png";
import clip from "../assets/testimgs/clip.png";
import testimg1 from "../assets/testimgs/p1.png";
import testimg2 from "../assets/testimgs/p2.png";
import verified from "../assets/menu-icons/verified.png";

const UserInfo = ({ user }) => {
  const allProjects = [
    {
      src: testimg1,
      title: "Batman and Superman: Battle for the Super Sons Kyptionite",
    },
    {
      src: testimg2,
      title: "Batman and Superman: Battle for the Super Sons Kyptionite",
    },
    {
      src: testimg1,
      title: "Batman and Superman: Battle for the Super Sons Kyptionite",
    },
    {
      src: testimg2,
      title: "Batman and Superman: Battle for the Super Sons Kyptionite",
    },
  ];

  return (
    <div className="block md:grid grid-cols-1 lg:grid-cols-3 my-[20px] gap-[30px]">
      <div className="z-50 col-span-2 bg-white w-full min-h-[400px] rounded-[30px] mx-auto px-[20px] md:px-[50px] py-[20px] md:py-[60px]">
        <div className="block md:grid md:grid-cols-2 gap-[30px]">
          <div>
            {user?.profile_photo_url ? (
              <div
                className="relative h-[300px] w-full bg-cover rounded-[25px]" // removed overflow-hidden
                style={{ backgroundImage: `url(${user?.profile_photo_url})` }}
              >
                <div>
                  <label className="absolute bottom-[-15px] md:bottom-[-20px] left-[50%] translate-x-[-50%] bg-[#330066] w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                    <EditFilled className="text-white text-[15px] md:text-[20px]" />
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            ) : (
              <div
                className="relative h-[300px] w-auto bg-contain bg-no-repeat" // removed overflow-hidden
                style={{ backgroundImage: `url(${placeholderimg})` }}
              >
                <div>
                  <label className="absolute bottom-[-15px] md:bottom-[-20px] left-[50%] translate-x-[-50%] bg-[#330066] w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                    <EditFilled className="text-white text-[15px] md:text-[20px]" />
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            )}

            <div className="mt-[40px] hidden md:block">
              <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
                Your selected roles
              </h2>
              <div className="flex flex-col gap-[10px]">
                {user?.services.length > 0 ? (
                  user?.services.map((role, index) => (
                    <div
                      key={index}
                      className={`flex justify-between px-[15px] py-[10px] rounded-[50px] ${
                        index === 0
                          ? "bg-[#461378] text-white"
                          : "bg-[#F6E9FF] text-[#330066]"
                      }`}
                    >
                      <span>{role.name}</span>
                      <span className="cursor-pointer"></span>
                    </div>
                  ))
                ) : (
                  <p className="text-[#461378]">No roles selected</p>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-[20px] text-[#70E1FF] font-bold py-[20px]">
                PERSONAL DATA
              </div>
              <div className="text-[14px] text-[#424242] flex flex-col gap-[15px]">
                <div>
                  <span className="font-semibold">Official site</span> Instagram
                </div>
                <div>
                  <span className="font-semibold">Alternative name</span> Jack
                  Grazer
                </div>
                <div>
                  <span className="font-semibold">Height</span> 5′ 9½″ (1.77 m)
                </div>
                <div>
                  <span className="font-semibold">Born</span> September 3, 2003,
                  Los Angeles, California, USA
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div className="text-[#545454] text-[27px] leading-[20px] capitalize font-bold pt-[30px] pb-[10px] md:pt-[10px] md:pb-0 flex items-center gap-[10px]">
              {user?.first_name} {user?.last_name}{" "}
              {user?.level === "verified" && (
                <div className="">
                  <img
                    src={verified}
                    alt="bookmark"
                    className="h-[20px] w-auto object-center object-cover"
                  />
                </div>
              )}
            </div>
            <div className="text-[#898A8D] text-[16px]">
              {user?.phone_number}
            </div>
            <div className="py-[10px]">
              <EnvironmentFilled
                className="text-[20px] pr-[10px]"
                style={{
                  color: "#6633FF",
                }}
              />
              <span className="text-[20px] text-[#70E1FF] uppercase font-bold">
                {user?.location || "No location added"}
              </span>
            </div>
            <div className="font-normal text-[14px] text-[#424242]">
              {user?.bio ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}
            </div>
            <button className="absolute top-[35px] md:top-[0] right-[0] md:right-[10px] bg-[#898A8D] h-[25px] md:h-[30px] w-[25px] md:w-[30px] rounded-full flex items-center justify-center">
              <EditFilled className="text-white text-[15px] md:text-[20px]" />
            </button>
          </div>
          <div className="mt-[40px] md:hidden block">
            <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
              Your selected roles
            </h2>
            <div className="flex flex-col gap-[10px]">
              {user?.services.length > 0 ? (
                user?.services.map((role, index) => (
                  <div
                    key={index}
                    className={`flex justify-between px-[15px] py-[10px] rounded-[50px] ${
                      index === 0
                        ? "bg-[#461378] text-white"
                        : "bg-[#F6E9FF] text-[#330066]"
                    }`}
                  >
                    <span>{role.name}</span>
                    <span className="cursor-pointer"></span>
                  </div>
                ))
              ) : (
                <p className="text-[#461378]">No roles selected</p>
              )}
            </div>
          </div>
          <div className="md:hidden block">
            <div className="text-[20px] text-[#70E1FF] font-bold py-[20px]">
              PERSONAL DATA
            </div>
            <div className="text-[14px] text-[#424242] flex flex-col gap-[15px]">
              <div>
                <span className="font-semibold">Official site</span> Instagram
              </div>
              <div>
                <span className="font-semibold">Alternative name</span> Jack
                Grazer
              </div>
              <div>
                <span className="font-semibold">Height</span> 5′ 9½″ (1.77 m)
              </div>
              <div>
                <span className="font-semibold">Born</span> September 3, 2003,
                Los Angeles, California, USA
              </div>
            </div>

            <div className="text-[20px] text-[#70E1FF] font-bold py-[20px]">
              PROJECTS
            </div>
            {allProjects?.map((project, i) => (
              <div className="flex items-center gap-[30px] pb-[10px]" key={i}>
                <div>
                  {" "}
                  <img
                    src={project.src}
                    alt={`slide-${i}`}
                    className="w-[136px] h-[100px] object-cover rounded-xl"
                  />
                </div>
                <div className="text-[14px] text-[#424242] font-semibold text-wrap">
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="form z-50 bg-white min-h-[400px] w-full mb-[30px] mt-[30px] md:mt-[0] rounded-[40px]  mx-auto px-[40px] py-[50px]">
          <div className="text-[20px] text-[#70E1FF] font-bold pb-[20px]">
            Galleries
          </div>
          <div>
            <div className="flex gap-[20px] items-center">
              <div className="relative flex flex-col justify-center items-center w-[150px] h-[150px] bg-[#F8F8F8] border-[#DEDEDE] rounded-[14px]">
                <img
                  src={pic}
                  alt="pics"
                  className="h-[35px] w-auto object-cover object-center"
                />
                <button className="absolute top-[10px] right-[10px] bg-[#898A8D] h-[25px] md:h-[30px] w-[25px] md:w-[30px] rounded-full flex items-center justify-center">
                  <EditFilled className="text-white text-[15px] md:text-[20px]" />
                </button>
                <div className="pt-[10px] font-medium text-[14px] text-[#898A8D]">
                  10 Photos
                </div>
              </div>
              <div className="relative flex flex-col justify-center items-center w-[150px] h-[150px] bg-[#F8F8F8] border-[#DEDEDE] rounded-[14px]">
                <img
                  src={vid}
                  alt="pics"
                  className="h-[35px] w-auto object-cover object-center"
                />
                <button className="absolute top-[10px] right-[10px] bg-[#898A8D] h-[25px] md:h-[30px] w-[25px] md:w-[30px] rounded-full flex items-center justify-center">
                  <EditFilled className="text-white text-[15px] md:text-[20px]" />
                </button>
                <div className="pt-[10px] font-medium text-[14px] text-[#898A8D]">
                  3 Videos
                </div>
              </div>
            </div>
            <div className="pt-[20px] relative">
              <img
                src={clip}
                alt=""
                className="w-full h-[150px] rounded-[14px] object-cover object-center"
              />
              <button className="absolute top-[30px] right-[10px] bg-[#898A8D] h-[25px] md:h-[30px] w-[25px] md:w-[30px] rounded-full flex items-center justify-center">
                <EditFilled className="text-white text-[15px] md:text-[20px]" />
              </button>
              <button className="absolute bottom-[30px] left-[10px] text-[14px] text-[#fff]">
                <PlayCircleOutlined
                  style={{ fontSize: "18px" }}
                  className="text-white text-[15px] md:text-[20px] pr-[5px]"
                />{" "}
                Play Clip
              </button>
            </div>
          </div>
        </div>
        <div className="form z-50 bg-white min-h-[400px]w-full rounded-[40px]  mx-auto px-[40px] py-[50px]">
          <div className="pb-[20px] flex justify-between items-center">
            <div className="text-[20px] text-[#70E1FF] font-bold ">
              Projects
            </div>
            <div className="flex items-center gap-[5px]">
              <span className="text-[12px] text-[#ABB0BA]">
                {allProjects.length} Projects
              </span>
              <button className="bg-[#898A8D] h-[25px] md:h-[30px] w-[25px] md:w-[30px] rounded-full flex items-center justify-center">
                <EditFilled className="text-white text-[15px] md:text-[20px]" />
              </button>
            </div>
          </div>
          {allProjects?.map((project, i) => (
            <div className="flex items-center gap-[30px] pb-[10px]" key={i}>
              <div>
                {" "}
                <img
                  src={project.src}
                  alt={`slide-${i}`}
                  className="w-[136px] h-[100px] object-cover rounded-xl"
                />
              </div>
              <div className="text-[14px] text-[#424242] font-semibold text-wrap">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

import React, { useState, useEffect } from "react";
import {
  EnvironmentFilled,
  ArrowRightOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import star from "../assets/images/star.png";
import pic from "../assets/images/pic.png";
import vid from "../assets/images/vid.png";
import clip from "../assets/testimgs/clip.png";

import share from "../assets/menu-icons/shareblack.png";
import bookmark from "../assets/menu-icons/bookmark.png";
import { Tooltip } from "antd";
import ProjectCarousel from "./ProjectCarousel";
import Modal from "react-bootstrap/Modal";
import ImageCarouselModal from "./ImageCarouselModal";
import VideoCarouselModal from "./VideoCarouselModal";

const SharedUserInfo = ({ user }) => {
  const [showPictures, setShowPictures] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const handleClosePictures = () => {
    setShowPictures(false);
  };
  const handleShowPictures = () => setShowPictures(true);

  const handleCloseVideos = () => {
    setShowVideos(false);
  };
  const handleShowVideos = () => setShowVideos(true);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-[50px] gap-[30px]">
      <div className="form z-50 bg-white min-h-[700px] w-full rounded-[40px]  mx-auto px-[40px] py-[30px]">
        <div className="flex items-center justify-between pb-[10px] border-b border-[#DEDEDE]">
          <div className="flex gap-[10px] items-center">
            <img
              src={star}
              alt="talentmgt"
              className="h-[20px] w-auto object-cover object-center"
            />
            <div className="text-[#4FD6FA] text-[20px]">Talent Profile</div>
          </div>

          <div>
            <button className="flex items-center justify-center ">
              <img
                src={share}
                alt="share"
                className="h-[11px] md:h-[15px] w-auto object-center object-cover"
              />
            </button>
          </div>
        </div>
        <div>
          <div className="text-[#545454] text-[27px] font-bold">
            {user?.first_name} {user?.last_name}
          </div>

          <div className="pb-[20px]">
            <EnvironmentFilled
              style={{
                fontSize: "14px",
                color: "#6633FF",
                paddingRight: "10px",
              }}
            />
            <span className="text-[14px] text-[#70E1FF] uppercase font-bold">
              {user?.location || "No location added"}
            </span>
          </div>
          <div
            className="relative h-[310px] w-full bg-cover rounded-[25px] overflow-hidden"
            style={{ backgroundImage: `url(${user?.profile_photo_url})` }}
          >
            <div className="absolute right-[20px] mt-[10px]">
              <Tooltip placement="left" title={"bookmark"}>
                <button className="flex items-center justify-center p-2 rounded-[7px]">
                  <img
                    src={bookmark}
                    alt="bookmark"
                    className="h-[11px] md:h-[20px] w-auto object-center object-cover"
                  />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="flex gap-[20px] items-center py-[20px]">
            <div className="font-semibold text-[#898A8D] text-[14px]">
              AWARDS 3 wins & 2 Nominations{" "}
            </div>
            <button>
              <ArrowRightOutlined style={{ fontSize: "14px" }} />
            </button>
          </div>
          <div className="flex gap-[20px] items-center ">
            <div className="font-semibold text-[#898A8D] text-[14px]">
              3 Recommendations
            </div>
            <button>
              <ArrowRightOutlined style={{ fontSize: "14px" }} />
            </button>
          </div>

          <div className="pt-[20px]">
            <div className="flex gap-[20px] items-center">
              <div
                onClick={handleShowPictures}
                className="cursor-pointer flex flex-col justify-center items-center w-[150px] h-[150px] bg-[#F8F8F8] border-[#DEDEDE] rounded-[14px]"
              >
                <img
                  src={pic}
                  alt="pics"
                  className="h-[35px] w-auto object-cover object-center"
                />
                <div className="pt-[10px] font-medium text-[14px] text-[#898A8D]">
                  10 Photos
                </div>
              </div>
              <div
                onClick={handleShowVideos}
                className="cursor-pointer flex flex-col justify-center items-center w-[150px] h-[150px] bg-[#F8F8F8] border-[#DEDEDE] rounded-[14px]"
              >
                <img
                  src={vid}
                  alt="pics"
                  className="h-[35px] w-auto object-cover object-center"
                />
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

              <button className="absolute bottom-[30px] left-[10px] text-[14px] text-[#fff]">
                <PlayCircleOutlined
                  style={{ fontSize: "18px" }}
                  className="text-white text-lg pr-[5px]"
                />{" "}
                Play Clip
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="z-50 col-span-2 bg-white w-full min-h-[700px] rounded-[30px] mx-auto px-[20px] md:px-[50px] py-[20px] md:py-[30px]">
        <div>
          <div>
            <div className=" hidden md:block">
              <div className="flex items-center gap-[10px] border-b border-[#DEDEDE] pb-[20px]">
                {user?.services.length > 0 ? (
                  user?.services.map((role, index) => (
                    <div
                      key={index}
                      className={`flex w-fit justify-between px-[15px] py-[10px] rounded-[50px] ${
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
              <div className="hidden md:block">
                <div className="text-[14px] text-[#70E1FF] font-bold py-[20px]">
                  ABOUT
                </div>
              </div>
              <div className="font-semibold text-[14px] pb-[20px]">
                {user?.bio ||
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
              </div>
            </div>

            <div className="hidden md:block border-t border-b border-[#DEDEDE]">
              <div className="text-[14px] text-[#70E1FF] font-bold py-[20px]">
                PROJECTS (3)
                <ProjectCarousel />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-[14px] text-[#70E1FF] font-bold py-[20px]">
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
                  <span className="font-semibold">Born</span> September 3, 2003
                  Los Angeles, California, USA
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden block">
            <div className="text-[14px] text-[#70E1FF] font-bold py-[20px]">
              PERSONAL DATA
            </div>
          </div>
        </div>
      </div>
      <ImageCarouselModal show={showPictures} onHide={handleClosePictures} user={user}/>
      <VideoCarouselModal show={showVideos} onHide={handleCloseVideos} user={user}/>

    </div>
  );
};

export default SharedUserInfo;

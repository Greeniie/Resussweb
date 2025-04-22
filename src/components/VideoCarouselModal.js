import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import vids from "../assets/images/vidscolored.png";

const videos = [
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
  },
  {
    src: "https://www.youtube.com/embed/ScMzIvxBSi4",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/mqdefault.jpg",
  },
  {
    src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/mqdefault.jpg",
  },
  {
    src: "https://www.youtube.com/embed/lTTajzrSkCw",
    thumbnail: "https://img.youtube.com/vi/lTTajzrSkCw/mqdefault.jpg",
  },
];

const VideoCarouselModal = ({ show, onHide, user }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="custom-modal"
      size="lg"
      contentClassName="!w-full !h-auto md:!max-w-[1000px] lg:!max-w-[1200px] xl:!max-w-[1400px] 2xl:!max-w-[1600px]"
    >
      <Modal.Body className="p-3 md:p-[30px] flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-[50px] pb-[20px] shrink-0 text-center md:text-left">
          <div className="flex gap-[10px] items-center justify-center md:justify-start">
            <img
              src={vids}
              alt="vids"
              className="h-[16px] w-auto object-cover object-center"
            />
            <div className="text-[#4FD6FA] text-[16px]">Videos</div>
          </div>
          <div className="text-[16px] text-[#545454] font-semibold">
            {user?.first_name} {user?.last_name}
          </div>
        </div>

        {/* Video + Thumbnails container */}
        <div className="flex flex-col md:flex-row flex-1 w-full min-h-0">
          {/* Thumbnails */}
          <div className="md:w-[100px] flex md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-y-auto p-1 md:p-2 bg-[#f3f3f3] rounded-md shrink-0">
            {videos.map((vid, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`cursor-pointer border-2 ${
                  index === i ? "border-[#461378]" : "border-transparent"
                } rounded overflow-hidden flex-shrink-0 w-[70px] md:w-full`}
              >
                <img
                  src={vid.thumbnail}
                  alt={`thumb-${i}`}
                  className="w-full h-[70px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Video */}
          <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden mt-3 md:mt-0 rounded-md">
            <iframe
              src={videos[index].src}
              title={`video-${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[60vh] md:h-full object-cover"
            ></iframe>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 h-[35px] w-[35px] md:h-[40px] md:w-[40px] bg-[#DADADA69] text-[#A2A1A1] p-2 rounded-full flex items-center justify-center"
            >
              <CaretLeftOutlined style={{ fontSize: "20px" }} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 h-[35px] w-[35px] md:h-[40px] md:w-[40px] bg-[#DADADA69] text-[#A2A1A1] p-2 rounded-full flex items-center justify-center"
            >
              <CaretRightOutlined style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-3 space-x-2 shrink-0">
          {videos.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-[#461378]" : "bg-[#d9d9d9]"
              }`}
            />
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoCarouselModal;

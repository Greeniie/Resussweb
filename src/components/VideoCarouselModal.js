import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import vids from "../assets/images/vidscolored.png";

const videos = [
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg"
  },
  {
    src: "https://www.youtube.com/embed/ScMzIvxBSi4",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/mqdefault.jpg"
  },
  {
    src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/mqdefault.jpg"
  },
  {
    src: "https://www.youtube.com/embed/lTTajzrSkCw",
    thumbnail: "https://img.youtube.com/vi/lTTajzrSkCw/mqdefault.jpg"
  }
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
      size="lg"
      dialogClassName="custom-modal"
    >
      <Modal.Body>
        <div className="p-[30px] flex flex-col h-full">
          <div className="flex items-center gap-[50px] pb-[20px] shrink-0">
            <div className="flex gap-[10px] items-center">
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

          {/* Video display container */}
          <div className="flex flex-1 w-full min-h-0">
            {/* Thumbnails Sidebar */}
            <div className="w-[100px] bg-[#f3f3f3] p-2 overflow-y-auto">
              {videos.map((vid, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`mb-2 cursor-pointer border-2 ${
                    index === i ? "border-[#461378]" : "border-transparent"
                  } rounded overflow-hidden`}
                >
                  <img
                    src={vid.thumbnail}
                    alt={`thumb-${i}`}
                    className="w-full h-[70px] object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Video Display */}
            <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
              <iframe
                src={videos[index].src}
                title={`video-${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>

              {/* Left / Right Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-[40px] w-[40px] bg-[#DADADA69] text-[#A2A1A1] p-2 rounded-full flex items-center justify-center"
              >
                <CaretLeftOutlined style={{ fontSize: "22px" }} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-[40px] w-[40px] bg-[#DADADA69] text-[#A2A1A1] p-2 rounded-full flex items-center justify-center"
              >
                <CaretRightOutlined style={{ fontSize: "22px" }} />
              </button>
            </div>
          </div>

          {/* Indicators */}
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
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoCarouselModal;

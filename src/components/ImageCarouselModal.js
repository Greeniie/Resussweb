import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import pics from "../assets/images/picscolored.png";

const images = [
  {
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1200&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?auto=format&fit=crop&w=1200&q=80",
  },
];

const ImageCarouselModal = ({ show, onHide, user }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="custom-modal"
      size="lg"
      contentClassName="!w-full !h-auto 
      md:!max-w-[1000px] 
      lg:!max-w-[1200px] 
      xl:!max-w-[1400px] 
      2xl:!max-w-[1600px]"
    >
      <Modal.Body className="p-3 md:p-[30px] flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-[50px] pb-[20px] shrink-0 text-center md:text-left">
          <div className="flex gap-[10px] items-center justify-center md:justify-start">
            <img
              src={pics}
              alt="pics"
              className="h-[16px] w-auto object-cover object-center"
            />
            <div className="text-[#4FD6FA] text-[16px]">Photos</div>
          </div>
          <div className="text-[16px] text-[#545454] font-semibold">
            {user?.first_name} {user?.last_name}
          </div>
        </div>

        {/* Image + Thumbnails container */}
        <div className="flex flex-col md:flex-row flex-1 w-full min-h-0">
          {/* Thumbnails */}
          <div className="md:w-[100px] flex md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-y-auto p-1 md:p-2 bg-[#f3f3f3] rounded-md shrink-0">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`cursor-pointer border-2 ${
                  index === i ? "border-[#461378]" : "border-transparent"
                } rounded overflow-hidden flex-shrink-0 w-[70px] md:w-full`}
              >
                <img
                  src={img.src}
                  alt={`thumb-${i}`}
                  className="w-full h-[70px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden mt-3 md:mt-0 rounded-md">
            <img
              src={images[index].src}
              alt={`main-${index}`}
              className="max-h-[60vh] md:max-h-full max-w-full object-contain"
            />

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
          {images.map((_, i) => (
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

export default ImageCarouselModal;

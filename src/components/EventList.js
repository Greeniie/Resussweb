import React, { useEffect } from "react";
import filters from "../assets/images/filtersmobile.png";
import event1 from "../assets/testimgs/event1.png";
import event2 from "../assets/testimgs/event2.png";
import event3 from "../assets/testimgs/event3.png";
import event4 from "../assets/testimgs/event4.png";
import event5 from "../assets/testimgs/event5.png";
import event6 from "../assets/testimgs/event6.png";
import link from "../assets/menu-icons/linkk.png";
import moment from "moment";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      date: "2025-04-08",
      img: event6,
      event_name: "Lagos food and drink by GTB",
      event_info:
        "The country is going bankrupt,” Musk said last week in an interview with Fox News in reference to the growing national debt. ",
    },
    {
      date: "2025-05-09",
      img: event1,
      event_name: "Lagos mainland Festival",
      event_info:
        "The country is going bankrupt,” Musk said last week in an interview with Fox News in reference to the growing national debt. ",
    },
    {
      date: "2025-06-20",
      img: event4,
      event_name: "The Future of Film Festivals in a Digital World",
      event_info:
        "The country is going bankrupt,” Musk said last week in an interview with Fox News in reference to the growing national debt. ",
    },
    {
      date: "2025-07-05",
      img: event3,
      event_name: "Turn up Abuja",
      event_info:
        "The country is going bankrupt,” Musk said last week in an interview with Fox News in reference to the growing national debt. ",
    },
    {
      date: "2025-08-12",
      img: event2,
      event_name: "The human angle play by Bimbo Lawson",
      event_info:
        "The country is going bankrupt,” Musk said last week in an interview with Fox News in reference to the growing national debt. ",
    },
    {
      date: "2025-09-25",
      img: event5,
      event_name: "A vivid Story Art Exhibition",
      event_info:
        "The country is going bankrupt,” Musk said last week in an interview with Fox News in reference to the growing national debt. ",
    },
  ];

  console.log(events);

  return (
    <div>
      <div className="hidden md:block bg-white min-h-[480px] mt-[30px] md:mt-0 rounded-[30px] mb-[30px] md:rounded-[35px] px-[15px] md:px-[50px] py-[30px] md:py-[35px]">
        <div className="border-b">
          <div className="text-[10px] w-fit text-[#545454] px-2 py-1 border border-[#DEDEDE] mb-[20px] rounded-[50px]">
            Industry party
          </div>
        </div>

        {events.map((event, index) => {
          const eventDate = moment(event.date);
          const today = moment();
          const daysDifference = eventDate.diff(today, "days");

          let dateLabel = "";
          if (daysDifference === 0) {
            dateLabel = "Today";
          } else if (daysDifference === 1) {
            dateLabel = "Tomorrow";
          } else {
            dateLabel = `${daysDifference} days`;
          }

          return (
            <div key={index} className="flex gap-[20px] pb-4 border-b my-4">
              {/* Date Section */}
              <div className="flex flex-col items-center justify-center">
                <div
                  className={`border-[5px] p-[10px] rounded-[10px] mb-[5px] ${
                    index === 0 ? "border-[#EB6A2B]" : "border-[#DEDEDE]"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-[35px] text-[#898A8D] font-bold leading-[20px]">
                      {eventDate.format("DD")}
                    </div>
                    <div className="text-[30px] text-[#898A8D] font-bold">
                      {eventDate.format("MMM").toUpperCase()}
                    </div>
                  </div>
                </div>
                <div
                  className={`text-[11px] ${
                    daysDifference <= 3 ? "text-[red]" : "text-[#000]"
                  }`}
                >
                  {dateLabel}
                </div>
              </div>

              {/* Event Image */}
              <div>
                <img
                  src={event.img}
                  alt="event"
                  className="h-[150px] w-[300px] rounded-[20px] object-cover object-center"
                />
              </div>

              {/* Event Details */}
              <div className="col-span-3 flex flex-col gap-[10px]">
                <div className="text-[#000] text-[25px] font-bold leading-[25px]">
                  {event.event_name}
                </div>
                <div className="text-[#000] text-[16px] w-[90%]">
                  {event.event_info}
                </div>
              </div>

              {/* External Link Button */}
              <div className="flex flex-col justify-center">
                <button>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={link}
                      alt="link"
                      className="w-[50px] h-auto object-cover object-center"
                    />
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="block md:hidden bg-white min-h-[480px] mt-[80px] p-[20px] rounded-[30px] ">
        <button onClick={() => navigate(-1)} className="block md:hidden">
          <ArrowLeftOutlined style={{ fontSize: "14px" }} />
        </button>
        <div>
          {events.map((event, index) => {
            const eventDate = moment(event.date);
            const today = moment();
            const daysDifference = eventDate.diff(today, "days");

            let dateLabel = "";
            if (daysDifference === 0) {
              dateLabel = "Today";
            } else if (daysDifference === 1) {
              dateLabel = "Tomorrow";
            } else {
              dateLabel = `${daysDifference} days`;
            }

            return (
              <div
                key={index}
                className="flex flex-col gap-[20px] border-b my-4"
              >
                <div className="flex gap-[20px] justify-between items-center">
                  {" "}
                  {/* Event Image */}
                  <div>
                    <img
                      src={event.img}
                      alt="event"
                      className="h-[150px] w-[300px] rounded-[20px] object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div
                      className={`border-[5px] p-[10px] rounded-[10px] mb-[5px] ${
                        index === 0 ? "border-[#EB6A2B]" : "border-[#DEDEDE]"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <div className="text-[35px] text-[#898A8D] font-bold leading-[20px]">
                          {eventDate.format("DD")}
                        </div>
                        <div className="text-[30px] text-[#898A8D] font-bold">
                          {eventDate.format("MMM").toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`text-[11px] ${
                        daysDifference <= 3 ? "text-[red]" : "text-[#000]"
                      }`}
                    >
                      {dateLabel}
                    </div>
                  </div>
                </div>

                <div className="flex gap-[20px] justify-between items-center pb-4">
                  {/* Event Details */}
                  <div className="col-span-3 flex flex-col justify-between">
                    <div className="text-[#000] text-[25px] font-bold pb-[10px] leading-[24px]">
                      {event.event_name}
                    </div>
                    <div className="text-[#000] text-[16px] w-[90%]">
                      {event.event_info}
                    </div>
                  </div>
                  {/* External Link Button */}
                  <div className="flex flex-col justify-center">
                    <button>
                      <a
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={link}
                          alt="link"
                          className="w-[50px] h-auto object-cover object-center"
                        />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventList;

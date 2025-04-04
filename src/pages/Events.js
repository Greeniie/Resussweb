import React, { useEffect } from "react";
import articlead from "../assets/testimgs/articlead.png";
import HomeNav from "../components/HomeNav";
import EventFilters from "../components/EventFilters";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import EventList from "../components/EventList";

const Events = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#EDEBF4] min-h-screen overflow-hidden">
      <HomeNav />
      <div className="py-[30px] hidden md:block">
        <img
          src={articlead}
          alt="ad"
          className="h-auto w-[90%] mx-auto object-center object-cover"
        />
      </div>
      <div className="w-[90%] mx-auto">
        <button onClick={() => navigate(-1)} className="hidden md:block">
          <ArrowLeftOutlined style={{ fontSize: "30px" }} />
        </button>
      </div>

      <div className="block md:grid md:grid-cols-4 min-h-screen w-[90%] gap-[20px] mx-auto mt-[50px]">
        <div className="hidden md:block">
          <EventFilters />
        </div>
        <div className="col-span-3">
          <EventList />
        </div>
      </div>
    </div>
  );
};

export default Events;

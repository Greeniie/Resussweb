import React from "react";
import logo from "../assets/logo.png";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <img
        src={logo}
        alt="Loading..."
        className="h-[50px] w-auto animate-pulse"
      />
    </div>
  );
};

export default Spinner;

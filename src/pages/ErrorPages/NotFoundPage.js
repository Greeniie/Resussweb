import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NotFoundPage = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <img
        src={logo}
        className="h-[40px] w-auto object-contain flex-shrink-0"
        alt="logo"
      />
      <h1 className="text-8xl font-bold text-[#461378]">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Not Found"
        className="w-72 mt-4"
      />
      <Link to='/home'
        className="mt-6 bg-[#461378] px-3 py-2 text-white flex items-center"
      >
        Go to home
      </Link>
    </div>
  );
};

export default NotFoundPage;

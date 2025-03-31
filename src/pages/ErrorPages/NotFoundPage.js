import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-8xl font-bold text-[#461378]">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
      <img 
        src="https://i.imgur.com/qIufhof.png" 
        alt="Not Found" 
        className="w-72 mt-4"
      />
      <Button 
        type="primary"
        size="large"
        className="mt-6 bg-[#461378] text-white flex items-center"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftOutlined className="mr-2" /> Go Back
      </Button>
    </div>
  );
};

export default NotFoundPage;

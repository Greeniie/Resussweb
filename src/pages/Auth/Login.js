import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import login1 from "../../assets/images/login1.png";
import login2 from "../../assets/images/login2.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
  <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
    <NavBar />
  </div>

  <div>
    <div style={{zIndex: '-1'}} className="absolute left-[20px] top-[120px] md:left-[30px] md:top-[140px]">
      <img
        src={login2}
        className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] object-center object-cover"
        alt="login1"
      />
    </div>
    <div style={{zIndex: '-1'}} className="absolute right-[0] top-[20px] md:top-[25px] md:top-[30px]">
      <img
        src={login1}
        className="w-[320px] h-[500px] md:w-[380px] md:h-[580px] md:w-[420px] md:h-[640px] object-center object-cover"
        alt="login2"
      />
    </div>
  </div>

  <div className="form z-50 bg-white min-h-[400px] w-[470px] rounded-[30px] md:rounded-[35px] md:rounded-[40px] border border-[#abb0ba] mx-auto mt-[100px] py-[50px] px-[40px]">
    <div className="text-[#4fd6fa] text-[24px] font-semibold">
      Welcome to Resuss
    </div>
    <div className="text-[#898A8D] text-[14px]">
      Don't have an account?{" "}
      <span>
        <Link to="/create-account" className="no-underline text-[#6633FF]">
          Click here
        </Link>
      </span>
    </div>

    <Form className="mt-5">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter your email address"
          className="border-[#abb0ba] p-2 text-[16px] custom-placeholder"
        />
      </Form.Group>

      <div className="flex justify-end">
        <Link to="/forgot-password" className="no-underline text-[#6633FF] pb-[5px]">
          Forgot your password?
        </Link>
      </div>

      <Form.Group className="mb-3 relative">
        <Form.Control
          type={passwordVisible ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
        />
        <div
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-[16px] text-[#abb0ba]"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </div>
      </Form.Group>

      <button className="bg-[#4FD6FA] hover:bg-[#6633FF] rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full mt-[40px] py-[12px] px-[10px] text-[16px] text-white font-medium">
        Login
      </button>
    </Form>
  </div>
</div>


      <div className="block md:hidden min-h-screen overflow-hidden w-full relative login-bg">
        <div className="px-[20px] pt-[20px]">
          <NavBar />
        </div>

        {/* Image Container */}
        <div className="absolute top-[-100px] right-[-220px] overflow-hidden w-full">
          <img
            src={login1}
            className="w-[420px] h-[640px] object-cover object-right max-w-none"
            alt="login2"
          />
        </div>

        {/* White Background Section */}
        <div className="relative min-h-screen">
          <div className="absolute top-[100px] left-0 w-full min-h-[calc(100%-100px)] bg-white z-[999] rounded-t-[58px] px-[50px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[60px]">
              <div className="text-[#4fd6fa] text-[36px] font-semibold leading-[36px] ">
                Welcome back to Resuss
              </div>
              <div className="text-[#898A8D] text-[18px] pt-[10px]">
                Don't have an account?{" "}
                <span>
                  <Link to="/create-account" className="no-underline text-[#6633FF]">
                    Click here
                  </Link>
                </span>
              </div>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter your email address"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                  // onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>

              <div className="flex justify-end text-[18px]">
                <Link
                  to="/forgot-password"
                  className="no-underline text-[#6633FF] pb-[10px] text-[18px]"
                >
                  Forgot your password?
                </Link>
              </div>

              <Form.Group className="mb-3 relative">
                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="border-[#abb0ba] p-2 pr-8 text-[18px] custom-placeholder"
                />
                <div
                  className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-[#abb0ba]"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </div>
              </Form.Group>

              <button className="bg-[#4FD6FA] rounded-[60px] w-full my-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium">
                Login
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import login1 from "../../assets/images/login1.png";
import login2 from "../../assets/images/login2.png";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearFormData = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const userLogin = (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      password: formData.password,
    };

    setConfirmLoading(true);

    dispatch(login(data))
      .then((response) => {
        setConfirmLoading(false);
        console.log(response);
        if (response.type === "auth/login/fulfilled") {
          clearFormData();
          console.log("response act", response);
          navigate("/home");
        } else if (response.type === "auth/login/rejected") {
          console.log("response act", response);
          setError({ error: true, message: response?.payload?.message });
        }
      })
      .catch((error) => {
        setConfirmLoading(false);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden login-bg hidden md:block">
        <div className="px-[40px] pt-[30px] md:px-[50px] md:pt-[35px] md:px-[60px] md:pt-[40px]">
          <NavBar />
        </div>

        <div>
          <div
            style={{ zIndex: "-1" }}
            className="absolute left-[20px] top-[120px] md:left-[30px] md:top-[140px]"
          >
            <img
              src={login2}
              className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] object-center object-cover"
              alt="login1"
            />
          </div>
          <div
            style={{ zIndex: "-1" }}
            className="absolute right-[0] top-[20px] md:top-[25px] md:top-[30px]"
          >
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
              <Link
                to="/create-account"
                className="no-underline text-[#6633FF]"
              >
                Click here
              </Link>
            </span>
          </div>

          <Form className="mt-5">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter your email address"
                className="border-[#abb0ba] p-2 text-[16px] custom-placeholder"
                onChange={(evt) => handleInputChange(evt)}
              />
            </Form.Group>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="no-underline text-[#6633FF] pb-[5px]"
              >
                Forgot your password?
              </Link>
            </div>

            <Form.Group className="mb-3 relative">
              <Form.Control
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border-[#abb0ba] p-2 pr-10 custom-placeholder"
                onChange={(evt) => handleInputChange(evt)}
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-[16px] text-[#abb0ba]"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </div>
            </Form.Group>

            <button
              disabled={!formData.email || !formData.password}
              onClick={userLogin}
              className={`flex justify-center items-center bg-[#4FD6FA] hover:brightness-90 rounded-[50px] md:rounded-[55px] md:rounded-[60px] w-full mt-[40px] py-[12px] px-[10px] text-[16px] text-white font-medium ${
                !formData.email || !formData.password
                  ? "cursor-default bg-[#ABB0BA] text-white hover:bg-[#ABB0BA]"
                  : "cursor-pointer"
              }`}
            >
              {confirmLoading ? "Signing in..." : "Login"}
              {confirmLoading ? <Spinner size="sm" /> : ""}
            </button>

            {error?.error && (
              <div className="text-[12px] text-[red] pt-[10px]">
                {error?.message}
              </div>
            )}
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
          <div className="absolute top-[100px] left-0 w-full min-h-[calc(100%-100px)] bg-white z-[999] rounded-t-[58px] px-[30px] pt-[50px] overflow-y-auto">
            <div className="pt-[20px] pb-[60px]">
              <div className="text-[#4fd6fa] text-[25px] font-semibold leading-[36px] ">
                Welcome back to Resuss
              </div>
              <div className="text-[#898A8D] text-[14px] pt-[10px]">
                Don't have an account?{" "}
                <span>
                  <Link
                    to="/create-account"
                    className="no-underline text-[#6633FF]"
                  >
                    Click here
                  </Link>
                </span>
              </div>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className="border-[#abb0ba] p-2 custom-placeholder"
                  onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>

              <div className="flex justify-end text-[14px]">
                <Link
                  to="/forgot-password"
                  className="no-underline text-[#6633FF] pb-[10px] text-[14px]"
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
                  onChange={(evt) => handleInputChange(evt)}
                />
                <div
                  className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-[#abb0ba]"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </div>
              </Form.Group>

              <button
                disabled={!formData.email || !formData.password}
                onClick={userLogin}
                className={`flex justify-center items-center bg-[#4FD6FA] hover:brightness-90 rounded-[60px] w-full my-[30px] px-[10px] py-[12px] text-[18px] text-white font-medium ${
                  !formData.email || !formData.password
                    ? "cursor-default bg-[#ABB0BA] text-white hover:bg-[#ABB0BA]"
                    : "cursor-pointer"
                }`}
              >
                {confirmLoading ? "Signing in..." : "Login"}
                {confirmLoading ? <Spinner size="sm" /> : ""}
              </button>
              {error?.error && (
                <div className="text-[12px] text-[red]">{error?.message}</div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

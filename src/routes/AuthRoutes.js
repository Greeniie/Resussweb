import { Spin } from "antd";
import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ExpirySession from "../utils/expirySession";

import { useSelector } from "react-redux";

const AuthRoutes = ({ ...rest }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state?.auth);

  useEffect(() => {
    isLoggedIn && navigate("/home");
    !isLoggedIn && navigate("/login");
  }, []);

  const Loading = () => {
    return (
      <div className="section-spin">
        <Spin />
      </div>
    );
  };

  return (
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
  );
};

export default AuthRoutes;

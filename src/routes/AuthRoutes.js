import { Spin } from "antd";
import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ExpirySession from "../utils/expirySession";

import { useSelector } from "react-redux";
import Spinner from "../utils/Spinner";

const AuthRoutes = ({ ...rest }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state?.auth);

  useEffect(() => {
    isLoggedIn && navigate("/home");
    !isLoggedIn && navigate("/login");
  }, []);

  const Loading = () => {
    return (
      <div>
        <Spinner />
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

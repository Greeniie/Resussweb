import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../utils/Spinner";

const AuthRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useSelector((state) => state?.auth);

  useEffect(() => {
    const currentPath = location.pathname;

    // Prevent logged-in users from accessing /login
    if (isLoggedIn && currentPath === "/login") {
      navigate("/home", { replace: true });
    }
  }, [isLoggedIn, location.pathname, navigate]);

  const Loading = () => (
    <div>
      <Spinner />
    </div>
  );

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default AuthRoutes;

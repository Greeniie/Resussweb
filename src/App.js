import "antd/dist/antd.variable.min.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import AuthRoutes from "./routes/AuthRoutes";

import NotFoundPage from "./pages/ErrorPages/NotFoundPage";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Spinner from "./utils/Spinner";
import ArticleDetails from "./pages/ArticleDetails";
import Events from "./pages/Events";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";

const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));

const Loading = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<LandingPage />} />

  {/* Auth routes wrapped in AuthRoutes */}
  <Route element={<AuthRoutes />}>
    <Route path="/login" element={<Login />} />
    <Route path="/create-account" element={<Signup />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Route>

  {/* Private routes */}
  <Route path="/" element={<ProtectedRoutes />}>
    <Route path="/home" element={<Home />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/article/details/:id" element={<ArticleDetails />} />
    <Route path="/:fullname" element={<Profile />} />
    <Route path="/events" element={<Events />} />
  </Route>

  <Route path="*" element={<NotFoundPage />} />
</Routes>

      </BrowserRouter>
    </Suspense>
  );
}

export default App;

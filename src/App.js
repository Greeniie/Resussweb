import "antd/dist/antd.variable.min.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Spin } from "antd";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import AuthRoutes from "./routes/AuthRoutes";

import NotFoundPage from "./pages/ErrorPages/NotFoundPage";
import Theme from "./theme";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Home from "./pages/Home";
import Resources from "./pages/Resources";

const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));

const Loading = () => {
  return (
    <div className="spin">
      <Spin />
    </div>
  );
};

function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   <div className="hidden py-[30px] md:flex md:justify-center">
    //     <img src={banner} alt="ad banner" />
    //   </div>
    //  <ArticleBody/>
    // </div>

    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/create-account" element={<Signup />} />

          {/* Auth routes */}
          <Route path="/" element={<AuthRoutes />}>
            <Route path="/login" element={<Login />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Private routes  */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

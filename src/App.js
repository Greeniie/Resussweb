
import "antd/dist/antd.variable.min.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Spin } from "antd";

// import ProtectedRoutes from "./routes/ProtectedRoutes";
import AuthRoutes from "./routes/AuthRoutes";

import NotFoundPage from "./pages/ErrorPages/NotFoundPage";
import Theme from "./theme";
import ForgotPassword from "./pages/Auth/ForgotPassword";

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
            {/* <Route path="/reset-confirmation" element={<ResetPassword />} /> */}
            <Route path="*" element={<NotFoundPage />} /> 
          </Route>

          {/* Private routes  */}
          {/* <Route path="/" element={<ProtectedRoutes />}>
            <Route
              //
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              //
              path="/clients"
              element={<Clients />}
            />
            <Route
              //
              path="/clients/:id"
              element={<ClientInfo />}
            />

            <Route
              //
              path="/transactions"
              element={<Transactions />}
            />

            <Route
              path="/transactions/details/:id"
              element={<TransactionDetails />}
            />
            <Route path="/jobtags" element={<ListJobTags />} />
            <Route path="/jobtag/details/:id" element={<JobTagDetails />} />

            <Route path="notifications" element={<Notifications />} />

            <Route
              //
              path="/settings"
              element={<Settings />}
            />

            <Route path="roles" element={<Roles />} />

            <Route path="reviews" element={<ListReviews />} />
            <Route path="referral-codes" element={<ListReferralCodes />} />
            <Route
              path="/referral-codes/create-referral-code"
              element={<CreateReferralCode />}
            />
            <Route
              path="/referral-codes/details/:user_id"
              element={<ReferralDetails />}
            />
            <Route path="subscriptions" element={<ListSubscriptions />} />
            <Route
              path="/subscriptions/details/:id"
              element={<SubscriptionDetails />}
            />

            <Route path="/articles" element={<ListArticles />} />
            <Route path="/article/details/:id" element={<ArticleDetails />} />

            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job/details/:id/:slug" element={<JobDetails />} />

            <Route path="payments" element={<ListPayments />} />
            <Route
              path="/payment/details/:id/:ref"
              element={<PaymentDetails />}
            />
            <Route path="signups" element={<Signups />} />

            <Route path="reports" element={<Reports />} />
            <Route path="/user/client/show/:id" element={<ReportDetails />} />
            <Route path="contacts" element={<ListContacts />} />
            <Route path="/contacts/details/:id" element={<SupportDetails />} />

            <Route path="/plans" element={<ListPlans />} />
            <Route path="/plan/details/:id" element={<PlanDetails />} />
            <Route path="admins" element={<Admins />} />
          </Route> */}

          {/* Catch all routes -> push to not found page */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

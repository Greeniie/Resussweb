import ExpirySession from "../utils/expirySession";
import ApiInstance from "./apiInstance";
import AutInstance from "./authInstance";

const signup = async (data) => {
  const response = await ApiInstance.post("/user/auth/signup-with-email", data);
  if (response.data) {
    ExpirySession.set("user", response.data);
  }
  return response.data;
};

const login = async (data) => {
  const response = await ApiInstance.post("/user/auth/login", data);
  if (response?.data) {
    ExpirySession.set("user", response.data);
  }
  return response.data;
};

const loginAsUser = async (data) => {
  const response = await ApiInstance.post("/user/auth/login", data);
  if (response?.data) {
    ExpirySession.set("resussUser", response.data);
  }
  return response.data;
};

const resetPassword = async (data) => {
  const response = await ApiInstance.post("/user/auth/reset-password", data);
  return response.data;
};

const sendOTP = async (data) => {
  const response = await ApiInstance.post(
    "/user/auth/send-password-reset-otp",
    data
  );
  return response.data;
};

const sendSignupOTP = async (data) => {
  const response = await ApiInstance.post(
    "/user/auth/send-otp-email",
    data
  );
  return response.data;
};

const verifySignupOTP = async (data) => {
  const response = await ApiInstance.post("/user/auth/verify/otp", data);
  return response.data;
};

const verifyOTP = async (data) => {
  const response = await ApiInstance.post("/user/auth/verify-otp", data);
  return response.data;
};

// Auth endpoints
const logout = async () => {
  try {
    await AutInstance.get("user/logout"); // send token while still available
  } catch (err) {
    console.error("Logout failed:", err);
  } finally {
    ExpirySession.clearAll(); // only clear session after logout call finishes
  }
};

const changePassword = async (data) => {
  const response = await AutInstance.post(`/user/change/password`, data);
  return response.data;
};

export const authService = {
  signup,
  login,
  resetPassword,
  sendOTP,
  verifyOTP,
  loginAsUser,
  logout,
  changePassword,
  sendSignupOTP,
  verifySignupOTP
};

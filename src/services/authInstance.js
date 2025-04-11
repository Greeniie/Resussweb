import axios from "axios";
import ExpirySession from "../utils/expirySession";
import { liveBaseURL } from "../networkUrl";

const instance = axios.create({
  baseURL: liveBaseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  (config) => {
    const user = ExpirySession.get("user");
    const access_token = user?.access_token;

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;

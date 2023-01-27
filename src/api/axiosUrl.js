import axios from "axios";
import url from "./url";
import promise from "promise";

const instance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async (request) => {
    try {
      const token = localStorage.getItem("token");
      if (token) request.headers.Authorization = `Bearer ${token}`;
      return request;
    } catch (err) {
      return err;
    }
  },
  function (error) {
    return promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.log("401 error");
      }
      return error.response;
    }
    if (error.message === "NO_NETWORK_FOUND") {
      console.log("NO_NETWORK_FOUND");
      return Promise.reject("NO_NETWORK_FOUND");
    } else {
      console.log("NO_DATA_RECEIVED");
      return Promise.reject("NO_DATA_RECEIVED" + error);
    }
  }
);

export default instance;

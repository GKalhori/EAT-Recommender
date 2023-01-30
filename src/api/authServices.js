import axios from "./axiosUrl";

class authServices {
  register(data) {
    return axios.post("/tools/register/", data);
  }

  login(data) {
    return axios.post("/tools/login/", data);
  }
}

export default new authServices();

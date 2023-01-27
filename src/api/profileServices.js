import axios from "./axiosUrl";

class profileServices {
  getProfile() {
    return axios.get("/api/people/u/");
  }

  getHistory() {
    return axios.get("/api/people/u/course/");
  }

  changeNames(data) {
    return axios.put("/api/auth/names/", data);
  }

  changePassword(data) {
    return axios.put("/api/auth/password/change/", data);
  }
}

export default new profileServices();

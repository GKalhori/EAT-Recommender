import axios from "./axiosUrl";

class profileServices {
  getHistory() {
    return axios.get("/api/people/u/course/");
  }
}

export default new profileServices();

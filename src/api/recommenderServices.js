import axios from "./axiosUrl";

class recommenderServices {
  getFeatures() {
    return axios.get("/tools/features/");
  }

  getRecommendation(data) {
    return axios.post("/tools/find/", data);
  }

  getLatestTools() {
    return axios.get("/tools/recommends/");
  }
}

export default new recommenderServices();

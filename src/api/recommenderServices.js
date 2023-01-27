import axios from "./axiosUrl";

class recommenderServices {
  getFeatures() {
    return axios.get("/tools/features");
  }

  getRecommendation(data) {
    return axios.post("/tools/find", data);
  }
}

export default new recommenderServices();

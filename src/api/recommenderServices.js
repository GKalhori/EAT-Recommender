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

  rateRecommendation(featureId, status) {
    return axios.post(`/tools/rate/${featureId}/?rate=${status}`);
  }
}

export default new recommenderServices();

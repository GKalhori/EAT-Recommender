import axios from "./axiosUrl";

class toolServices {
  getTools() {
    return axios.get("/tools/");
  }

  getTool(toolId) {
    return axios.get(`/tools/${toolId}/`);
  }
}

export default new toolServices();

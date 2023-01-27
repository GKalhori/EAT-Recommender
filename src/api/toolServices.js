import axios from "./axiosUrl";

class toolServices {
  getTools(pageSize, pageNumber) {
    return axios.get(
      `/api/course/?pg_size=${pageSize}&pg_number=${pageNumber}`
    );
  }

  getTool(toolId) {
    return axios.get(`/api/course/${toolId}/`);
  }
}

export default new toolServices();

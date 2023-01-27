import axios from "./axiosUrl";

class authServices {
  VerifyPhone(data) {
    return axios.post("/api/auth/check/phone/", data);
  }

  sendCodeRegister(data) {
    return axios.post("/api/auth/register/send-code/", data);
  }

  generateCode(data) {
    return axios.post("/api/auth/code/generate/", data);
  }

  getTokenWithCode(data) {
    return axios.post("/api/auth/token/code/", data);
  }

  forgotPassword(data) {
    return axios.post("/api/auth/password/forgot/", data);
  }

  checkCode(data) {
    return axios.post("/api/auth/register/pre/", data);
  }

  register(data) {
    return axios.post("api/auth/register/complete/", data);
  }

  login(data) {
    return axios.post("api/auth/login/", data);
  }

  VerifyOtp(data) {
    return axios.post("/signup/checkOtp", data);
  }

  ResetPassword(data) {
    return axios.post("/api/auth/password/forgot/", data);
  }
}

export default new authServices();

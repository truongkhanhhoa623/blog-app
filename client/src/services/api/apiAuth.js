import { axiosClient } from "./axiosClient";

export default {
  authFacebook: (params) => {
    const url = "facebook";
    return axiosClient.post(url, { params });
  },
  login: (params) => {
    const url = "login";
    return axiosClient.post(url, { params });
  },
  register: (params) => {
    const url = "register";
    return axiosClient.post(url, { params });
  },
  getProfile: () => {
    const url = "profile";
    return axiosClient.get(url);
  },
};

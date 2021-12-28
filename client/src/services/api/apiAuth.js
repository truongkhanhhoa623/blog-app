import { axiosClient } from "./axiosClient";

export default {
  authFacebook: (params) => {
    const url = "facebook";
    return axiosClient.post(url, {params});
  },
  getProfile: () => {
      const url = "profile";
      return axiosClient.get(url)
  }
};

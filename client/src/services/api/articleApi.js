import { axiosClient } from "./axiosClient";

export default {
  getAll: () => {
    const url = "articles";
    return axiosClient.get(url);
  },
};

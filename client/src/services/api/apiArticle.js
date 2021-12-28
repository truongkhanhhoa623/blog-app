import { axiosClient } from "./axiosClient";

export default {
  getListsArticles: () => {
    const url = "articles";
    return axiosClient.get(url);
  },
  getDetailArticle: (params) => {
      const url = `article/${params}`
      return axiosClient.get(url);
  }
};

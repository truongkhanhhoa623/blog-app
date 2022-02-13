import { axiosClient } from "./axiosClient";

export default {
  getListsArticles: () => {
    const url = "articles";
    return axiosClient.get(url);
  },
  getDetailArticle: (params) => {
      const url = `article/${params}`
      return axiosClient.get(url);
  },
  getArticleForAuthor: ()=>{
      const url = "me/article"
      return axiosClient.get(url)
  },
  createArticle: (params)=>{
      const url = "article"
      return axiosClient.post(url, {params})
  },
  updateArticle: (id, params)=>{
      const url= `article/${id}`
      return axiosClient.put(url, {params})
  },
  deleteArticle: (id)=>{
      const url = `article/${id}`
      return axiosClient.delete(url)
  }
};

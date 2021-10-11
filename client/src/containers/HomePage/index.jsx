import { useEffect, useState } from "react";
import articleApi from "../../services/api/articleApi";
import { Articles, Header} from "../../components";
import {SiteBar} from "../SiteBar"

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getArticles() {
      try {
        articleApi.getAll()
        .then((res) => {
          const data = res.data;
          setArticles(data);
          console.log(data)
        });
      } catch (error) {}
    }
    getArticles();
  },[]);
  return (
    <div className="home">
      <div className="container">
          <div className="row">
              <div className="col lg-8">    <Articles articles={articles} /></div>
              <div className="col lg-4">
                  <SiteBar/>
              </div>
          </div>
    
      </div>
    </div>
  );
};

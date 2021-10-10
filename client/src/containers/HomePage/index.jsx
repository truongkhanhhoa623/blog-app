import { useEffect, useState } from "react";
import articleApi from "../../services/api/articleApi";
import { Articles, Header} from "../../components";
import {SiteBar} from "../SiteBar"

export const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getArticles() {
      try {
        articleApi.getAll().then((res) => {
          const articles = res.data;
          setData(articles);
        });
      } catch (error) {}
    }
    getArticles();
  });
  return (
    <div className="home">
      <div className="container">
          <div className="row">
              <div className="col lg-8">    <Articles /></div>
              <div className="col lg-4">
                  <SiteBar/>
              </div>
          </div>
    
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Articles, Header } from "../../components";
import { SiteBar } from "../SiteBar";
import { getListArticles, selectArticle } from "../../redux/slice/articleSlice";
import { getCookie } from './../../util/getCokie';
export const HomePage = () => {
  const dispatch = useDispatch();
  const {loading, listArticles, error} = useSelector(selectArticle);
  useEffect(() => {
        dispatch(getListArticles())
  }, []);
  return (
    <div className="home">
      <div className="container">
        {loading? <div>true</div>: <div>false</div>}
        <div className="row">
          <div className="col lg-8">
            <Articles articles={listArticles} />
          </div>
          <div className="col lg-4">
            <SiteBar />
          </div>
        </div>
      </div>
    </div>
  );
};

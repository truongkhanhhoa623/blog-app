import { MdBookmarkAdd, MdOutlineBookmarkAdd } from "react-icons/md";
import "./styles.scss";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

export const DetailArticle = ({ article }) => {
  if (article.author) {
    return (
      <div className="detail-article">
        <h1 className="detail-article__title">{article.title}</h1>
        <div className="row mt-3 mb-3">
          <div className="col lg-6">
            <div className="author">
              <div className="author__avatar">
                <img src={article.author.picture} />
              </div>
              <div className="author__detail">
                <div className="info">
                  <h4 className="info__name"></h4>
                  <div className="info__follow">Follow</div>
                </div>
                <p className="author__create">{article.author.fullname}</p>
              </div>
            </div>
          </div>
          <div className="col lg-6">
            <div className="detail-article__save">
              <MdOutlineBookmarkAdd size={24} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
              {parse(article.content)}
              </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiArticle from "../../services/api/apiArticle";
import "./StorePage.scss";
export const StorePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticlesForMe = async () => {
      try {
        const res = await apiArticle.getArticleForAuthor();
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticlesForMe();
  }, []);
  const handleDelete = (id) => {
    apiArticle
      .deleteArticle(id)
      .then(() => {
        console.log("res.msg");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="store mt-3">
      <div className="container">
        <div className="row">
          <div className="col lg-12">
            <h1 className="store__header">Bài Viết Của Bạn</h1>
          </div>
        </div>
        <div className="row">
          <div className="col lg-10 o-lg-1">
            <div className="table">
              {articles.map((article) => {
                return (
                  <div className="table__item">
                    <div className="item-header">
                      <h2>{article.title}</h2>
                      <span>Publish</span>
                    </div>
                    <div className="item-footer">
                      <p>{article.createdAt}</p>
                      <div className="item-footer__feature">
                        <Link className="a" to={"/me/article/" + article.slug}>Sửa</Link>
                        <span>Xóa</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

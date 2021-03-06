import { MdBookmarkAdd, MdOutlineBookmarkAdd } from "react-icons/md";
import parse from 'html-react-parser';
import "./styles.scss";
import { Link } from "react-router-dom";

export const Articles = ({ articles }) => {
  return (
    <div className="articles">
      {articles.map((article, idx) => {
        return (
          <div key={idx} className="article-item">
            <div className="row">
              <div className="col lg-12">
                <div className="article-item__content">
                  <div className="article-item__header">
                    <div className="author">
                      <div className="author__avatar">
                        <img src={article.author.picture} />
                      </div>
                      <h5>{article.author.fullname}</h5>    
                    </div>
                    <p>{article.createdAt}</p>
                  </div>
                  <Link to={"/detail/"+ article.slug}>
                    <div>
                      <h3 className="article-item__title">{article.title}</h3>
                      <p className="article-item__description">
                          {parse(article.content.slice(0,200)+" .....")}
                      </p>
                    </div>
                  </Link>
                  <div className="article-item__footer">
                    <div className="subject">JavaScript</div>
                    {/* <MdBookmarkAdd size={24} /> */}
                    <MdOutlineBookmarkAdd size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

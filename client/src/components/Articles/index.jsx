import { MdBookmarkAdd, MdOutlineBookmarkAdd } from "react-icons/md";
import "./styles.scss";

export const Articles = ({articles}) => {
  return (
    <div className="articles">
        { articles.map((article) =>{
            return(
                <div className="article-item">
                <div className="row">
                  <div className="col lg-9">
                    <div className="article-item__content">
                      <div className="article-item__header">
                        <div className="author">
                          <div className="author__avatar">
                            <img src="https://picsum.photos/id/237/200/300" />
                          </div>
                          <h5>Navoda Nishiba</h5>
                        </div>
                        <p>Sep 15</p>
                      </div>
                      <h3 className="article-item__title">
                        What Exactly Are Https Cookies?
                      </h3>
                      <p className="article-item__description">
                        We all have the nasty experience of facing prompts asking us to
                        accept cookies when we visit some of the websites. Why are they
                        asking our…
                        accept cookies when we vi
                      </p>
                      <div className="article-item__footer">
                        <div className="subject">
                          JavaScript
                        </div>
                        {/* <MdBookmarkAdd size={24} /> */}
                        <MdOutlineBookmarkAdd size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="col lg-3">
                    <div className="article-item__thumbnail">
                      <img src="https://picsum.photos/id/237/200/300" />
                    </div>
                  </div>
                </div>
              </div>
            )
        })}
     
    </div>
  );
};

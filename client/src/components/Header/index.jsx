import {
  IoSearchOutline,
  IoBookmarksOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import "./styles.scss";
import {Link} from "react-router-dom"
export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col lg-6">
            <div className="header__logo">
              <h1> MEDIUM CLONE</h1>
            </div>
          </div>
          <div className="col lg-6">
            <div className="navbar">
              <div className="navbar__search">
                <IoSearchOutline size={24} />
              </div>
              <div className="navbar__save-lists">
                <IoBookmarksOutline size={24} />
              </div>
              <div className="navbar__notifications">
                <IoNotificationsOutline size={24} />
              </div>
              {/* <div className="navbar__user"></div> */}
              <div className="navbar__signin"><Link to={'/login'}>Sign in</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

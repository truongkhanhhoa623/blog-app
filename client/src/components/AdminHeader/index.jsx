import {
  IoBookmarksOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { deleteCookie } from "../../util/handleCookie";
import "./styles.scss";

export const AdminHeader = ({ profile }) => {
  function showMenuUser() {
    document.querySelector(".menu-user").classList.toggle("show");
    window.onclick = function (e) {
      if (!e.target.matches(".avatar") || e.target.matches(".closs")) {
        var menu = document.querySelector(".menu-user");
        if (!menu) {
          return;
        }
        if (menu.classList.contains("show")) {
          menu.classList.remove("show");
        }
      }
    };
  }
  const handleLogout = () => {
    deleteCookie("auth");
  };
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col lg-6">
            <div className="header__logo">
              <h1>
                <Link to="/">MEDIUM CLONE</Link>{" "}
              </h1>
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
              <div className="navbar__user">
                <img
                  className="avatar"
                  onClick={ showMenuUser }
                  src={ profile.picture }
                />
                <div className="menu-user">
                  <div className="closs closs--out"></div>
                  <div className="menu-user__feature">
                    <div className="closs closs--btn">x</div>
                    <h4>{ profile.fullname }</h4>
                    <h5>{ profile.email }</h5>
                    <Link to="/me/new-article">Viết bài</Link>
                    <Link to="/me/store">Bài viết của tôi</Link>
                    <Link to="/" onClick={handleLogout}>
                      Đăng xuất
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

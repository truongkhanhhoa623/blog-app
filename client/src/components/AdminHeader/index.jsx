import {
  IoSearchOutline,
  IoBookmarksOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { Menu } from "..";
import { Link } from "react-router-dom";

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
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col lg-6">
            <div className="header__logo">
              <h1><Link to="/">MEDIUM CLONE</Link> </h1>
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
                  onClick={showMenuUser}
                  src="https://linkimage.com/media/000/108/large_Adam%20Johansson_x.jpg"
                />
                <div className="menu-user">
                  <div className="closs closs--out"></div>
                  <div className="menu-user__feature">
                    <div className="closs closs--btn">x</div>
                    <h4>Truong Khanh Hòa</h4>
                    <h5>truongkhanhhoa623@gmail.com</h5>
                    <Link to="/pri/new-article">Viết bài</Link>
                    <Link to="/me/store">Bài viết của tôi</Link>
                    <Link to="/pri/logout">Đăng xuất</Link>
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

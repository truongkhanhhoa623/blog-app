import { Link } from "react-router-dom";
import "./styles.scss";
export const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="closs closs--out"></div>
        <div className="menu__feature">
          <div className="closs closs--btn">x</div>
          <Link to="/pri/new-article">Viet bai</Link>
          <Link to="/me/store">Viet cua toi</Link>
          <Link to="/pri/logout">Dang xuat</Link>
        </div>
      </div>
    </>
  );
};

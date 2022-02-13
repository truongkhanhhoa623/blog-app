import { AdminHeader } from "../../components";
import "./styles.scss";
export function BlankLayout({ children }) {
  return (
    <div className="blank-layout">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col lg-4 o-lg-4">
              <div className="header__logo">
                <h1> MEDIUM CLONE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

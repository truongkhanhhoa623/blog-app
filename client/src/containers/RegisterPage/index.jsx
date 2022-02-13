import "./styles.scss";
import { axiosClient } from "./../../services/api/axiosClient";
export const RegisterPage = () => {
  const resgister = () => {
    axiosClient.post("register",{ 
      email: "truongkhanhhoa6234@gmail.com",
      password: "1234567890",
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col lg-4 o-lg-4">
          <div className="login-page">
            <div className="login-page__logo">MEDIUM</div>
            <h3 className="login-page__title">Sign Up</h3>
            <from>
              <input type="text" name="email" />
              <input type="password" name="password" />
              <button type="submit" onClick={resgister}>Register</button>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
};

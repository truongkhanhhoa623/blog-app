import "./styles.scss";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import apiAuth from "../../services/api/apiAuth";
import { axiosClient } from "./../../services/api/axiosClient";
import { getCookie, setCookie } from "../../util/getCokie";

export const LoginPage = () => {
  const responseFacebook = (res) => {
    try {
      apiAuth.authFacebook(res).then((res) => {
        window.location.replace("/");
        console.log("Login Facebook success", res);
      });
    } catch (error) {
      console.log("error");
    }
  };
  const Login = () => {
    axiosClient
      .post("login", {
        email: "truongkhanhhoa6234@gmail.com",
        password: "1234567890",
      })
      .then((res) => {
        setCookie('auth',res.data.user.token,7);
        window.location.replace("/pri")
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col lg-4 o-lg-4">
          <div className="login-page">
            <div className="login-page__logo">MEDIUM</div>
            <h3 className="login-page__title">Sign In</h3>
            <FacebookLogin
              appId="3064849950466357"
              autoLoad={false}
              callback={responseFacebook}
            />
            <br></br>
            <from>
                <label htmlFor="email">Email: </label>
              <input type="text" name="email" /><br></br>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" /><br></br>
              <button type="submit" onClick={Login}>
                Log in
              </button>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
};

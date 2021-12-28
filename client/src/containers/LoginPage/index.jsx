import "./styles.scss";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import apiAuth from "../../services/api/apiAuth";

export const LoginPage = () => {
  const responseFacebook = (res) => {
    try {
        apiAuth.authFacebook(res)
        .then((res) => {
        window.location.replace("/");
        console.log("Login Facebook success", res);
        });
    } catch (error) {
        console.log("error")
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col lg-4 o-lg-4">
          <div className="login-page">
            <div className="login-page__logo">MEDIUM</div>
            <h3 className="login-page__title">Sign In</h3>
            <FacebookLogin appId="3064849950466357" autoLoad={false} callback={responseFacebook}/>
            <from>
                <input type="text" name="email"/>
                <input type="password" name="password"/>
                <button type="submit">Log in</button>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
};

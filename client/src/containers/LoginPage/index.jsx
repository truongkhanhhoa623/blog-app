import "./styles.scss";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

export const LoginPage = () => {
  const responseFacebook = (res) => {
      console.log(res);
    axios({
        method: "POST",
        url: "http://localhost:5000/api/loginFacebook",
        data:{accessToken: res.accessToken, userID: res.userID}
    }).then(res =>{
        console.log("Login Facebook success", res);
    })
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
          </div>
        </div>
      </div>
    </div>
  );
};

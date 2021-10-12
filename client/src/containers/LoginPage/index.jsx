import "./styles.scss";
import FacebookLogin from "react-facebook-login";

export const LoginPage = () => {
  const responseFacebook = (res) => {
    console.log(res);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col lg-4 o-lg-4">
          <div className="login-page">
            <div className="login-page__logo">MEDIUM</div>
            <h3 className="login-page__title">Sign In</h3>
            <FacebookLogin
              appId="1541598222864427"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              icon="fa-facebook"
            />
            ,
          </div>
        </div>
      </div>
    </div>
  );
};

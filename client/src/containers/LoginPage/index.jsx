import "./styles.scss";

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col lg-4 o-lg-4">
          <div className="login-page">
              <div className="login-page__logo">MEDIUM</div>
              <h3 className="login-page__title">Sign In</h3>
              <from>
                  <input className="" type="text" name="username" />
                  <input className="" type="passsword" name="password" />
                  <button className="">Login</button>
              </from>
          </div>
        </div>
      </div>
    </div>
  );
};

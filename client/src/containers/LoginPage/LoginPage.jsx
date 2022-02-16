import { useFormik } from "formik";
import FacebookLogin from "react-facebook-login";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { Input } from "../../components";
import apiAuth from "../../services/api/apiAuth";
import { setCookie } from "../../util/handleCookie";
import "./LoginPage.scss";

export const LoginPage = () => {
  const responseFacebook = (res) => {
    try {
      apiAuth.authFacebook(res).then((res) => {
        window.location.replace("/");
      });
    } catch (error) {
      console.log("error");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      apiAuth
        .login({
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          setCookie("auth", res.data.user.token, 7);
          window.location.replace("/me");
        })
        .cacth((err) => {
          console.log(err);
        });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không đúng cú pháp")
        .required("Vui lòng nhập Email của bạn"),
      password: Yup.string()
        .min(6, "Phải có ít nhất 6 ký tự")
        .max(32, "Không quá 32 ký tự")
        .required("Vui lòng nhập mật khẩu"),
    }),
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col lg-4 o-lg-4">
          <div className="login-page">
            <h3 className="login-page__title">Đăng Nhập</h3>
            <form onSubmit={formik.handleSubmit}>
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
              />
              <Input
                label="Mật Khẩu"
                placeholder="Mật Khẩu"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && formik.errors.password}
              />
              <Link >Quên mật khẩu?</Link>
              <Link to="/register">Đăng ký tài khoản</Link>
              <button className="login-page__btn" type="submit">
                Đăng Nhập
              </button>
            </form>
            
          </div>
          <FacebookLogin
              appId="3064849950466357"
              autoLoad={false}
              callback={responseFacebook}
            />
        </div>
      </div>
    </div>
  );
};

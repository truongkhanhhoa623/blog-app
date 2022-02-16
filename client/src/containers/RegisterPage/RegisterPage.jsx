import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Input } from "../../components";
import apiAuth from "../../services/api/apiAuth";
import { setCookie } from "../../util/handleCookie";
import "./RegisterPage.scss";

export const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      apiAuth
        .register({
          email: "truongkhanhhoa6234@gmail.com",
          password: "1234567890",
        })
        .then((res) => {
          setCookie("auth", res.data.user.token, 7);
          window.location.replace("/pri");
        })
        .cacth((err) => {
          console.log(err);
        });
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(4, "Tên phải có ít nhất 4 chữ")
        .max(32, "Không quá 32 ký tự")
        .required("Vui lòng nhập họ tên"),
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
            <h3 className="login-page__title">Đăng Ký</h3>
            <form onSubmit={formik.handleSubmit}>
            <Input
                label="Họ và tên"
                placeholder="Họ tên"
                type="text"
                id="fullname"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                error={formik.touched.fullname && formik.errors.fullname}
              />
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
              <Link to="/login">Đăng nhập</Link>
              <button className="login-page__btn" type="submit">
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

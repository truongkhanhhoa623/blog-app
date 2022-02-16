import { Route } from "react-router-dom";
import { getCookie } from "../util/handleCookie";
export function PrivateRouter({
  layout: Layout,
  component: Component,
  exact,
  path,
}) {
  const token = getCookie("auth");
  console.log("token", token);
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if (token==null) {
          window.location.replace("/");
        }
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        
      }}
    />
  );
}

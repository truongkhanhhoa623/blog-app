import { Route } from "react-router-dom";
import { getCookie } from './../util/getCokie';

export function PrivateRouter({
  layout: Layout,
  component: Component,
  exact,
  path,
}) {
    const token = getCookie("token")
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if(!token){
            window.location.replace("/")
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

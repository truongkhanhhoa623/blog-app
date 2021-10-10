import { Route } from "react-router-dom";

export function PrivateRouter({
  layout: Layout,
  component: Component,
  exact,
  path,
}) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
      }}
    />
  );
}

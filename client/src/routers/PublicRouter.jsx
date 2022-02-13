import { Component } from "react";
import { Route } from "react-router-dom";

export function PublicRouter({  component: Component, layout: Layout, path: path }) {
  return (
    <Route
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

import { Component } from "react";
import { Route } from "react-router-dom";
import { getCookie } from './../util/handleCookie';

export function HomeRouter({  component: Component, layout: Layout, path: path }) {
  const token = getCookie("auth");

  return (
    <Route
      path={path}
      render={(props) => {
        if(token){
            window.location.replace("/me");
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

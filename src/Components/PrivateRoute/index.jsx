import React from "react";
import { Route, Redirect } from "react-router-dom";

import { auth } from "../../helpers/auth";
const PrivateRoute = ({
  component: Component,
  path,
  product,
  resource
}) => (
  <Route
    path
    render={(props) => {
      const currentUser = auth.currentUser;
      if (!!!currentUser) {
        return (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }

      if (!!!isHome && !auth.isAuthorize(currentUser, product, resource)) {
        return (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;

import userEvent from "@testing-library/user-event";
import React from "react";
import { Route, Redirect } from "react-router-dom";

// import { auth } from "../../helpers/auth";
const PrivateRoute = ({
  path,
  component: Component,
  props
}) => (
  <Route
    path
    render={(props) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser")); //check if current user exit or not 
      if (!!!currentUser) {
        return (
          <Redirect
            to={{
              pathname: "/auth/login",
            }}
          />
        );
      }

      if ((props.location.pathname.indexOf("admin") > -1) & (currentUser.userType != "admin")) {  //if user has the right to acces the path he is trying to access
        return (
          <Redirect
            to={{
              pathname: "/auth/login",
            }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;

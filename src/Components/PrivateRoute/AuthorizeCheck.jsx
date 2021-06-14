import React from "react";
import { Route, Redirect } from "react-router-dom";

// import { auth } from "../../helpers/auth";
const AuthorizeCheck = ({
  path,
  component: Component
  
}) => (
  <Route
    path
    render={(props) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser")); //check if current user exit or not 

      if (path.indexOf("admin") == -1) {  //if user has the right to acces the path he is trying to access
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

export default AuthorizeCheck;

import React from "react";
import { Route } from "react-router";
import Login from "../../Pages/Login/Login";
import TopBar from "../../Components/TopBar/TopBar";
import styles from "./style.module.css"

function AuthLayout() {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <div className={styles.main}>
        {/* {getAllRoutes()} */}
        <Route path="/auth/login" component={Login} />
        
      </div>
    </div>
  );
}
export default AuthLayout;
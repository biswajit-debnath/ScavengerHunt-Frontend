import React from "react";
import { Route } from "react-router";
import LoggedInTopBar from "../../Components/TopBar/LoggedInTopBar";
import Listings from "../../Pages/Listings/Listings";
import UserDetail from "./../../Pages/UserDetail/UserDetail"
import styles from "./style.module.css"
import AuthorizeCheck from "../../Components/PrivateRoute/AuthorizeCheck";


function InternalLayout() {
  return (
    <div className={styles.wrapper}>
      <LoggedInTopBar />
      <div className={styles.main}>
        <Route path="/internal/user/:id" render={()=><UserDetail userType="user"/>} />
        <Route path="/internal/admin/users" render={()=><Listings userType="admin"/>} />
        <Route path="/internal/admin/user/:id" render={()=><UserDetail userType="admin"/>} />
      </div>
    </div>
  );
}
export default InternalLayout;
import React from "react";
import { Route } from "react-router";
import Home from "../../Pages/Home/Home";
import TopBar from "../../Components/TopBar/TopBar";
import Listings from "../../Pages/Listings/Listings";
import UserDetail from "./../../Pages/UserDetail/UserDetail"
import styles from "./style.module.css"


function PublicLayout() {

  return (
    <div className={styles.wrapper}>
      <TopBar />
      <div className={styles.main}>
        <Route path="/public/home" component={Home}/>
        <Route path="/public/listings/:pincode" component={Listings} />
        <Route path="/public/user/:id" component={UserDetail} />        
      </div>
    </div>
  );
}
export default PublicLayout;
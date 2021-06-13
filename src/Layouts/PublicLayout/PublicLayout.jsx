import React from "react";
import { Route } from "react-router";
import Home from "../../Pages/Home/Home";
import TopBar from "../../Components/TopBar/TopBar";
import Listings from "../../Pages/Listings/Listings";
import UserDetail from "./../../Pages/UserDetail/UserDetail"
import styles from "./style.module.css"


// const getAllRoutes = () => {
//   return routes.map((page) => (
//       <Route exact path={`${page.layout}${page.path}`} component={page.page} />
//   ));
// };

function PublicLayout() {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <div className={styles.main}>
        {/* {getAllRoutes()} */}
        <Route path="/public/home" component={Home} />
        <Route path="/public/listings" component={Listings} />
        <Route path="/public/user/detail" component={UserDetail} />

        
      </div>
    </div>
  );
}
export default PublicLayout;
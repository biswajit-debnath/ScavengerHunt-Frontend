import React from 'react'
import styles from "./style.module.css";

const TopBar = ({text1,text2,link})=> {
    return (
        <div className={styles.container}>
            <p className={styles.p}>{text1?text1:"Service Provider or Admin?"} <a href={link?link:"/auth/login"}><span style={{color:"#2940D3",fontWeight:"600"}}>{text2?text2:"Login In"}</span></a></p>
        </div>
    )
}

export default TopBar
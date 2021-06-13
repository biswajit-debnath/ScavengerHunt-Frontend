import React from 'react'
import styles from "./style.module.css";

const TopBar = ()=> {
    return (
        <div className={styles.container}>
            <p className={styles.p}>Service Provider or Admin? <span style={{color:"#2940D3",fontWeight:"600"}}>Login In</span></p>
        </div>
    )
}

export default TopBar
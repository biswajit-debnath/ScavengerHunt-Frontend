import React from 'react'
import styles from "./style.module.css";

const Header = ({text})=> {
    return (
        <h1 className={styles.h1}>{text}</h1>
    )
}

export default Header
import React from 'react'
import styles from "./style.module.css";

const Input = ({label,sideLabel,type,name})=> {
    return (
        <div className={styles.container}>
            <div className={styles.labelContainer}>
                <p className={styles.label}>{label}</p>
                <span className={styles.sideLabel}>{sideLabel?`(${sideLabel})`:""}</span>
            </div>
            <input type={type?type:"text"} name={label} className={styles.input} required/>
        </div>
    )
}

export default Input

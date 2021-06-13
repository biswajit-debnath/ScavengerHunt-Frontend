import React from 'react'
import styles from "./style.module.css";

const ListingCard = ({label,sideLabel,type,name})=> {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Institution</p>
                <p>Branch</p>
            </div>
            <div className={styles.values}>
                <p>Bettle Nut</p>
                <p>Sea of Theseus</p>
            </div>
        </div>
    )
}

export default ListingCard

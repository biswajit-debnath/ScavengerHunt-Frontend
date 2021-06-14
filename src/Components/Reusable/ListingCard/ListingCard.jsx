import React from 'react'
import styles from "./style.module.css";

const ListingCard = ({data})=> {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Institution</p>
                <p>{data.institutionname}</p>
            </div>
            <div className={styles.values}>
                <p>Branch</p>
                <p>{data.branchname}</p>
            </div>
        </div>
    )
}

export default ListingCard

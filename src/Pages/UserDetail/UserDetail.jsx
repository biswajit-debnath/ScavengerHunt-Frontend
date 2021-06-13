import React from 'react'
import Header from '../../Components/Reusable/Header/Header'
import styles from "./style.module.css"

const Detail = ()=> {
    return (
        <div className={styles.container}>
            <Header text="Info" />
            <div className={styles.body}>
                <div className={styles.leftContainer}>
                    <div className={styles.leftCard}>
                        <h3>Institution Name</h3>
                        <p>Beetle Nut</p>
                    </div>
                    <div className={styles.leftCard}>
                        <h3>Address</h3>
                        <p>Platform Number </p>
                        <p>9 3/47</p>
                    </div>
                    <div className={styles.leftCard}>
                        <h3>City</h3>
                        <p>Gofar Singh</p>
                    </div>
                    
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.rightCard}>
                        <h3>Branch Name</h3>
                        <p>The Cheesecake Factory</p>
                    </div>
                    <div className={styles.rightCard}>
                        <h3>Contect Number</h3>
                        <p>22435157</p>
                        <p>30281570</p>
                        <p>8961369388</p>
                    </div>
                    <div className={styles.rightCard}>
                        <h3>Branch Incharge</h3>
                        <p>Mr Ranchodas Syamaldas Chhanchad</p>
                    </div>
                    <div className={styles.rightCard}>
                        <h3>Pincode Covered</h3>
                        <p>700110, 700111, 700112</p>
                        <p>700113, 700114, 700115</p>
                        <p>700116, 700115, 700115</p>
                        <p>700117, 700118, 700119</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail

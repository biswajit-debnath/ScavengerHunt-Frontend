import React, { useEffect, useState } from 'react'
import Header from '../../Components/Reusable/Header/Header'
import styles from "./style.module.css"
import {UserService} from "./../../Services/UserServices"

const Detail = ({userType})=> {
    const [dataLoaded,setDataLoaded] = useState(false);
    const [data,setData] = useState({})

    useEffect(async ()=>{
        const res =await UserService.getUserDetailById(2);
        if(res.status == 200){
            setData(res.data)
            setDataLoaded(true)
        }
        else{
            console.log("This error needs to be generated");
        }
    },[])
    

    if(!dataLoaded)
        return <div>Loading......</div>
    return (
        <div className={styles.container}>
            <Header text="Info" />
            <div className={styles.body}>
                <div className={styles.leftContainer}>
                    <div className={styles.leftCard}>
                        <h3>Institution Name</h3>
                        <p>{data.institutionname}</p>
                    </div>
                    <div className={styles.leftCard}>
                        <h3>Address</h3>
                        <p>Platform Number</p>
                        <p>{"fsdf"}</p>
                    </div>
                    <div className={styles.leftCard}>
                        <h3>City</h3>
                        <p>{data.city}</p>
                    </div>
                    
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.rightCard}>
                        <h3>Branch Name</h3>
                        <p>{data.branchname}</p>
                    </div>
                    <div className={styles.rightCard}>
                        <h3>Contect Number</h3>
                        <p>{data.contactnumber}</p>
                        <p>30281570</p>
                        <p>8961369388</p>
                    </div>
                    <div className={styles.rightCard}>
                        <h3>Branch Incharge</h3>
                        <p>{data.branchincharge}</p>
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

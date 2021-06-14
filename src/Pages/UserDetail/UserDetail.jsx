import React, { useEffect, useState } from 'react'
import Header from '../../Components/Reusable/Header/Header'
import styles from "./style.module.css"
import {UserService} from "./../../Services/UserServices"

const Detail = ({userType})=> {
    const [dataLoaded,setDataLoaded] = useState(false);
    const [data,setData] = useState({})

    useEffect(async ()=>{
        const user=JSON.parse(localStorage.getItem("currentUser"))
        let userId;
        userId=window.location.pathname.split("/")[3]

        if(userType == "admin")
            userId=window.location.pathname.split("/")[4]
        
        const res =await UserService.getUserDetailById(userId);
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
                        <p>{data.address.replace("Platform Number ","")}</p>
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
                        <h3>Contact Number</h3>
                        {data.contactnumbers? 
                        data.contactnumbers.split(",").map(no=><p key={no}>{no}</p>)
                        :null}
                    </div>
                    <div className={styles.rightCard}>
                        <h3>Branch Incharge</h3>
                        <p>{data.branchincharge}</p>
                    </div>
                    <div className={styles.rightCard}>
                        <h3>Pincode Covered</h3>
                        {
                            data.pincodes.map((pincode,i)=>{
                                if(i%3==0)
                                    return <p>{data.pincodes[i]}, {data.pincodes[i+1]}, {data.pincodes[i+2]}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail

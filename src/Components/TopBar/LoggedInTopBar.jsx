import React, { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client";
import styles from "./style.module.css";
import chatImg from "./chat.png"
import NotificationPanel from './../NotificationPanel/NotificationPanel'


const LoggedInTopBar = ()=> {
    const [newNotificationNo,setNewNotificationNo] = useState(0)
    const [showNotificationPanel,setShowNotificationPanel] = useState(false)

    const handleLogout =() => {
        localStorage.removeItem("currentUser");
        window.location.reload();
    }

    useEffect(()=>{
        console.log("socket should run");
        const socket = socketIOClient("http://localhost:4000",{
                                        // auth: {
                                        //     token: "123"   //Todo later
                                        // },
                                        query: {
                                            "userId": "3"
                                        }
                                    })
        socket.on("notification", data => {
            if(data == "increment")
                setNewNotificationNo(newNotificationNo+1);
            else 
                setNewNotificationNo(parseInt(data))
        });
    },[newNotificationNo])
    return (
        <div className={styles.container} >
            <div className={styles.innerContainer}>
                <div className={styles.img} onClick={()=>setShowNotificationPanel(true)}>
                    <img src={chatImg}/>
                    {
                        newNotificationNo ? <div className={styles.circle}>{newNotificationNo}</div> :null
                    }
                    {showNotificationPanel?<NotificationPanel setShowNotificationPanel={setShowNotificationPanel}/>:null}
                </div>
                <button onClick={handleLogout} className={styles.button}>Logout</button>
            </div>
        </div>
    )
}

export default LoggedInTopBar
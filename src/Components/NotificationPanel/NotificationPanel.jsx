import React, { useEffect, useState } from 'react'
import styles from "./style.module.css";
import {NotificationService} from "./../../Services/NotificationService"

const NotificationPanel = ({setShowNotificationPanel,setNewNotificationNo})=> {
    const [newNotifications,setNewNotifications] = useState([])
    const [oldNotifications,setOldNotifications] = useState([])
    const [dataLoaded,setDataLoaded] = useState(false);
    const [currentUser,setCurrentUser]= useState({})


    const handleOnClose =async (e) => {
        e.stopPropagation()
        setShowNotificationPanel(false)
        const res =await NotificationService.readAllNewNotification(currentUser.userId);
        if(res.status == 200){
            setNewNotificationNo(0)
            return
        }
        else{
            console.log("This error needs to be generated");
        }
    }

    useEffect(async ()=> {
        const user = JSON.parse(localStorage.getItem("currentUser"))
        setCurrentUser(user)
        const res =await NotificationService.getAllNotificationsById(user.userId);
        if(res.status == 200){
            setNewNotifications(res.data.new)
            setOldNotifications(res.data.old)
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
            <div className={styles.header}>
                <h2>Notification </h2>
                <div onClick={handleOnClose}>x</div>
            </div>

            {
                newNotifications.map(notification=> 
                    <div className={styles.notificationItem}>
                        <p>{notification.message} was referened</p>
                        <div className={styles.circle}></div>
                    </div>
                )
            }

            {
                oldNotifications.map(notification=> 
                    <p>{notification.message} was referened </p>
                )
            }
           

        </div>
    )
}

export default NotificationPanel
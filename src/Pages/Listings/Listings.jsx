import React, { useEffect, useState } from 'react'
import Header from '../../Components/Reusable/Header/Header'
import ListingCard from '../../Components/Reusable/ListingCard/ListingCard'
import styles from "./style.module.css"
import { UserService } from '../../Services/UserServices'
import { useHistory, useParams } from 'react-router-dom'

const Listings = ({userType})=> {
    const {pincode} = useParams()
    const history = useHistory();

    const [dataLoaded,setDataLoaded] = useState(false);
    const [data,setData] = useState([])


    const handleCardClick =(userId) => {
        if(userType == "admin")
            history.push(`/internal/admin/user/${userId}`)
        else
            history.push(`/public/user/${userId}`)
    }

    useEffect(async ()=>{
        let res;
        if(userType == "admin")
            res =await UserService.getAllUsers(1);
        else{
            
            console.log("pincode",pincode);
            res =await UserService.getUsersByPincode(pincode);
        }

        console.log(res);
        if(res.status == 200){
            setData(res.data)
            setDataLoaded(true)
        }
        else{
            if(res.status == 404) 
                alert("No provider found on selected pincode try a different one")
            setDataLoaded(true)
            history.push("/public/home")
        }
    },[])
    
    if(!dataLoaded)
        return <div>Loading......</div>
    return (
        <div className={styles.container}>
            <Header text={userType == "admin"?"All Available Providers":"Available Provider To Your Location"} />
            <div className={styles.main}>
                {data.map(user=> 
                    <div onClick={()=>handleCardClick(user.userid)} key={user.userid}>
                        <ListingCard  data={user} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Listings

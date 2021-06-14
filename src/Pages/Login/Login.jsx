import React, { useEffect, useState } from 'react'
import Input from "../../Components/Reusable/Input/Input"
import Button from "../../Components/Reusable/Button/Button"
import Header from '../../Components/Reusable/Header/Header'
import styles from "./style.module.css"
import {AuthServices} from "./../../Services/AuthServices"
import { useHistory } from 'react-router-dom'

const Home = ()=> {
    const history = useHistory()
    const [dataLoaded,setDataLoaded] = useState(true);

    const handleSubmit=async (event) => {
        event.preventDefault()
        setDataLoaded(false)
        const username = event.target["Username"].value
        const password = event.target["Password"].value
        

        const res =await AuthServices.login({username,password});
    
        if(res.status == 200){
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            setDataLoaded(true)
            if(res.data.userType == "admin")
                history.push(`/internal/admin/users`) 
            else    
                history.push(`/internal/user/${res.data.userId}`)

        }
        else{
            if(res.status == 404) 
                alert("No user found")
            if(res.status == 401) 
                alert("Incorrect Credential")
            setDataLoaded(true)
        }
    }


    useEffect(()=>{
        const user= JSON.parse(localStorage.getItem("currentUser"))
        if(!!user){
            if(user.userType == "admin")
                history.push(`/internal/admin/users`) 
            else
                history.push(`/internal/user/${user.userId}`)
        }
    },[])  

    if(!dataLoaded)
        return <div>Loading......</div>
    return (
        <div className={styles.wrapper}>
            <div>
                <Header text="Login" />
                <form onSubmit={handleSubmit}>
                <Input label="Username" />
                <Input label="Password" type="password" />
                <Button text="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import Input from "../../Components/Reusable/Input/Input"
import Button from "../../Components/Reusable/Button/Button"
import Header from '../../Components/Reusable/Header/Header'
import styles from "./style.module.css"

const Home = ()=> {
    return (
        <div className={styles.wrapper}>
            <div>
                <Header text="Login" />
                <form onSubmit={(e)=>{e.preventDefault(); console.log(e.target["email"].value,e.target["pincode"].value)}}>
                <Input label="Username" />
                <Input label="Password" type="password" />
                <Button text="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Home

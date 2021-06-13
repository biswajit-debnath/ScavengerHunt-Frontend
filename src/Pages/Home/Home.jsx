import React from 'react'
import Input from "../../Components/Reusable/Input/Input"
import Button from "../../Components/Reusable/Button/Button"
import Header from '../../Components/Reusable/Header/Header'

const Home = ()=> {
    return (
        <div>
            <Header text="Find Sharp Shoter At Your Location" />
            <form onSubmit={(e)=>{e.preventDefault(); console.log(e.target["email"].value,e.target["pincode"].value)}}>
            <Input label="Your Name" />
            <Input label="Email" type="email" />
            <Input label="Pincode" type="number" sideLabel="Where you want the  service" />
            <Button text="Search" />
            </form>
        </div>
    )
}

export default Home

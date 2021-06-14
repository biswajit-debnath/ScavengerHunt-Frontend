import React from 'react'
import Input from "../../Components/Reusable/Input/Input"
import Button from "../../Components/Reusable/Button/Button"
import Header from '../../Components/Reusable/Header/Header'
import { useHistory } from 'react-router-dom'

const Home = ()=> {
    const history = useHistory();

    const handleSubmit= event => {
        event.preventDefault()
        const pincode = event.target["Pincode"].value

        history.push(`/public/listings/${pincode}`)
    }

    return (
        <div>
            <Header text="Find Sharp Shoter At Your Location" />
            <form onSubmit={handleSubmit}>
            <Input label="Your Name" />
            <Input label="Email" type="email" />
            <Input label="Pincode" type="number" sideLabel="Where you want the  service" />
            <Button text="Search" />
            </form>
        </div>
    )
}

export default Home

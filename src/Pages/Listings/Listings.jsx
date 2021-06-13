import React from 'react'
import Header from '../../Components/Reusable/Header/Header'
import ListingCard from '../../Components/Reusable/ListingCard/ListingCard'
import styles from "./style.module.css"

const Listings = ()=> {
    return (
        <div className={styles.container}>
            <Header text="Available Provider To Your Location" />
            <div className={styles.main}>
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
            </div>
        </div>
    )
}

export default Listings

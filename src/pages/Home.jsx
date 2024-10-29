import React from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from '../components/AppDownload'
const Home = () => {
    const [category, setCategory] = useState('All');
    console.log(category)
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} setCategory={setCategory} />
            <AppDownload />
        </div>
    )
}

export default Home
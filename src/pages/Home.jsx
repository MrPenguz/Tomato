import React from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from '../components/AppDownload'
import { motion } from 'framer-motion'
const Home = () => {
    const [category, setCategory] = useState('All');
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} setCategory={setCategory} />
            <AppDownload />
        </motion.div>
    )
}

export default Home
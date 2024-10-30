import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import PlaceOrder from '../pages/Place-Order'
import Cart from '../pages/Cart'
import { AnimatePresence } from 'framer-motion'
const AnimatedRoutes = () => {
    const loaction = useLocation();
    return (
        <div >
            <AnimatePresence>
                <Routes location={loaction} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='place-order' element={<PlaceOrder />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
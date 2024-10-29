import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlaceOrder from './pages/Place-Order'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'
const App = () => {
  const [showLogin, setShowlogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowlogin={setShowlogin} /> : <></>}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  ">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='place-order' element={<PlaceOrder />} />
          <Route path='/cart' element={<Cart />} />
          <Route />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
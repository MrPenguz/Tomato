import { useState } from 'react'
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState('home')
    return (
        <div className='flex items-center justify-between sm:py-10     py-8   font-medium'>
            <img src={assets.logo} className=' w-36 flex  justify-start' alt="" />
            <ul className='hidden lg:flex sm:gap-6 text-sm text-gray-800'>
                <Link to='/' onClick={() => setMenu('home')} className={`flex flex-col items-center gap-1 ${menu === 'home' ? "active" : ""}`}>
                    <p className='uppercase'>Home</p>
                    <hr className='w-2/4 border-none h-[0.5px] bg-gray-800 hidden' />
                </Link>
                <a href='#menu' onClick={() => setMenu('menu')} className={`flex flex-col items-center gap-1 ${menu === 'menu' ? "active" : ""}`}>
                    <p className='uppercase'>Menu</p>
                    <hr className='w-2/4 border-none h-[0.5px] bg-gray-800 hidden' />
                </a>
                <a href="#mobile-app" onClick={() => setMenu('mobile-app')} className={`flex flex-col items-center gap-1 ${menu === 'mobile-app' ? "active" : ""}`}>
                    <p className="uppercase">Mobile-app</p>
                    <hr className="w-2/4 border-none h-[0.5px] bg-gray-800 hidden" />
                </a>
                <a href='#contact-us' onClick={() => setMenu('contact')} className={`flex flex-col items-center gap-1 ${menu === 'contact' ? "active" : ""}`}>
                    <p className='uppercase'>Contact us</p>
                    <hr className='w-2/4 border-none h-[0.5px] bg-gray-800 hidden' />
                </a>
            </ul>
            <div className="flex items-center gap-4  sm:gap-6">
                <img src={assets.search_icon} />
                <div className="flex flex-col ">
                    <div className=" absolute bg-orange-500 rounded-xl  px-2 py-1 ml-3 sm:mt-8 mt-6 text-white text-sm top-0">1</div>
                    <img src={assets.basket_icon} />
                </div>
                <button className='border rounded-3xl py-4   border-gray-800 text-gray-700  hover:bg-orange-500 hover:text-white  transition ease-in-out duration-300 sm:px-7 px-5'>Sign In</button>


            </div>
        </div>
    )
}

export default Navbar
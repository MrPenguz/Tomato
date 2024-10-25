import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex items-center justify-between sm:py-10     py-8   font-medium'>
            <img src={assets.logo} className=' w-36 flex  justify-start' alt="" />
            <ul className='hidden lg:flex sm:gap-6 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p className='uppercase'>Home</p>
                    <hr className='w-2/4 border-none h-[0.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p className='uppercase'>Menu</p>
                    <hr className='w-2/4 border-none h-[0.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p className='uppercase'>Mobile-app</p>
                    <hr className='w-2/4 border-none h-[0.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p className='uppercase'>Contact us</p>
                    <hr className='w-2/4 border-none h-[0.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4 sm:gap-6">
                <img src={assets.search_icon} />
                <img src={assets.basket_icon} />
                <button className='border rounded-3xl py-4   border-gray-800 text-gray-700  hover:bg-orange-500 hover:text-white  transition ease-in-out duration-300 sm:px-7 px-5'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
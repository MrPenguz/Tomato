import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Header = () => {
    return (
        <div className='background flex  mx-auto    '>
            <div className="flex flex-col  sm:flex-col justify-center items-start sm:gap-10 sm:mx-24 mx-10 sn:w-1/2 font-bold  ">
                <h1 className='2xl:text-[80px] sm:text-[50px] text-[40px] mb-6 roboto-black text-white   '>Order Your Favourite Food Here!</h1>
                <p className='text-lg lg:text-2xl  text-white xl:w-3/4'>Order your favorite dishes quickly and easily! Enjoy delicious meals delivered straight to your door with just a few clicks.</p>
                <button className='border mt-10 rounded-3xl sm:py-4 py-2 px-7 text-white hover:text-black hover:bg-white  duration-300 ease-in-out'>View More</button>
            </div>
        </div>
    )
}

export default Header
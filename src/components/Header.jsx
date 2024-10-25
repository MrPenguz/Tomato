import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Header = () => {
    return (
        <div className='background flex items-center mx-auto  '>
            <div className="flex flex-col  sm:flex-col justify-center items-start sm:gap-10 sm:mx-24 mx-10 sn:w-1/2 font-bold ">
                <h1 className='2xl:text-[70px] sm:text-[40px] text-[30px] mb-6  text-white '>Order Your Favourite Food</h1>
                <p className='text-lg lg:text-2xl  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia, soluta officiis maxime rerum perspiciatis labore quam modi quaerat facilis tenetur non voluptates ipsa voluptatibus voluptate odio aut eligendi aspernatur!</p>
                <button className='border mt-10 rounded-3xl sm:py-4 py-2 px-7 text-white hover:text-black hover:bg-white  duration-300 ease-in-out'>View More</button>
            </div>
        </div>
    )
}

export default Header
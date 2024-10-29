import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='flex flex-col bg-zinc-700 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  ' id='contact-us'>
            <div className="flex flex-row justify-between items-start my-10 text-start text-white">
                <div className="">
                    <img src={assets.logo} alt="" className='mb-5' />
                    <p className='text-sm sm:w-[250px] xl:w-[500px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores excepturi suscipit molestias veniam. Doloribus!</p>
                    <div className="flex flex-row mt-5 gap-5">
                        <img src={assets.facebook_icon} className=' rounded-full hover:bg-orange-500 duration-300 ' alt="" />
                        <img src={assets.twitter_icon} className=' rounded-full hover:bg-orange-500 duration-300 ' alt="" />
                        <img src={assets.linkedin_icon} className=' rounded-full hover:bg-orange-500 duration-300 ' alt="" />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <h2 className='text-3xl font-semibold mb-3'>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className='text-3xl font-semibold mb-3' >GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-464-5662</li>
                        <li>conatct@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='text-white text-lg flex flex-row justify-center my-5'>Copyright 2024 Tomato.com - ALL Right Reserved</p>
        </div>
    )
}

export default Footer
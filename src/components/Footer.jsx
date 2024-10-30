import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className="flex flex-col bg-zinc-700 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]" id="contact-us">
            <div className="flex flex-col md:flex-row justify-between items-start my-10 text-start text-white gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col items-start">
                    <img src={assets.logo} alt="" className="mb-5 w-32 sm:w-40" />
                    <p className="text-sm max-w-xs md:max-w-sm lg:max-w-md">
                        At Tomato Company, we bring the freshest tomato flavors to your table. From sauces to salsas, each product is crafted to capture the taste of perfectly ripe tomatoes. Taste the difference
                    </p>
                    <div className="flex mt-5 gap-4">
                        <img src={assets.facebook_icon} className="w-8 h-8 rounded-full hover:bg-orange-500 duration-300" alt="Facebook" />
                        <img src={assets.twitter_icon} className="w-8 h-8 rounded-full hover:bg-orange-500 duration-300" alt="Twitter" />
                        <img src={assets.linkedin_icon} className="w-8 h-8 rounded-full hover:bg-orange-500 duration-300" alt="LinkedIn" />
                    </div>
                </div>

                {/* Company Links */}
                <div className="hidden md:block">
                    <h2 className="text-2xl font-semibold mb-3">COMPANY</h2>
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col items-start">
                    <h2 className="text-2xl font-semibold mb-3">GET IN TOUCH</h2>
                    <ul className="space-y-1">
                        <li>+1-212-464-5662</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>

            <hr className="border-gray-500" />
            <p className="text-white text-center text-sm md:text-lg my-5">
                &copy; 2024 Tomato.com - ALL Rights Reserved
            </p>
        </div>

    )
}

export default Footer
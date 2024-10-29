import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
    return (
        <div className='my-24 flex flex-col justify-center items-center' id="mobile-app">
            <p className=' font-light 2xl:text-[60px] sm:text-[50px] text-[40px] text-center '>For Better Expericnce Download <br className='' /> <p className='text-orange-500'>Tomato</p> App</p>
            <div className="flex sm:flex-row flex-col  items-center justify-around gap-10">
                <img className='max-h-48 max-w-52 cursor-pointer hover:scale-105 duration-200' src={assets.play_store} alt="" />
                <img className='max-h-48 max-w-52 cursor-pointer hover:scale-105 duration-200' src={assets.app_store} alt="" />
            </div>
        </div>

    )
}

export default AppDownload
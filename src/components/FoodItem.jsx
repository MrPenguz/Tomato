import React, { useState, useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext';
import { motion } from 'framer-motion';
const FoodItem = ({ _id, name, image, price, description }) => {



    const { setCartItems, cartItems, RemoveFromCart, AddToCart } = useContext(StoreContext);
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" flex flex-col border rounded-xl  items-start text-start  shadow-lg ">
            <div className="w-full h-full relative top-0 ">
                <motion.img initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={image} className="w-full  object-cover rounded-t-xl h-full relative " alt="" />
                {
                    !cartItems[_id] ? <motion.img initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className=' absolute bottom-4 right-4 cursor-pointer   ' onClick={() => AddToCart(_id)} src={assets.add_icon_white} alt="" />
                        : <div className=" bg-white bg-opacity-75  rounded-xl absolute bottom-4 right-4 cursor-pointer flex flex-row items-center gap-5 text-orange-500 duration-300 ease-in-out transition">
                            <motion.img initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => RemoveFromCart(_id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[_id]}</p>
                            <img onClick={() => AddToCart(_id)} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className="mx-3 my-3 flex flex-col gap-6 ">
                <div className="flex flex-row justify-between text-start items-center ">
                    <p className='text-md xl:text-lg '>{name}</p>
                    <img className='' src={assets.rating_starts} alt="" />
                </div>
                <p className="text-sm text-gray-500 h-[100px] sm:h-[80px]">{description}</p>
                <p className='text-2xl text-orange-500 font-semibold'>{price}$</p>
            </div>
        </motion.div>


    )
}

export default FoodItem
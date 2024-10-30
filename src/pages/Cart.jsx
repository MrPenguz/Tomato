import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const Cart = () => {
    const { cartItems, food_list, RemoveFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            className='mt-10 sm:mb-0 mb-32  '>
            <div className="">
                <div className=" text-sm md:text-xl  grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-center items-center text-gray-600">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr className='bg-gray-700 mb-10' />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div className="font-bold grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]  text-center items-center text-gray-600 border-r border-b  shadow-lg    rounded-r-xl my-5">
                                <img src={item.image} className='sm:w-50 mx-auto rounded-l-xl ' alt="" />
                                <p className='text-sm md:text-xl'>{item.name}</p>
                                <p className='text-sm md:text-lg'>{item.price}$</p>
                                <p className='text-sm md:text-lg'>{cartItems[item._id]}</p>
                                <p className='text-sm md:text-lg'>{item.price * cartItems[item._id]}$</p>
                                <p onClick={() => RemoveFromCart(item._id)} className='border bg-white mx-auto px-4 py-3 hover:text-white hover:bg-orange-500 duration-300 my-auto rounded-xl shadow-lg font-black cursor-pointer'>X</p>

                            </div>

                        )
                    }
                })}
            </div>
            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row lg:justify-center my-10 px-4 sm:px-8">
                {/* Cart Total Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center lg:text-left">Cart Total</h2>
                    <div className="flex justify-between items-center my-4">
                        <p className="text-sm sm:text-lg text-gray-500">Subtotal</p>
                        <p className="text-orange-500 font-black text-sm sm:text-lg">${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center my-4">
                        <p className="text-sm sm:text-lg text-gray-500">Delivery Fee</p>
                        <p className="text-orange-500 font-black text-sm sm:text-lg">${2}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center my-4">
                        <b className="text-sm sm:text-lg text-gray-500">Total</b>
                        <b className="text-orange-500 font-black text-sm sm:text-lg">${getTotalCartAmount() + 2}</b>
                    </div>
                    <button onClick={() => { navigate('/place-order') }} className="w-full lg:w-auto text-white bg-orange-500 py-3 px-5 rounded-md text-lg mt-5 hover:bg-orange-700">
                        Proceed To Checkout
                    </button>
                </div>

                {/* Promo Code Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 mb-10">
                    <p className="text-center text-base sm:text-xl text-gray-500">
                        If you have a promo code, enter it here!
                    </p>
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row ">
                        <input
                            className="bg-gray-200 rounded-md sm:rounded-r-none py-3 sm:py-4 px-5 w-full sm:w-auto"
                            type="text"
                            placeholder="Promo Code"
                        />
                        <button className="bg-orange-500 text-white py-3 sm:py-4 hover:bg-orange-700  rounded-md sm:rounded-l-none mt-3 sm:mt-0 px-5 text-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </div>


        </motion.div>
    )
}

export default Cart
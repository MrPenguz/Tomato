import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Cart = () => {
    const { cartItems, food_list, RemoveFromCart } = useContext(StoreContext);
    return (
        <div className='mt-10 sm:mb-0 mb-32 '>
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
            <div className="">
                <h2>Cart Total</h2>
                <div className="">
                    <div className="">
                        <p>Subtotal</p>
                        <p>{0}</p>
                    </div>
                    <hr />
                    <div className="">
                        <p>Delivery Fee</p>
                        <p>{2}</p>
                    </div>
                    <hr />
                    <div className="">
                        <b>Total</b>
                        <b>{0}</b>
                    </div>
                </div>
                <button>Procced To Checkout</button>
            </div>
        </div>
    )
}

export default Cart
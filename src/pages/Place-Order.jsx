import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { motion } from 'framer-motion';
const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <motion.form initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} Deform className="flex flex-col lg:flex-row justify-around my-36 mx-4 space-y-10 lg:space-y-0">
            {/* left */}
            <div className="flex flex-col gap-5 w-full lg:w-[600px]">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black lg:text-left">Delivery Info</p>
                <div className="flex flex-col sm:flex-row gap-5">
                    <input
                        type="text"
                        className="w-full sm:w-1/2 border py-2 px-4 rounded-lg shadow-md"
                        placeholder="First name"
                        required />
                    <input
                        type="text"
                        className="w-full sm:w-1/2 border py-2 px-4 rounded-lg shadow-md"
                        placeholder="Last name"
                        required />
                </div>
                <input
                    type="email"
                    className="w-full border py-2 px-4 rounded-lg shadow-md"
                    placeholder="Email address"
                    required />
                <input
                    type="text"
                    className="w-full border py-2 px-4 rounded-lg shadow-md"
                    placeholder="Street"
                    required />
                <div className="flex flex-col sm:flex-row gap-5">
                    <input
                        type="text"
                        className="w-full sm:w-1/2 border py-2 px-4 rounded-lg shadow-md"
                        placeholder="City"
                        required />
                    <input
                        type="text"
                        className="w-full sm:w-1/2 border py-2 px-4 rounded-lg shadow-md"
                        placeholder="State"
                        required />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    <input
                        type="number"
                        className="w-full sm:w-1/2 border py-2 px-4 rounded-lg shadow-md"
                        placeholder="Zip code"
                        required />
                    <input
                        type="text"
                        className="w-full sm:w-1/2 border py-2 px-4 rounded-lg shadow-md"
                        placeholder="Country"
                        required />
                </div>
                <input
                    type="number"
                    className="w-full border py-2 px-4 rounded-lg shadow-md"
                    placeholder="Phone"
                    required />
            </div>

            {/* right */}
            <div className="p-4 w-full lg:w-[600px] space-y-6">
                <div className="mb-8 lg:mb-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-left lg:text-left mb-6">Cart Total</h2>
                    <div className="flex justify-between items-center my-4">
                        <p className="text-sm sm:text-lg text-gray-500">Subtotal</p>
                        <p className="text-orange-500 font-black text-sm sm:text-lg">${getTotalCartAmount()}</p>
                    </div>
                    <hr className="bg-gray-400 h-[3px] mb-4" />
                    <div className="flex justify-between items-center my-4">
                        <p className="text-sm sm:text-lg text-gray-500">Delivery Fee</p>
                        <p className="text-orange-500 font-black text-sm sm:text-lg">${2}</p>
                    </div>
                    <hr className="bg-gray-400 h-[3px] mb-4" />
                    <div className="flex justify-between items-center my-4">
                        <b className="text-sm sm:text-lg text-gray-500">Total</b>
                        <b className="text-orange-500 font-black text-sm sm:text-lg">${getTotalCartAmount() + 2}</b>
                    </div>
                    <hr className="bg-gray-400 h-[3px] mb-6" />
                    <button
                        onSubmit={(e) => e.preventDefault()}
                        className="w-full text-white bg-orange-500 py-3 rounded-md text-lg mt-5 font-extrabold hover:bg-orange-700"
                    >
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </motion.form>


    )
}

export default PlaceOrder
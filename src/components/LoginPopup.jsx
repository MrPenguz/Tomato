import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const LoginPopup = ({ setShowlogin }) => {
    const [currentState, setCurrentState] = useState("Sign Up")
    return (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-8">
            <form className="bg-white border rounded-lg w-full max-w-md py-8 px-6 sm:px-8 flex flex-col gap-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl sm:text-3xl">{currentState}</h2>
                    <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="Close" className="cursor-pointer " />
                </div>
                <div className="flex flex-col gap-4">
                    {currentState === "Sign Up" && (
                        <input
                            className="border rounded-lg p-3 text-sm sm:text-base"
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    )}
                    <input
                        className="border rounded-lg p-3 text-sm sm:text-base"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                    <input
                        className="border rounded-lg p-3 text-sm sm:text-base"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>
                {currentState === "Login" ? (
                    <p className="text-gray-600 text-center text-sm sm:text-base">
                        Create a new account?{" "}
                        <span onClick={() => setCurrentState("Sign Up")} className="text-orange-500 cursor-pointer">
                            Click Here!
                        </span>
                    </p>
                ) : (
                    <p className="text-gray-600 text-center text-sm sm:text-base">
                        Already have an account?{" "}
                        <span onClick={() => setCurrentState("Login")} className="text-orange-500 cursor-pointer">
                            Login Here!
                        </span>
                    </p>
                )}
                <button className="bg-orange-500 text-white py-2 sm:py-3 rounded-lg mt-4 text-sm sm:text-base">
                    {currentState === "Sign Up" ? "Create account" : "Login"}
                </button>
            </form>
        </div>

    )
}

export default LoginPopup
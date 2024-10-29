import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextPorvider = (props) => {
    const [totalItems, setTotalItems] = useState(0);
    const [cartItems, setCartItems] = useState(0);
    const AddToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
            setTotalItems((prev) => prev + 1);


        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            setTotalItems((prev) => prev + 1);

        }



    };
    const RemoveFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        setTotalItems((prev) => prev - 1);

    }
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])
    const contextValue = {
        food_list
        , cartItems
        , setCartItems
        , RemoveFromCart
        , AddToCart
        , totalItems
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextPorvider;
import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category, setCategory }) => {
    const { food_list } = useContext(StoreContext);
    console.log(category)
    return (
        <div className='flex flex-col text-center items-center justify-center my-10 '>
            <h1 className="md:text-4xl text-2xl  font-medium flex  ">- Top <p className=' mx-2 text-orange-500'>Dishes</p> Near You -</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-7  " >
                {food_list.map((item) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem key={item._id} _id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        );
                    }
                })

                }
            </div>
        </div>
    )
}

export default FoodDisplay
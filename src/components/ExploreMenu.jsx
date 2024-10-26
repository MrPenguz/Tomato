import React from 'react';
import { assets, menu_list } from '../assets/frontend_assets/assets';

const ExploreMenu = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center gap-2 ">
                <h1 className="text-4xl font-medium flex  ">- Explore <p className=' mx-2 text-orange-500'>Our</p> Menu -</h1>
                <p className="text-base  my-5">
                    Discover a menu bursting with bold flavors and fresh ingredients. From light bites to hearty entrées, each dish promises to delight your taste buds!

                </p>
            </div>
            <hr />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-6   text-center border-t border-t-orange-500 py-5">
                {menu_list.map((item, index) => (
                    <div key={index} className="flex flex-col items-center  gap-4 hover:opacity-80 hover:scale-110 duration-300 ease-in-out">
                        <img src={item.menu_image} alt="" className="w-[50%] xl:w-[75%] h-auto object-contain" />
                        <p className="text-xl">{item.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default ExploreMenu;

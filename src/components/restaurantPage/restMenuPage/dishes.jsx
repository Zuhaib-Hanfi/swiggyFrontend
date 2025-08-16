import { useState } from "react";
import DishCard from "./dishCard";

export default function Dishes({ menuItems, foodSelection }) {
    // console.log(menuItems?.itemCards);
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return (
            <div className="w-full flex flex-col gap-2 p-2 overflow-hidden">
                <div className="flex justify-between">
                    <p className="font-bold text-2xl text-shadow-2xs text-shadow-gray-500">{menuItems?.title}</p>
                    <button className="font-bold text-2xl hover:text-gray-300 transition-all duration-300 text-white custom-text" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "▲" : "▼"}</button>
                </div>
                <div className="w-[100%] bg-gray-200 rounded-xl text-gray-200 p-1">.</div>
            </div>
        )
    }


    if ("categories" in menuItems) {
        return (
            <div className="w-full flex flex-col gap-2 p-2 overflow-hidden">

                <p className="font-extrabold text-2xl text-shadow-2xs text-shadow-gray-500">{menuItems?.title}</p>

                <div className="w-full gap-2  p-1.5">
                    {
                        menuItems?.categories?.map((items) => <Dishes key={items?.title} menuItems={items} foodSelection={foodSelection} />)
                    }
                </div>
            </div>
        )
    }

    if (foodSelection === "veg") {
        return (
            <div className="w-full flex flex-col gap-2 p-2 overflow-hidden">
                <div className="flex justify-between">
                    <p className="font-bold text-2xl text-shadow-2xs text-shadow-gray-500">{menuItems?.title}</p>
                    <button className="font-bold text-2xl hover:text-gray-300 transition-all duration-300 text-white custom-text" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "▲" : "▼"}</button>
                </div>
                <div className="w-full gap-2  p-1.5">
                    {
                        menuItems?.itemCards?.filter((food) => "isVeg" in food?.card?.info)?.map((items) => <DishCard key={items?.card?.info?.id} dishInfo={items?.card?.info} />)
                    }
                </div>
            </div>
        )
    }
    else if (foodSelection === "nonVeg") {
        return (
            <div className="w-full flex flex-col gap-2 p-2 overflow-hidden">
                <div className="flex justify-between">
                    <p className="font-bold text-2xl text-shadow-2xs text-shadow-gray-500">{menuItems?.title}</p>
                    <button className="font-bold text-2xl hover:text-gray-300 transition-all duration-300 text-white custom-text" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "▲" : "▼"}</button>
                </div>
                <div className="w-full gap-2  p-1.5">
                    {
                        menuItems?.itemCards?.filter((food) => !("isVeg" in food?.card?.info))?.map((items) => <DishCard key={items?.card?.info?.id} dishInfo={items?.card?.info} />)
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col gap-2 p-2 overflow-hidden">
            <div className="flex justify-between">
                <p className="font-bold text-2xl text-shadow-2xs text-shadow-gray-500">{menuItems?.title}</p>
                <button className="font-bold text-2xl hover:text-gray-300 transition-all duration-300 text-white custom-text" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "▲" : "▼"}</button>
            </div>
            <div className="w-full gap-2  p-1.5">
                {
                    menuItems?.itemCards?.map((items) => <DishCard key={items?.card?.info?.id} dishInfo={items?.card?.info} />)
                }
            </div>
        </div>
    )
}
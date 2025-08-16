import { useEffect, useState } from "react";
import { imageGridCard } from "../../utils/foodData";
import FoodCircle from "../foodCard";
// import FoodCard from "./foodCard";

export default function FoodScroll() {
   
    return (
        <div className="mt-[15vh]">
            <h2 className="text-3xl font-bold ml-[10vw]">What's on your mind?</h2>
            <div className="mx-auto mt-5 pb-5 flex w-[80%] gap-10 overflow-x-scroll custom-scrollbar">
                {
                    imageGridCard.map((foodData) =>
                        <FoodCircle key={foodData.id} foodData={foodData} />
                    )
                }
            </div>
        </div>
    )
}
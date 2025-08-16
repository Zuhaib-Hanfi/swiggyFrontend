import { imageGridCard } from "../utils/foodData";
import FoodCircle from "./foodCard";

export default function FoodScroll() {
    return (
        <div className="max-w-[80%] flex flex-wrap container mx-auto mt-20 justify-center">
            {
                imageGridCard.map((foodData) => 
                    <FoodCircle key={foodData.id} foodData={foodData} />
                )
            }
        </div>

        

    )
}
import { imageGridCards } from "../utils/groceryOpts";
import GroceryCard from "./groceryCard";

function Instamart() {
    return (
        <>
            <h2 className="text-3xl font-bold ml-40 mt-20">Shop groceries on Instamart</h2>
            <div className=" mx-auto mt-10 pb-5 flex w-[80%] gap-10 overflow-x-scroll custom-scrollbar">

                {
                    imageGridCards.map((groceryData) => <GroceryCard key={groceryData.id} groceryData={groceryData} />)
                }
            </div>
        </>
    )
}

export default Instamart;
import { dineoutRestaurants } from "../utils/restData";
import RestCard from "./restCard";
export default function Restaurant() {
    return (
        <>
        <h2 className="text-3xl font-bold ml-40 mt-20">Discover best restaurants on Dineout</h2>
        <div className="flex flex-nowrap justify-center items-center overflow-x-scroll custom-scrollbar w-[80%] container mx-auto mt-10 h-auto gap-10">
            {
                dineoutRestaurants.map((restData) => <RestCard key={restData?.info?.id} restData={restData} />)
            }
        </div>
        </>
    )
}
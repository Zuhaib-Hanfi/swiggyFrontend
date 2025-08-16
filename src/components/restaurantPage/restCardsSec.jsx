import RestCards from "./restCards";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
export default function RestCardsSec() {
    const [restData, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            // const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const proxyServer = "http://localhost:8080/proxy?url=" + encodeURIComponent(swiggyAPI);
            
            try {
                const response = await fetch(proxyServer);
                const data = await response.json();
                const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                if (restaurants) setData(restaurants);
            } catch (err) {
                console.error("Failed to fetch Swiggy data:", err);
            }
        }
        fetchData();
    }, []);

    if (restData.length === 0) {
        return (

            <Shimmer />

        )
    }

    console.log(restData);
    return (
        <>
            <h2 className="text-3xl font-bold mt-15 ml-[10vw]">Restaurants with online food delivery in Delhi</h2>
            <div className="w-[80%] container mx-auto flex justify-center items-center flex-wrap gap-5 mt-10">
                {restData.map((value) =>
                    <RestCards key={value?.info?.id} value={value} />
                )}


            </div>

        </>
    )
}
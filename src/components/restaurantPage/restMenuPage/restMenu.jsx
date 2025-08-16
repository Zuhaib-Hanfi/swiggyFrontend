import { Link, useParams } from "react-router"
import { useState, useEffect } from "react";
// import RestNav from "../restNav";
import Dishes from "./dishes";
import DishCardShimmer from "./shimmer2";
import { FiSearch } from "react-icons/fi";
import RestHeader from "./restHeader";


export default function RestaurantMenu() {
    let { id } = useParams();
    // console.log(id);

    const [restData, setData] = useState([]);
    const [selected, setSelected] = useState(null);
    const [restInfo, setRestInfo] = useState({});
    useEffect(() => {
        async function fetchData() {
            // const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const encodedURL = encodeURIComponent(swiggyAPI);
            // const proxyServer = "http://localhost:8080/proxy?url=";
            const proxyServer = "https://swiggyproxyserver.onrender.com/proxy?url=";
            try {
                const response = await fetch(proxyServer + encodedURL);
                const data = await response.json();
                // const restaurants = data;
                setRestInfo(data?.data?.cards[2]?.card?.card?.info);

                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filteredData = tempData?.filter((items => 'title' in items?.card?.card));
                if (filteredData) setData(filteredData);
            } catch (err) {
                console.error("Failed to fetch Swiggy data:", err);
            }
        }
        fetchData();
    }, []);


    if (restData.length === 0) {
        return (
            <DishCardShimmer />
        )
    }
    return (
        <>

            <RestHeader restInfo={restInfo} />
            <Link to={`/city/delhi/${id}/search`}>
                <div className="w-[70%] flex justify-center gap-4 items-center bg-gray-100 mt-10 mx-auto h-14 rounded-2xl text-gray-500 text-2xl font-bold hover:animate-pulse"><FiSearch />Search for dishes</div>
            </Link>
            <div className="w-[70%] flex justify-items-start gap-4 container mx-auto mt-10">
                <button className={`p-1.5 border-2 rounded-2xl text-2xl ${selected === "veg" ? "bg-green-600 text-white" : "bg-white text-green-600"}`} onClick={() => setSelected(selected === "veg" ? null : "veg")}>◉Veg</button>
                <button className={`p-1.5 border-2 rounded-2xl text-2xl ${selected === "nonVeg" ? "bg-red-600 text-white" : "bg-white text-red-600"}`} onClick={() => setSelected(selected === 'nonVeg' ? null : 'nonVeg')}>▲NonVeg</button>
            </div>
            <div className="w-[70%] flex justify-center items-center flex-col container mx-auto p-2.5 gap-2 ">{
                restData?.map((menuItems) => <Dishes key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelection={selected} />)
            }
            </div>
        </>
    )
}
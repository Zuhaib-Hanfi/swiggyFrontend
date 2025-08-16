// import RestNav from "../restNav";
import { IoArrowBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import DishCard from "./dishCard";

export default function DishSearch() {
    const { id } = useParams();
    const [inputFood, setFood] = useState("");
    const [restData, setData] = useState([]);
    const [restName, setName] = useState("");
    useEffect(() => {
        async function fetchData() {
            // const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const encodedURL = encodeURIComponent(swiggyAPI);
            // const proxyServer = "http://localhost:8080/proxy?url=";
            const proxyServer=" https://swiggyproxyserver.onrender.com/proxy?url=";
            try {
                const response = await fetch(proxyServer + encodedURL);
                const data = await response.json();
                // console.log(data?.data?.cards[2]?.card?.card?.info);
                // const restaurants = data;
                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filteredData = tempData?.filter((items => 'itemCards' in items?.card?.card));
                if (filteredData) setData(filteredData);
                setName(data?.data?.cards[2]?.card?.card?.info?.name);


            } catch (err) {
                console.error("Failed to fetch Swiggy data:", err);
            }

        }

        fetchData();
    }, []);
    // console.log(restData);

    const [dispData, setDispData] = useState([]);
    useEffect(() => {
        const extractedData = restData?.map(menuItems =>
            menuItems?.card?.card?.itemCards?.map(items => items?.card?.info)
        ).flat();
        setDispData(extractedData || []);
    }, [restData])

    // console.log(dispData);
    // const [finalData, setFinalData] = useState([]);
    // useEffect(() => {
    //     const extractedData = dispData?.filter((food) => food?.name?.toLowerCase().includes(inputFood.toLowerCase()))?.map(items => items);
    //     setFinalData(extractedData || []);
    // }, [inputFood,dispData])

    const finalData = dispData?.filter((food) =>
        food?.name?.toLowerCase().includes(inputFood.toLowerCase())
    ) || [];
    console.log(finalData);
    return (
        <>

            <div className="relative w-[70%] mx-auto mt-[20vh] mb-10 flex justify-between border-b-2 border-gray-400 rounded-2xl items-center bg-gradient-to-b from-gray-300  to-gray-50 p-5 text-2xl">

                <p className="font-bold text-3xl m-2 hover:scale-[1.3] transition-all duration-300"> <Link to={`/city/delhi/${id}`}> <IoArrowBack /></Link></p>
                <input className=" absolute left-[10%] p-1 outline-none w-[80%]" type="text" placeholder={`Search in ${restName}`} value={inputFood} onChange={(e) => setFood(e.target.value)} />
                <FiSearch />
            </div>
            <div className="w-[70%] gap-2  p-1.5 mx-auto container">
                {
                    finalData?.map((items, index) => (
                        <DishCard key={`${items?.id || 'no-id'}-${index}`} dishInfo={items} />
                    ))
                }
            </div>
        </>
    )
}

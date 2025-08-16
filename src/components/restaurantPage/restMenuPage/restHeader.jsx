import { FaStar } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

export default function RestHeader({ restInfo }) {
    return (
        <div className="w-[70%] mt-[20vh] mx-auto bg-gradient-to-b from-white to-gray-200 rounded-2xl shadow-lg p-6">
            <div className="flex items-center">
                <p className="font-bold text-3xl m-2 hover:scale-[1.3] transition-all duration-300"> <Link to={`/restaurants`}> <IoArrowBack /></Link></p>
                {/* Restaurant Name */}
                <p className="text-3xl font-extrabold text-gray-800">{restInfo?.name}</p>
            </div>
            {/* Restaurant Info Card */}
            <div className="mt-6 p-5 gap-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col items-start">

                {/* Rating + Cost */}
                <p className="flex items-center text-lg font-semibold text-gray-700">
                    <span className="flex justify-center items-center mr-3 text-white border-2 border-green-600 p-1 rounded-full bg-green-600 shadow-sm">
                        <FaStar className="text-sm" />
                    </span>
                    {restInfo?.avgRatingString}
                    <span className="text-gray-500 ml-1">({restInfo?.totalRatingsString})</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-700">{restInfo?.costForTwoMessage}</span>
                </p>

                {/* Cuisines */}
                <div className="text-orange-500 text-lg underline decoration-2">
                    {restInfo?.cuisines?.join(", ")}
                </div>

                {/* Location */}
                <p className="text-lg font-medium">
                    Outlet <span className="text-gray-500">{restInfo?.areaName}</span>
                </p>

                {/* Delivery Time */}
                <p className="text-lg font-medium text-gray-800">
                    {restInfo?.sla?.slaString}
                </p>
            </div>
        </div>

    );
}

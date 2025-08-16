import { Link } from "react-router"
export default function RestCards({ value }) {
    // console.log(value.id);
    // console.log("HEY")
    return (
        <Link to={"/city/delhi/"+value?.info?.id}>
            <div className="flex flex-col w-80 sm:w-96 bg-white rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden group">

                {/* Image Section */}
                <div className="relative w-full h-52">
                    <img
                        className="w-full h-full object-cover group-hover:brightness-90 transition duration-200"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${value?.info?.cloudinaryImageId}`}
                        alt={value?.info?.name}
                    />
                    <p className="absolute bottom-2 left-2 text-white font-semibold text-lg bg-black/40 px-2 py-1 rounded-xl">
                        {value?.info?.name}
                    </p>
                    <p className="absolute bottom-2 right-2 text-white font-semibold text-sm bg-black/40 px-2 py-1 rounded">
                        ⭐ {value?.info?.externalRatings?.aggregatedRating?.rating || "N/A"}
                    </p>
                </div>

                {/* Info Section */}
                <div className="px-4 py-3 flex flex-col gap-1">
                    <p className="text-gray-700 text-l font-bold truncate">
                        {value?.info?.cuisines?.slice(0, 3).join(", ") || "Cuisines"}
                    </p>
                    <p className="text-gray-500 text-sm">{value?.info?.locality || "Location"}</p>
                </div>

            </div>
        </Link>

    )
}
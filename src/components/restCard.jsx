export default function RestCard({ restData }) {
    return (
        <a href={restData?.cta?.link}>
            <div className="flex flex-col min-w-96 pb-2.5 border-0 rounded-2xl shadow-2xl/30 overflow-hidden hover:scale-[1.03] duration-200 ease-linear">
                <div className="w-96 h-52 relative">
                    <img className="w-96 h-52 " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + restData?.info?.mediaFiles[0]?.url} />
                    <p className="absolute bottom-1 left-1 font-bold text-white font-serif">{restData?.info?.name}</p>
                    <p className="absolute bottom-1 right-1 font-bold text-white font-serif">{restData?.info?.rating?.value}</p>
                </div>
                <div className="flex justify-between px-3 mt-1">
                    <p className="text-gray-700  ">{restData?.info?.cuisines[0]},{restData?.info?.cuisines[1]}</p>
                    <p className="text-gray-700 ">{restData?.info?.costForTwo}</p>
                </div>
                <div className="flex justify-between px-3">
                    <p className="text-gray-700  ">{restData?.info?.locationInfo?.formattedAddress}</p>
                    <p className="text-gray-700  ">{restData?.info?.locationInfo?.distanceString}</p>
                </div>
                <div className="mt-3 flex justify-between px-3 bg-green-600 w-[95%] mx-auto rounded-[8px] py-1">
                    <p className="text-white font-bold font-serif">{restData?.info?.offerInfoV3?.vendorOffer?.title} {restData?.info?.offerInfoV3?.vendorOffer?.subtitle}</p>
                    <p className="text-white font-bold font-serif">{restData?.info?.offerInfoV3?.vendorOffer?.subtext}</p>
                </div>
                <div className="mt-3 flex justify-between px-3 bg-green-200 w-[95%] mx-auto rounded-[8px] py-1">
                    <p className="text-green-600 font-bold font-serif">{restData?.info?.customerOffer?.infos[0]?.description}</p>
                    
                </div>
            </div>
        </a>
    )
}
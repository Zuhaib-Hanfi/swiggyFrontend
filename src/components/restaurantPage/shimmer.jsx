export default function Shimmer() {
    return (
        <div className="flex justify-center my-20 gap-5 w-[80%] overflow-x-hidden container mx-auto">
            <div className="animate-pulse flex flex-col w-80 sm:w-96 bg-gray-300 rounded-2xl shadow-xl overflow-hidden">
                {/* Image Skeleton */}
                <div className="relative w-full h-52 bg-gray-400"></div>

                {/* Text Skeletons */}
                <div className="flex justify-between p-4">
                    <div className="h-4 w-1/2 bg-gray-400 rounded"></div>
                    <div className="h-4 w-10 bg-gray-400 rounded"></div>
                </div>
            </div>

            <div className="animate-pulse flex flex-col w-80 sm:w-96 bg-gray-300 rounded-2xl shadow-xl overflow-hidden">
                {/* Image Skeleton */}
                <div className="relative w-full h-52 bg-gray-400"></div>

                {/* Text Skeletons */}
                <div className="flex justify-between p-4">
                    <div className="h-4 w-1/2 bg-gray-400 rounded"></div>
                    <div className="h-4 w-10 bg-gray-400 rounded"></div>
                </div>
            </div>


            <div className="animate-pulse flex flex-col w-80 sm:w-96 bg-gray-300 rounded-2xl shadow-xl overflow-hidden">
                {/* Image Skeleton */}
                <div className="relative w-full h-52 bg-gray-400"></div>

                {/* Text Skeletons */}
                <div className="flex justify-between p-4">
                    <div className="h-4 w-1/2 bg-gray-400 rounded"></div>
                    <div className="h-4 w-10 bg-gray-400 rounded"></div>
                </div>
            </div>

            
        </div >
    )
}
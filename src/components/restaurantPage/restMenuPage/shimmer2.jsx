export default function DishCardShimmer() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center gap-8 p-4">

            {/* NAVBAR SHIMMER */}
            <div className="w-full h-16 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-8 animate-pulse fixed top-0">
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
                <div className="flex gap-4">
                    <div className="h-6 w-16 bg-gray-300 rounded"></div>
                    <div className="h-6 w-16 bg-gray-300 rounded"></div>
                    <div className="h-6 w-16 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* CARD SHIMMER */}
            <div className="w-[80vw] flex justify-center items-center gap-2 p-6 rounded-2xl border-b-2 border-gray-400 bg-gray-100 animate-pulse">
                {/* Left Section */}
                <div className="w-[70%] flex flex-col gap-2">
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                    <div className="h-6 w-48 bg-gray-300 rounded"></div>
                    <div className="h-5 w-20 bg-gray-300 rounded"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    <div className="h-4 w-full bg-gray-300 rounded"></div>
                </div>

                {/* Right Section */}
                <div className="w-[20%] flex justify-center items-center relative">
                    <div className="rounded-2xl overflow-hidden">
                        <div className="h-[200px] w-[200px] bg-gray-300 rounded-2xl"></div>
                    </div>
                    <div className="absolute bottom-[-9px] w-[30%] h-8 bg-gray-300 rounded-xl border-2 border-white"></div>
                </div>
            </div>

            {/* //second card */}
            <div className="w-[80vw] flex justify-center items-center gap-2 p-6 rounded-2xl border-b-2 border-gray-400 bg-gray-100 animate-pulse">
                {/* Left Section */}
                <div className="w-[70%] flex flex-col gap-2">
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                    <div className="h-6 w-48 bg-gray-300 rounded"></div>
                    <div className="h-5 w-20 bg-gray-300 rounded"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    <div className="h-4 w-full bg-gray-300 rounded"></div>
                </div>

                {/* Right Section */}
                <div className="w-[20%] flex justify-center items-center relative">
                    <div className="rounded-2xl overflow-hidden">
                        <div className="h-[200px] w-[200px] bg-gray-300 rounded-2xl"></div>
                    </div>
                    <div className="absolute bottom-[-9px] w-[30%] h-8 bg-gray-300 rounded-xl border-2 border-white"></div>
                </div>
            </div>
        </div>
    );
}

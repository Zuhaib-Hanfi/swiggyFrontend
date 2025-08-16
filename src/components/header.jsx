import {Link} from "react-router";

function Header() {

    return (
        <header className="bg-[#ff5200] font-serif">
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="logo" />

                    <div className="text-white text-base font-bold flex flex-col md:flex-row items-center gap-4 md:gap-10 text-center">
                        <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                        <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                        <a className="border border-white px-4 py-3 rounded-2xl" target="_blank" href="#getApp">Get the App</a>
                        <a className="bg-black px-4 py-3 rounded-2xl" target="_blank" href="#">Sign in</a>
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                <div className="max-w-[60%] text-white font-bold text-5xl text-center container mx-auto">Order food & groceries. Discover best restaurants. Swiggy it!</div>
                <div className="max-w-[70%] container mx-auto flex justify-center gap-5 m-10">
                    <input className="bg-white w-[35%] text-xl px-6 py-4 rounded-2xl" type="text" placeholder="Delhi, India" />
                    <input className="bg-white w-[50%] text-xl px-6 py-4 rounded-2xl" type="text" placeholder="Search for restaurant, item or more" />
                </div>
            </div>
            <div className="flex justify-center ">
                <Link to="/restaurants">
                    <img className="hover:scale-[1.05] duration-200 ease-linear h-90 w-100" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="card1" />
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img className="hover:scale-[1.05] duration-200 ease-linear h-90 w-100" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="card2" />
                </a>
                <Link to="/restaurants">
                    <img className="hover:scale-[1.05] duration-200 ease-linear h-90 w-100" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="card3" />
                </Link>
            </div>
        </header>
    )
}

export default Header;
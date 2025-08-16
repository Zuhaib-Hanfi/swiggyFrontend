export default function Footer() {
    return (
        <footer className=" flex justify-center items-center gap-10 p-10">
            <p className="text-gray-800 font-bold font-sans text-2xl">For better experience, download the Swiggy app now</p>
            <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
                <img className="hover:scale-[1.1] duration-300 ease-linear" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="AppStore" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1">
                <img className="hover:scale-[1.1] duration-300 ease-linear" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="PlayStore" />
            </a>
        </footer>
    )
}
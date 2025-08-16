import { useSelector } from "react-redux";
import CheckoutCard from "./checkoutCards";
import { FiShoppingCart } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

export default function Checkout() {
    const cartData = useSelector((state) => state.cartSlice.items);
    // console.log(cartData);
    function checkout() {
        alert("......Coming Soon......");
    }
    return (
        <>
            <div className="flex justify-center items-center w-full mt-10">
               <Link to={"/restaurants"}> <p className="fixed top-10 left-10 text-4xl text-[#ff5600] font-extrabold hover:text-green-600 hover:scale-[1.05]"><IoArrowBack/></p></Link>
                <p className="flex items-center gap-4 text-5xl text-[#ff5600] font-extrabold custom-text"><FiShoppingCart /> Cart</p>
                <button className="fixed top-10 right-10 bg-[#ff5600] border-0 rounded-2xl p-2 text-3xl text-white font-extrabold hover:bg-green-600 hover:scale-[1.04] transition-all duration-300"
                    onClick={() => checkout()}>
                    CheckOut
                </button>
            </div>
            <div className="w-[50%] flex flex-col justify-center items-center container mx-auto mt-[10vh]  ">
                {
                    cartData.map((item) => <CheckoutCard key={item.id} dishInfo={item} />)
                }

            </div>
        </>
    );
}
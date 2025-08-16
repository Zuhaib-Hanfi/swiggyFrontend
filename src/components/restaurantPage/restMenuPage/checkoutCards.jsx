import { useState } from "react";
import { TiStarHalfOutline } from "react-icons/ti";
import { addItems, incrementCart, decrementCart } from "../../../stored/cartSlice";
import { useDispatch, useSelector } from "react-redux";



export default function CheckoutCard({ dishInfo }) {
    let num = dishInfo?.defaultPrice;
    if (num) {
        num = num / 100;
    }
    else {
        // num="!!Final Price at Checkout!!"
        num = dishInfo?.price;
        num = num / 100;
    }
    let rating = dishInfo?.ratings?.aggregatedRating?.rating;
    let noOfRatings = dishInfo?.ratings?.aggregatedRating?.ratingCountV2;
    if (!rating) {
        rating = "2.9";
        noOfRatings = 11;
    }

    // const [count, setCount] = useState(0);


    const cartData = useSelector((state) => state.cartSlice.items);
    const dishData = cartData.find((item) => dishInfo.id === item.id);
    let count = 0;
    if (dishData) {
        count = dishData.quantity;
    }
    const dispatch = useDispatch();

    function handleAdd() {
        // setCount(1);
        dispatch(addItems(dishInfo));
    };
    function handleInc() {
        // setCount(count + 1);
        dispatch(incrementCart(dishInfo));
    };
    function handleDec() {
        // setCount(count - 1);
        dispatch(decrementCart(dishInfo));
    };

    return (
        <div className=" relative w-full flex justify-between gap-2 mb-2 p-6 rounded-2xl border-b-2 border-gray-400 bg-gradient-to-b from-gray-200  to-gray-50 hover:scale-[0.95] transition-all duration-300">
            <p className="absolute top-[-10] left-[-5] text-3xl text-red-600 font-extrabold oldstyle-nums  custom-text">{dishInfo.quantity}</p>
            <div className="w-[70%] flex flex-col gap-2">
                <p className={`${(dishInfo?.isVeg) ? "text-green-600" : "text-red-600"}`}>{(dishInfo?.isVeg) ? "◉" : "▲"} {dishInfo?.category}</p>
                <p className="font-bold text-xl text-gray-500">{dishInfo?.name}</p>
                <p className="font-bold">₹{num}</p>
                <p className="text-green-800 font-bold flex items-center"><TiStarHalfOutline />{rating} ({noOfRatings})</p>
                <p className="text-gray-600">{dishInfo?.description}</p>
            </div>
            <div className="w-[20%] flex justify-center items-center relative hover:scale-[1.02] transition-all duration-300">
                {/* Image Wrapper */}
                <div className="rounded-2xl w-[200px] h-[200px] relative">
                    <img
                        className="w-full h-full object-cover shadow-2xl shadow-gray-400 rounded-2xl"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${dishInfo?.imageId}`}
                        alt="Dish"
                    />

                    {/* Add Button */}
                    {
                        (count == 0) ?
                            (
                                <button onClick={() => handleAdd()} className="font-extrabold text-xl text-green-800 bg-gradient-to-b from-gray-200 to-gray-50 absolute bottom-[-10] left-1/2 -translate-x-1/2 border-0 rounded-xl px-3 py-1 hover:scale-[1.05] transition-all">
                                    ADD
                                </button>
                            ) : (
                                <div className="flex gap-4 justify-center items-center font-extrabold text-2xl text-green-800 bg-gradient-to-b from-gray-200 to-gray-50 absolute bottom-[-10] left-1/2 -translate-x-1/2 border-0 rounded-xl px-3 py-1 hover:scale-[1.05] transition-all">
                                    <button onClick={() => handleDec()}>-</button>
                                    <span>{count}</span>
                                    <button onClick={() => handleInc()}>+</button>
                                </div>
                            )
                    }

                </div>
            </div>

        </div>
    )
}

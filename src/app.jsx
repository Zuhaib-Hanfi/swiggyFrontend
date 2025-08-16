import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/home";
import RestPage from "./components/restaurantPage/restuaurantPage";
import RestaurantMenu from "./components/restaurantPage/restMenuPage/restMenu";
import DishSearch from "./components/restaurantPage/restMenuPage/dishSearch";
import SecondPage from "./components/restaurantPage/secondPage";
import { store } from "./stored/store";
import { Provider } from "react-redux"
import Checkout from "./components/restaurantPage/restMenuPage/checkout";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route element={<SecondPage />}>
                            <Route path="/restaurants" element={<RestPage />}></Route>
                            <Route path="/city/delhi/:id" element={<RestaurantMenu />}></Route>
                            <Route path="/city/delhi/:id/search" element={<DishSearch />}></Route>
                        </Route>
                        <Route path="/checkout"element={<Checkout/>}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>

        </>
    )
}

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<App />);
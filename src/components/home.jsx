import Header from "./header";
import FoodScroll from "./foodScroll";
import Instamart from "./groceryScroll";
import Restaurant from "./restScroll";
import GetAppBanner from "./getAppBanner";
import Footer from "./footer";

export default function Home() {
    return (
        <>
            <Header />
            <FoodScroll />
            <Instamart />
            <Restaurant />
            <GetAppBanner />
            <Footer />
        </>
    )
};
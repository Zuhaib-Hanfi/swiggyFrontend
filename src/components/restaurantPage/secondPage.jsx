import RestNav from "./restNav";
import { Outlet } from "react-router";

export default function SecondPage() {
    return (
        <>
            <RestNav />
            <Outlet />
        </>
    )
}
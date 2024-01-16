import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./Navbar";
import Footer from './Footer';

const RootLaytout = () => {
    return (
        <>
            <NavigationBar/>
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLaytout;

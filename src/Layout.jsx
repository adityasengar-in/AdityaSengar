import React from "react";
import DotGrid from "./components/DotGrid";
import Navbar from "./components/Navbar";
import {Outlet} from 'react-router-dom'
function Layout() {
    return(
        <>
        <DotGrid />
        <Outlet />
        <Navbar />
        </>
    )
}

export default Layout
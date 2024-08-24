import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";

function Layout(){
    return(
        <div>
            <Header />
            <main>
            <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default Layout;

//Not in use currently
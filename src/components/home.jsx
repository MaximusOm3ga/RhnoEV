import React from "react";
import Footer from "./Footer"
import Header from "./header"
import rhynologo from "./rhyno-logo.png"


function MainPage(){
    return(
        <div className="themainpage">
            <Header />
            <h1 className="mainheading">Welcome to Rhyno</h1>
            <h2 className="intro">Let's Elevate Your Ride Experience With Rhyno: </h2>
            <h2 className="text-animation">Where Superiority Meets <span></span></h2>
            <a href="about"><img src={rhynologo}></img></a>
            <Footer />
        </div>
    )
}

export default MainPage;
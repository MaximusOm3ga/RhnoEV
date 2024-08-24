import React from "react";
import AboutUs from "./about";
import { Link } from "react-router-dom";
import rhynologo from "./rhyno-logo.png"

function Header(){
  return(
    <div>
      <header>
        {/* <img src={rhynologo} ></img> */}
        <a href="/">Home</a>
        <a href="about">About Us</a>
        <a href="contact">Contact Us</a>
        <a href="products">Products</a>
        
      </header>
    </div>
  )
}

export default Header;
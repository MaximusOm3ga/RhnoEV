import React from "react";
import scooter from "./electi_veh.png";
import Header from "../header";
import Footer from "../Footer";
const name_scoot="Lite";

function ProductsPage1(){
    return(
        <div>
            <Header />
        <div className="products">
            <img src={scooter} ></img>
            <h3>Rhyno SE03 {name_scoot}</h3>
            <button className="redbtn">Cherry Red</button>
            <button className="greenbtn">Apple Green</button>
            <button className="bluebtn">Violet Blue</button>
            {/* <button className="buynow">BUY NOW!</button> */}
            <p className="productDescrip">We’ve had enough of the EVs looking and feeling like
                                            fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
                                            ending up spending weeks and months at service stations for complex repairs. We
                                            took a bold step of making something raw, rugged, and practical. We kept it so
                                            simple that even your trusted local mechanic can understand and repair most of it. If
                                            you have reached this far, why not to take a test ride? Click here to locate your
                                            nearest dealership or book a test ride at your home!
            </p>
            <Footer />
        </div>
        </div>
    )
    

}

export default ProductsPage1;
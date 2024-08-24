import React from "react";
import scooter from "./electi_veh.png";

const name_scoot="";

function ProductsPage2(){
    return(
        <div className="products">
            <img src={scooter} ></img>
            <h3>Rhyno SE03 {name_scoot}</h3>
            <button className="redbtn">Red</button>
            <button className="greenbtn">Green</button>
            <button className="bluebtn">Blue</button>
        </div>
    )
    

}

export default ProductsPage2;
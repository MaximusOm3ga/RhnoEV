import React from "react";
import Header from "./header";
import Footer from "./Footer";

function ContactUs(){
    return(
        <div >
            <Header />
            <div className="contacinfo">
                <p>Mail: info@rhyno.in</p>
                <p>Mobile no.: +91-9023987528</p>
                <p>Location: Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs;
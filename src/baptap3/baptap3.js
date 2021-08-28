import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Smartphone from "./smartphone";
import Laptop from "./laptop";
import Footer from "./footer";


function Baitap3 (){
    return (
        <>
        <div className="bg-dark"  style={{width:'100%'}}>
        <Header />
        <div className="container-fluid">
        <Carousel />
        </div>
        <Smartphone />
        
        <Laptop />
        <Footer />
        </div>
        </>
    )
    
}

export default Baitap3;
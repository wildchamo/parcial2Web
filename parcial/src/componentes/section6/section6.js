import React from "react";
import Titulo2 from "../titulo2.js";
 import Cards from "./Cards.js";
 import BotonS6 from "./BotonS6.js";

const Section6= function(){
    return(
        <section className="section6">
        <Titulo2  title={{title:"Ver más"}}/>   
        <Cards/>
        <BotonS6/> 
        </section>
        )
}

export default Section6;
import React from "react";
import Cover from "../cover.js";
import Info from "../info.js";
import cover1 from "../../images/cover1.png";
import logo1 from "../../images/logocover1.webp";

 const Section1= function(){
    return(
        <section className="section1">
       <Cover data={{logo:logo1 ,cover: cover1}}/>
       <Info data2={{title:"Bienvenido a PlayStation Plus",info:"Potencia tu experiencia PlayStation con multijugador en línea, juegos mensuales, descuentos exclusivos y mucho más.", boton: "Más información" }}/>
        </section>
        )
}

export default Section1;
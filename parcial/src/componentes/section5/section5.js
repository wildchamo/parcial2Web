import React from "react";
import Cover from "../cover.js";
import Info from "../info.js";
import cover2 from "../../images/cover2.png";
import logo2 from "../../images/logocover2.webp";

 const Section5= function(){
    return(
        <section className="section5">
       <Cover data={{logo:logo2 ,cover: cover2}}/>
       <Info data2={{title:"Bienvenido a PlayStation Plus",info:"Potencia tu experiencia PlayStation con multijugador en línea, juegos mensuales, descuentos exclusivos y mucho más.", boton: "Más información" }}/>
        </section>
        )
}

export default Section5;
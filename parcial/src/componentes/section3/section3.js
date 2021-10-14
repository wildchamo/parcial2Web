import React from "react";
import Slider1  from "../slider1.js";
import HeaderSlider from "../headerslider.js";
import '../../estilos/section3.css'


 const Section3= function(){
    return(
        <section className="section3">
       <HeaderSlider data={{title:"Nuevos Juegos" ,info: "Ver todos"}}/>
       <Slider1/>
        </section>
        )
}

export default Section3;
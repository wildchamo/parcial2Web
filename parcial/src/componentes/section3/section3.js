import React from "react";
import Slider  from "../slider.js";
import HeaderSlider from "../headerslider.js";
import '../../estilos/section3.css'


 const Section1= function(){
    return(
        <section className="section3">
       <HeaderSlider data={{title:"Nuevos Juegos" ,info: "Ver todos"}}/>
       <Slider/>
        </section>
        )
}

export default Section1;
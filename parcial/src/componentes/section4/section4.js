import React from "react";
import Slider2  from "../slider2.js";
import HeaderSlider from "../headerslider.js";
import '../../estilos/section3.css'


 const Section3= function(){
    return(
        <section className="section3">
       <HeaderSlider data={{title:"Próximamente" ,info: "Ver todos"}}/>
       <Slider2/>
        </section>
        )
}

export default Section3;
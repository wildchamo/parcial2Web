import React from "react";
import Slider  from "../slider.js";
import HeaderSlider from "../headerslider.js";
import '../../estilos/section3.css'
import slider1 from '../../images/slider1.webp';
import slider2 from '../../images/slider2.webp';
import slider3 from '../../images/slider3.webp';
import slider4 from '../../images/slider4.webp';

 const Section1= function(){
    return(
        <section className="section3">
       <HeaderSlider data={{title:"Nuevos Juegos" ,info: "Ver todos"}}/>
       <Slider dataS={{src:slider1,info:"eFootball™ 2022"},{src:slider2,info:"Hell let loose"},{src:slider3,info:"Enlisted"},{src:slider4,info:"FIFA 22 para PS4™"}}/>
        </section>
        )
}

export default Section1;
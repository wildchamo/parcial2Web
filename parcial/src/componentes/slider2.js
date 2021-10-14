import React from "react";
import ElementoSlider2 from "./elementoSlider2.js";
import slider1 from '../images/section41.webp';
import slider2m from '../images/section42.webp';
import slider3 from '../images/section43.webp';
import slider4 from '../images/section44.webp';
import '../estilos/slider.css';


const Slider2= function(){
    return(
       <div className="slider">
           <ElementoSlider2 data={{src:slider1,info:"eFootball™ 2022"}}/>
            <ElementoSlider2 data={{src:slider2m,info:"Hell let loose"}}/>
           <ElementoSlider2 data={{src:slider3,info:"Enlisted"}}/>
           <ElementoSlider2 data={{src:slider4,info:"FIFA 22 para PS4™"}}/>
       </div>
        )
}

export default Slider2;
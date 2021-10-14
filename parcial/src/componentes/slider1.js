import React from "react";
import ElementoSlider from "./elementoSlider.js";
import slider1m from '../images/slider1.webp';
import slider2 from '../images/slider2.webp';
import slider3 from '../images/slider3.webp';
import slider4 from '../images/slider4.webp';
import '../estilos/slider.css';


const Slider1= function(){
    return(
       <div className="slider">
           <ElementoSlider data={{src:slider1m,info:"eFootball™ 2022",precio:"Gratuito"}}/>
            <ElementoSlider data={{src:slider2,info:"Hell let loose",precio:"US$39.99"}}/>
           <ElementoSlider data={{src:slider3,info:"Enlisted",precio:"Gratuito"}}/>
           <ElementoSlider data={{src:slider4,info:"FIFA 22 para PS4™",precio:"US$59.99"}}/>
       </div>
        )
}

export default Slider1;
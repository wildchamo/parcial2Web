import React from "react";
import Titulo2 from "./titulo2";
import BotonSlider from "./botonslider.js";
import '../estilos/headerslider.css'
const HeaderSlider= function(props){
    const {title,info}=props.data;
    return(
       <div className="headerSlider">
        <Titulo2 title={{title:title}}/>
        <BotonSlider/>
       </div>
        )
}

export default HeaderSlider;
import React from "react";
import '../estilos/elementoSlider.css'
const ElementoSlider= function(props){
    const {src,info,precio}=props.data;
    return(
       <div className="elementoSlider">
        <img src={src}/>
        <p>{info}</p>
        <p className="precio">{precio}</p>
       </div>
        )
}

export default ElementoSlider;
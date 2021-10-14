import React from "react";
import '../estilos/elementoSlider.css'
const ElementoSlider= function(props){
    const {src,info}=props.data;
    return(
       <div className="elementoSlider">
        <img src={src}/>
        <p>{info}</p>
       </div>
        )
}

export default ElementoSlider;
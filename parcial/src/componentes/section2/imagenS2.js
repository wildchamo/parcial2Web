import React from "react";
import '../../estilos/imagenS2.css';
 const imagenS2= function(props){
    const {source}=props.source;
    return(
        <img className="imagenS2" src={source}>
        </img>
        )
}

export default imagenS2;
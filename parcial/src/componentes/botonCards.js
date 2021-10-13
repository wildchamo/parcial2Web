import React from "react";
import "../estilos/botonCard.css";


const BotonCard= function(props){
    const {title}=props.title;
    return (
        <button className="botonCard">{title}</button>
    )
}

export default BotonCard;
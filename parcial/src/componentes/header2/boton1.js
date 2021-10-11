import React from "react";
import '../../estilos/boton1.css';

const Boton1= function(props){
    const {title}=props.title;
    return (
        <div>
            <p>{title}</p>
            <img src="../../images/rayita.png"></img>
        </div>

    )
}
export default Boton1;
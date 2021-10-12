import React from "react";
import '../../estilos/boton2.css';

const Boton2= function(props){
    const {title}=props.title;
    return (
        <div className="boton2">
            <p>{title}</p>
            
        </div>

    )
}
export default Boton2;
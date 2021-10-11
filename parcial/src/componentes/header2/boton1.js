import React from "react";
import '../../estilos/boton1.css';
import rayita from "../../images/rayita.png";


const Boton1= function(props){
    const {title}=props.title;
    return (
        <div className="boton1">
            <p>{title}</p>
            <img src={rayita}></img>
        </div>

    )
}
export default Boton1;
import React from "react";
import '../../estilos/iconTexto.css';
import iconMundo from '../../images/iconMundo.png';


const iconTexto= function(){
    return (
        <div className="iconTexto">
            <img src={iconMundo}/>
            <p>País/región: Colombia</p>
        </div>
    )
}

export default iconTexto;
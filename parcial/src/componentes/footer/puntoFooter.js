import React from 'react';
import '../../estilos/puntoF.css';


const PuntoF= function(props){
    const {title}=props.title;
    return (
        <div className="PuntoF">
            <p>{title}</p>
        </div>

    )
}
export default PuntoF;
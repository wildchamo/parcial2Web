import React from 'react';
import PuntoF from'./puntoFooter.js';
import '../../estilos/barraFooter.css'

const barraFooter3= function(props){
    return(
        <div className="barraFooter"> 
            <PuntoF title={{title:"Facebook"}}/>
            <PuntoF title={{title:"Twitter"}}/>
            <PuntoF title={{title:"YouTube"}}/>
            <PuntoF title={{title:"Instagram"}}/>
            <PuntoF title={{title:"Aplicación Android"}}/>
            <PuntoF title={{title:"Aplicación iOS"}}/>
            
        </div>
        )
}

export default barraFooter3;

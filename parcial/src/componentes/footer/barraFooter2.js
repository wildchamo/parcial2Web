import React from 'react';
import PuntoF from'./puntoFooter.js';
import '../../estilos/barraFooter.css'

const barraFooter2= function(props){
    return(
        <div className="barraFooter"> 
            <PuntoF title={{title:"Términos de servicio de PSN"}}/>
            <PuntoF title={{title:"Política de cancelación de PS Store"}}/>
            <PuntoF title={{title:"Avisos de salud"}}/>
            <PuntoF title={{title:"Acerca de las clasificaciones"}}/>
            
        </div>
        )
}

export default barraFooter2;

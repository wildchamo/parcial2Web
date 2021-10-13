import React from 'react';
import PuntoF from'./puntoFooter.js';
import '../../estilos/barraFooter.css'

const barraFooter1= function(props){
    return(
        <div className="barraFooter"> 
            <PuntoF title={{title:"Asistencia"}}/>
            <PuntoF title={{title:"Politica de privacidad"}}/>
            <PuntoF title={{title:"Terminos de uso del sitio"}}/>
            <PuntoF title={{title:"Mapa del sitio"}}/>
            <PuntoF title={{title:"PlayStation Studios"}}/>
            <PuntoF title={{title:"Legal"}}/>
            <PuntoF title={{title:"Acerca de SIE"}}/>
            
        </div>
        )
}

export default barraFooter1;

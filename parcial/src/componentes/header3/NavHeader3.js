import React from "react";
import '../../estilos/NavHeader3.css';
import Boton2 from "./boton2";


const NavHeader3= function(){
    return(
        <div className="NavHeader3">      
            <Boton2 title={{title:"Más reciente"}}/>
            <Boton2 title={{title:"Colecciones"}}/>
            <Boton2 title={{title:"Ofertas"}}/>
            <Boton2 title={{title:"PS5"}}/>
            <Boton2 title={{title:"Suscripciones"}}/>
            <Boton2 title={{title:"Explorar"}}/>
        </div>
        )
}

export default NavHeader3;
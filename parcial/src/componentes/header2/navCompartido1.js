import React from "react";
import '../../estilos/navCompartido1.css';
import Boton1 from "./boton1";
import LogoPlay from "./logoPlay";

const NavCompartido1= function(){
    return(
        <div className="navCompartido1"> 
            <LogoPlay/>        
            <Boton1 title={{title:"Juegos"}}/>
            <Boton1 title={{title:"Hardware"}}/>
            <Boton1 title={{title:"Servicios"}}/>
            <Boton1 title={{title:"Noticias"}}/>
            <Boton1 title={{title:"Tienda"}}/>
            <Boton1 title={{title:"Asistencia"}}/>
        </div>
        )
}

export default NavCompartido1;

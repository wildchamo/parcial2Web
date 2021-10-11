import React from "react";
import '../../estilos/navCompartido1.css';
import Boton1 from "./boton1";

const NavCompartido1= function(){
    return(
        <div className="navCompartido1">         
            <Boton1 title={{title:"adios"}}/>
            <Boton1 title={{title:"hola"}}/>
        </div>
        )
}

export default NavCompartido1;

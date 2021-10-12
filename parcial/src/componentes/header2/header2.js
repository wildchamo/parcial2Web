import React from "react";
import NavCompartido1 from "./navCompartido1";
import NavCompartido2 from "./navCompartido2";
import '../../estilos/header2.css';

const Header2= function(){
    return(
        <div className="header2">
            <NavCompartido1/>
            <NavCompartido2/>
            
        </div>
        )
}

export default Header2;
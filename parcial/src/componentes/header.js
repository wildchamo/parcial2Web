import React from "react";
import '../estilos/header.css';
import logo from "../images/sony_logo.svg";

const Header= function(){
    return(
        <header>
            <img src={logo}></img>
        </header>
        )
}

export default Header;
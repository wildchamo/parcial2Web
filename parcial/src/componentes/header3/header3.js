import React from "react";
import LogoHeader3 from "./logoHeader3.js";
import NavHeader3 from "./NavHeader3.js";
import '../../estilos/header3.css';

const Header3= function(){
    return(
        <div className="header3">
            <LogoHeader3/>
            <NavHeader3/>
        </div>
        )
}

export default Header3;
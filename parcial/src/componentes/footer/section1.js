import React from "react";
import '../../estilos/section1Footer.css';
import logo from '../../images/logoFooter.png';
import iconMundo from '../../images/iconMundo.png';

const Section1= function(){
    return (
        <div className="section1Footer">
            <img src={logo}/>
            <img src={iconMundo}/>
            <p>País/región: Colombia</p>
        </div>
    )
}

export default Section1;
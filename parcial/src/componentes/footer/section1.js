import React from "react";
import '../../estilos/section1Footer.css';
import logo from '../../images/logoFooter.png';
import IconTexto from './iconTexto.js';

const Section1= function(){
    return (
        <div className="section1Footer">
            <img src={logo}/>
            <IconTexto/>
        </div>
    )
}

export default Section1;
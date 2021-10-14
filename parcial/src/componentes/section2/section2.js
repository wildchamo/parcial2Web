import React from "react";
import '../../estilos/section2.css'
import ImagenS2 from "./imagenS2.js";
import imagen1 from '../../images/section21.webp';
import imagen2 from '../../images/section22.webp';
import imagen3 from '../../images/section23.webp';
import imagen4 from '../../images/section24.webp';

 const Section2= function(){
    return(
        <section className="section2">
            <ImagenS2 source={{source:imagen1}}/>
            <ImagenS2 source={{source:imagen2}}/>
            <ImagenS2 source={{source:imagen3}}/>
            <ImagenS2 source={{source:imagen4}}/>  
        </section>
        )
}

export default Section2;
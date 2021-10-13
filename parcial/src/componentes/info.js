import React from "react";
import "../estilos/info.css";
import Titulo2 from "./titulo2";
import BotonCard from "./botonCards.js"

const Info = function(props){
    const {title,info,boton}=props.data2;
    return (
        <div className="info">
            <div className="container">
                <Titulo2 title={{title:title}}/>
                <BotonCard title={{title:boton}} />
            </div>
            <p>{info}</p>
        </div>

)
}
export default Info;
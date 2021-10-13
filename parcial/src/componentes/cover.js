import React from "react";
import "../estilos/cover.css";


const Cover = function(props){
    const {logo,cover}=props.data;
    
    return (
    <div className="cover">
    
    <img className="logoC" src={logo}/>
    <img className="coverC" src={cover}>

    </img>
    
    </div>

)
}
export default Cover;
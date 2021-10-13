import React from "react";
import "../estilos/cover.css";


const Cover = function(props){
    const {logo,cover}=props.data;
    
    return (
    <div className="cover">
    
    <img className="logo" src={logo}/>
    <img src={cover}/>
    
    </div>

)
}
export default Cover;
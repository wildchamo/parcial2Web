import React from "react";

const ElementoSlider= function(props){
    const {src,info}=props.data;
    return(
       <div>
        <img src={src}/>
        <p>{info}</p>
       </div>
        )
}

export default ElementoSlider;
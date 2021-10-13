import React from "react";

const ElementoSlider= function(props){
    const {source,info}=props.data;
    return(
       <div>
        <img src={source}/>
        <p>{info}</p>
       </div>
        )
}

export default ElementoSlider;
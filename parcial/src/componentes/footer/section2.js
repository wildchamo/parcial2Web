import React from "react";
import '../../estilos/section2Footer.css';
import BarraFoter1 from './barraFooter.js';
import BarraFoter2 from './barraFooter2.js';
import BarraFoter3 from './barraFooter3.js';

const Section2= function(){
    return (
        <div className="section2Footer">
            <BarraFoter1/>
            <BarraFoter2/>
            <BarraFoter3/>
           </div>
    )
}

export default Section2;
import React from "react";
import "../../estilos/cards.css"
import CardS6 from "./cards6.js"
import card1 from "../../images/card1S6.webp";
import card2 from "../../images/card2S6.webp";
import card3 from "../../images/card3S6.webp";
import card4 from "../../images/card4S6.webp";
import card5 from "../../images/card5S6.webp";
import card6 from "../../images/card6S6.webp";

const Cards = function(){
    return (
        <div className="cardsS6">
                <CardS6 source={{source:card1}}/>
                <CardS6 source={{source:card2}}/>
                <CardS6 source={{source:card3}}/>
                <CardS6 source={{source:card4}}/>
                <CardS6 source={{source:card5}}/>
                <CardS6 source={{source:card6}}/>
        </div>  

)
}
export default Cards;
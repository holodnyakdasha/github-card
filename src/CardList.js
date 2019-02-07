import React from "react";
import Card from './Card.js';
import App from "./App";

const CardList = (props) =>{
    return(
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};
export default CardList;
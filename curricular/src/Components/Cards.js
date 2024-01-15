import React from "react";
import Card from "./Card";
import './Cards.css';

function Cards({template,removecard}){
    return(
        <div className="basecard">
            {
              template.map((cardData)=>{
               return <Card {...cardData} removecard={removecard}></Card>
              })
            }
        </div>
    )
}

export default Cards;
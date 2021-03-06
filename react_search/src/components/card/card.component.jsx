import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
  <img className="img" alt="people" src={`../images/${props.people.id}.png`}/>
    <h1>{props.people.name}</h1>
  </div>
);

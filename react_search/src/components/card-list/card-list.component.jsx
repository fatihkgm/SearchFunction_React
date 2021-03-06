import React from "react";
import "./card-list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.people.map((people) => (
        <h1 key={people.id}>{people.name}</h1>
      ))}
    </div>
  );
};

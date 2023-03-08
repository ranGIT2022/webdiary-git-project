import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} />
      <h2>{props.name}</h2>
      <p>Ph: {props.phone}</p>
      <p>Email:{props.eMail}</p>
    </div>
  );
}

export default Card;

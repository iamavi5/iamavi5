import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
      <div className="card">
        <img src={props.imgUrl} alt={props.alt || "Image"} />
        <div className="card-content">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <div className="button-container">
            <a href={props.repoLink} target="-blank" title="Repository Link">View Code</a>
            <a href={props.viewLink} target="-blank" title="View Link">View Live</a>
          </div>
        </div>
      </div>
  );
};

export default Card;

import React from "react";
import "./CharacterCard.css";

function CharacterCard({ name, description, image }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={image + ".jpg"} alt="" />
      </div>
      <div className="card-title">
        <h1>{name}</h1>
      </div>
      <div className="card-description">{description}</div>
      <div className="btn">
        <button>
          <a>View Comics</a>
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;

import React, { useState } from "react";
import "./CharacterCard.css";

function CharacterCard({ name, description, image, showComics }) {
  return (
    <div className="char-card-container">
      <div className="char-img-container">
        <img src={image + ".jpg"} alt="" />
      </div>
      <div className="char-content-container">
        <div className="char-name">{name}</div>
        <div className="char-description">{description}</div>
        <div className="view-comics-btn">
          <button onClick={() => showComics(true)}>
            <a>View comics</a>
            <a />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CharacterCard;

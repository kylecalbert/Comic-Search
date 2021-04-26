import React from "react";
import "./ComicList.css";
function ComicList({ title, image, description }) {
  return (
    <div className="comic-card-container">
      <div className="comic-card">
        <div className="comic-card-front">
          <div className="comic-img">
            <img src={image + ".jpg"} alt="" />
          </div>
        </div>
        <div className="comic-card-back">
          <h1>sahjashjajs</h1>
        </div>
      </div>
    </div>
  );
}

export default ComicList;

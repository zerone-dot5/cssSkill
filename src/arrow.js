import React from "react";
import { Link } from "react-router-dom";

function Arrow(props) {
  return (
    <div className="arrow-container">
      <Link to="/" className="arrow-box">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </Link>
    </div>
  );
}

export default Arrow;

import React from "react";
import "./productcard.css";
import logo from "./cocacola_logo.png";
import product from "./cocacola.png";
function Productcard(props) {
  return (
    <div className="pc-container">
      <div className="card">
        <div className="circle">
          <img src={logo} className="logo" />
        </div>
        <div className="content">
          <h2>Cocacola</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            minima itaque aliquid excepturi, exercitationem.
          </p>
          <a href="#">Explore More</a>
        </div>
        <img src={product} className="product_img" />
      </div>
    </div>
  );
}

export default Productcard;

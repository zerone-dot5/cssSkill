import React from "react";
import "./futuristiccard.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

function Futuristiccard(props) {
  return (
    <div className="fc-container">
      <div className="fc-fullbox">
        <div className="fc-box" id="fc1">
          <i></i>
          <div className="content">
            <img src={img1} />
            <h2>
              Someone Famous
              <br />
              <span>UX/UI Designer</span>
            </h2>
            <a href="#">Hire me</a>
          </div>
        </div>
        <div className="fc-box" id="fc2">
          <i></i>
          <div className="content">
            <img src={img2} />
            <h2>
              Someone Famous
              <br />
              <span>UX/UI Designer</span>
            </h2>
            <a href="#">Hire me</a>
          </div>
        </div>
        <div className="fc-box" id="fc3">
          <i></i>
          <div className="content">
            <img src={img3} />
            <h2>
              Someone Famous
              <br />
              <span>UX/UI Designer</span>
            </h2>
            <a href="#">Hire me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Futuristiccard;

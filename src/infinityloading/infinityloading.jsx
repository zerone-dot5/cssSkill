import React from "react";
import "./infinityloading.css";

let circleList = Array(21).fill("");

function Infinityloading(props) {
  return (
    <div className="il-container">
      <div className="il-box">
        <div className="il-circle">
          {circleList.map((item, idx) => {
            return (
              <span
                key={idx}
                style={{
                  transform: `rotate(${18 * idx}deg)`,
                  animationDelay: `${0.1 * idx}s`,
                }}
              >
                <span
                  className="inspan"
                  style={{
                    animationDelay: `${0.1 * idx}s`,
                  }}
                ></span>
              </span>
            );
          })}
        </div>
        <div className="il-circle">
          {circleList.map((item, idx) => {
            return (
              <span key={idx} style={{ transform: `rotate(${18 * idx}deg)` }}>
                <span
                  className="inspan"
                  style={{
                    animationDelay: `${-0.1 * idx}s`,
                  }}
                ></span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Infinityloading;

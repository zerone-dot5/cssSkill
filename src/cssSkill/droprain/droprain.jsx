import React, { useEffect, useState } from "react";

import "./droprain.css";

function Droprain(props) {
  const [click, setClick] = useState("active");

  const rain = () => {
    if (click === "active") {
      let cloud = document.querySelector(".dr-cloud");
      let e = document.createElement("div");
      let left = Math.floor(Math.random() * 310);
      let width = Math.random() * 5;
      let height = Math.random() * 50;
      let duration = Math.random() * 0.5;

      e.classList.add("dr-drop");
      cloud.appendChild(e);
      e.style.left = left + "px";
      e.style.width = 0.5 + width + "px";
      e.style.height = 0.5 + height + "px";
      e.style.animationDuration = 1 + duration + "s";

      setTimeout(() => {
        cloud.removeChild(e);
      }, 2000);
    }
  };

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      rain();
    }, 50);
  }, [click]);

  return (
    <div className="dr-container">
      <div className="dr-box">
        <div className="dr-cloud"></div>
        <div className="dr-cloud2"></div>
      </div>
    </div>
  );
}

export default Droprain;

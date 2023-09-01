import React, { useEffect, useState } from "react";
import "./scrollevent.css";

let seList = new Array(60).fill("");

function Scrollevent(props) {
  useEffect(() => {
    window.addEventListener("scroll", scrollTrigger);
  });
  const scrollTrigger = () => {
    let boxes = document.querySelectorAll(".se-box");
    boxes.forEach((boxxx) => {
      if (boxxx.offsetTop < window.scrollY) {
        boxxx.classList.add("active");
      } else {
        boxxx.classList.remove("active");
      }
    });
  };

  const randomColor = () => {
    let chars = "123456789abcdef";
    let colorLength = 6;
    let color = "";

    for (let i = 1; i <= colorLength; i++) {
      let randomColors = Math.floor(Math.random() * chars.length);
      color += chars.substring(randomColors, randomColors + 1);
    }
    return "#" + color;
  };

  return (
    <div className="se-container">
      <section>
        <h2>Scroll To Reveal</h2>
      </section>
      <div className="se-allbox">
        {seList.map((item, idx) => {
          return (
            <div
              key={idx}
              className="se-box"
              style={{ background: randomColor() }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Scrollevent;

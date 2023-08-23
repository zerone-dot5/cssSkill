import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./textrain.css";
import Rain from "./rain";

let rainArr = [];

function Textrain({ active, activeHandle }) {
  const [shadow, setShadow] = useState("none");
  const [rainArrs, setRainArrs] = useState(rainArr);

  const interval = useRef();
  const location = useLocation();

  function randomText() {
    let text = "abcdefghijklmnopqrstuvwxyz0123456789";
    let letter = text[Math.floor(Math.random() * text.length)];
    return letter;
  }
  function rain() {
    let cloud = document.querySelector(".cloud");
    let e = document.createElement("div");
    let left = Math.floor(Math.random() * 310);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;
    e.classList.add("cloud-text");
    cloud.appendChild(e);
    e.innerHTML = randomText();
    e.style.left = left + "px";
    e.style.fontSize = 0.5 + size + "em";
    e.style.animationDirection = 1 + duration + "s";

    setTimeout(() => {
      cloud.removeChild(e);
    }, 2000);
  }

  let drop;
  const clickHandle = () => {
    active === "" ? activeHandle("active") : activeHandle("");
  };

  useEffect(() => {
    if (active === "active") {
      setTimeout(() => {
        interval.current = setInterval(function () {
          rain();
        }, 20);
      }, 500);
    } else {
      clearInterval(interval.current);
    }
  }, [active]);

  return (
    <div className="tr-container">
      <div className="trbox">
        <div className={`cloud ${active}`} onClick={clickHandle}>
          {/* {rainArrs.map((item, idx) => {
            return <Rain key={idx} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Textrain;

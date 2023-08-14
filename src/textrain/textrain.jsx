import React, { useEffect, useRef, useState } from "react";
import "./textrain.css";

function Textrain(props) {
  const [shadow, setShadow] = useState("none");
  const [active, setActive] = useState("");
  const interval = useRef();

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
    active === "" ? setActive("active") : setActive("");
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
        <div className={`cloud ${active}`} onClick={clickHandle}></div>
      </div>
    </div>
  );
}

export default Textrain;

import React, { useEffect, useState } from "react";
import "../changecursor/changeCursor.css";

let list = ["Home", "About", "Portfolio", "Team", "Contact"];

function ChangeCursor(props) {
  const [cursorLeft, setCursorLeft] = useState(null);
  const [cursorTop, setCursorTop] = useState(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCursorLeft(e.pageX + "px");
      setCursorTop(e.pageY + "px");
    });
  });
  return (
    <div className="changeCursor-container">
      <ul className="cc-box">
        {list.map((item, idx) => {
          return (
            <li key={idx}>
              <a href="#">{item}</a>
            </li>
          );
        })}
        <div
          className="cursor"
          style={{ left: cursorLeft, top: cursorTop }}
          onMouseMove={(e) => {
            setCursorLeft(e.pageX + "px");
          }}
        ></div>
      </ul>
    </div>
  );
}

export default ChangeCursor;

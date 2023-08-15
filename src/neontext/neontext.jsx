import React, { useEffect, useState } from "react";
import "./neontext.css";

let textList = [
  "Lauv - Never Not",
  "Etham - Waiting for you",
  "Elijah Woods - 24/7, 365",
  "Henry Moodie - pick up the phone",
  "Ben Platt - Waving Through a Window",
  "Benson Boone - In The Stars",
];
function Neontext(props) {
  const [cursorTop, setCursorTop] = useState("");
  const [cursorLeft, setCursorLeft] = useState("");

  let cursor = document.querySelector("#cursor");

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCursorTop(e.pageY + "px");
      setCursorLeft(e.pageX + "px");
    });
  }, []);

  return (
    <div className="nt-container">
      <ul>
        {textList.map((item, idx) => {
          return (
            <li key={idx}>
              <a href="#">
                {item.split("").map((item, i) => {
                  return (
                    <span key={i} style={{ transitionDelay: `${i * 40}ms ` }}>
                      {item}
                    </span>
                  );
                })}
              </a>
            </li>
          );
        })}
        <div id="cursor" style={{ left: cursorLeft, top: cursorTop }}></div>
      </ul>
    </div>
  );
}

export default Neontext;

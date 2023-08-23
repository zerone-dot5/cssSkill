import React from "react";
import "./textrain.css";

function Rain(props) {
  function randomText() {
    let text = "abcdefghijklmnopqrstuvwxyz0123456789";
    let letter = text[Math.floor(Math.random() * text.length)];
    return letter;
  }
  let left = Math.floor(Math.random() * 310);
  let size = Math.random() * 1.5;
  let duration = Math.random() * 1;

  return (
    <div
      className="cloud-text"
      style={{
        left: left + "px",
        fontSize: 0.5 + size + "em",
        animationDuration: 1 + duration + "s",
      }}
      key={1}
    >
      {randomText()}
    </div>
  );
}

export default Rain;

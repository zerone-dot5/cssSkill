import React, { useEffect, useState } from "react";
import "./radialmenu.css";

let radialList = [
  { color: "#ff2972", icon: <ion-icon name="home-outline"></ion-icon> },
  { color: "#fee800", icon: <ion-icon name="person-outline"></ion-icon> },
  { color: "#04fc43", icon: <ion-icon name="settings-outline"></ion-icon> },
  { color: "#fe00f1", icon: <ion-icon name="mail-outline"></ion-icon> },
  { color: "#00b0fe", icon: <ion-icon name="key-outline"></ion-icon> },
  { color: "#fea600", icon: <ion-icon name="videocam-outline"></ion-icon> },
  {
    color: "#a529ff",
    icon: <ion-icon name="game-controller-outline"></ion-icon>,
  },
  { color: "#01bdab", icon: <ion-icon name="camera-outline"></ion-icon> },
];

function Radialmenu(props) {
  const [toggle, setToggle] = useState("");
  const [liHover, setLiHover] = useState("");

  const toggleHandle = () => {
    toggle === "" ? setToggle("active") : setToggle("");
  };

  const HoverHandle = (e, idx) => {
    setLiHover(idx);
  };
  const OutHandle = () => {
    setLiHover("");
  };

  return (
    <div className="rm-container">
      <ul className={`menu ${toggle}`}>
        <div className="toggle" onClick={toggleHandle}>
          <ion-icon name="add-outline"></ion-icon>
        </div>
        {radialList.map((item, idx) => {
          return (
            <li
              key={idx}
              style={
                toggle === ""
                  ? {
                      transform: `rotate(0deg) translateX(110px)`,
                      transitionDelay: `calc(0.1s * ${idx})`,
                    }
                  : {
                      transform: `rotate(calc(360deg / 8 * ${idx})) translateX(0px)`,
                      transitionDelay: `calc(0.1s * ${idx})`,
                    }
              }
            >
              <a
                href="#"
                style={
                  liHover === idx
                    ? {
                        transition: `0s`,
                        background: item.color,
                        color: "#333",
                        boxShadow: `0 0 10px ${item.color}, 0 0 30px ${item.color}, 0 0 50px ${item.color}`,
                        border: `2px solid ${item.color}`,
                        transform: `rotate(calc(360deg / -8 * ${idx})) translateX(0px)`,
                      }
                    : {
                        transition: `1s`,
                        color: item.color,
                        border: `2px solid ${item.color}`,
                        transform: `rotate(calc(360deg / -8 * ${idx})) translateX(0px)`,
                      }
                }
                onMouseOver={(e) => HoverHandle(e, idx)}
                onMouseLeave={OutHandle}
              >
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Radialmenu;

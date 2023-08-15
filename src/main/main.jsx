import React, { useState, useEffect } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";

let numberList = [
  { no: 1, name: "ChangeCursor", img: img1 },
  { no: 2, name: "MenuAnimation", img: img2 },
  { no: 3, name: "NeonLightBtn", img: img3 },
  { no: 4, name: "IsometricMenu", img: img4 },
  { no: 5, name: "TextRain", img: img5 },
  { no: 6, name: "NeonText", img: img6 },
  { no: 7, name: "7", img: img6 },
  { no: 8, name: "8", img: img6 },
];

function Main(props) {
  return (
    <div className="main-container">
      <div className="main-box">
        <h3>
          Js <small>&</small> Css <small>&</small> React Design Skill
        </h3>
        <ul className="main-ul">
          {numberList.map((item, idx) => {
            return (
              <Link key={idx} to={`${item.name.toLowerCase()}`}>
                <li className="main-list">
                  <div className="main-imgBx">
                    <img src={item.img} />
                  </div>
                  <div className="main-content">
                    <h2 className="rank">
                      <small>#</small>
                      {item.no}
                    </h2>
                    <h4>{item.name}</h4>
                    <p> Lorem, ipsum.</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Main;

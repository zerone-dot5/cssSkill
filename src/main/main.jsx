import React, { useState, useEffect } from "react";
import "./main.css";
import { Link, useLocation } from "react-router-dom";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";

let numberList = [
  {
    no: 1,
    name: "ChangeCursor",
    img: img1,
    ex: "Change BgColor and FontColor",
  },
  { no: 2, name: "MenuAnimation", img: img2, ex: "Menu Toggle Animation" },
  { no: 3, name: "NeonLightBtn", img: img3, ex: "Neon Light Button" },
  { no: 4, name: "IsometricMenu", img: img4, ex: "3D Menu" },
  { no: 5, name: "TextRain", img: img5, ex: "text Rain" },
  { no: 6, name: "NeonText", img: img6, ex: "soft neon text" },
  { no: 7, name: "7", img: img6, ex: "not" },
  { no: 8, name: "8", img: img6, ex: "not" },
];

let WhiteTheme = {
  bgColor: "#f5f5f5",
  listBoxColor: "#fff",
};

let BlackTheme = {
  bgColor: "#333",
  listBoxColor: "#000",
};

function Main(props) {
  const [toggleClass, setToggleClass] = useState("");
  const [toggleColor, setToggleColor] = useState(WhiteTheme);

  const ToggleHandle = () => {
    toggleClass === "" ? setToggleClass("black") : setToggleClass("");
    toggleColor === WhiteTheme
      ? setToggleColor(BlackTheme)
      : setToggleColor(WhiteTheme);
  };

  console.log(toggleColor.bgColor);
  return (
    <div className="main-container" style={{ background: toggleColor.bgColor }}>
      <div className="main-box">
        <h3>
          Js <small>&</small> Css <small>&</small> React Design Skill
        </h3>
        <div className="main-themebox">
          <button
            id="main-theme"
            className={toggleClass}
            onClick={ToggleHandle}
          >
            <div className="main-toggle"></div>
          </button>
        </div>
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
                    <p>{item.ex}</p>
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

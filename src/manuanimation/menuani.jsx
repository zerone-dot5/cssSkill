import React, { useState } from "react";
import "./menuani.css";

let menuList = [
  { name: "Home", icon: "home" },
  { name: "Profile", icon: "person" },
  { name: "Message", icon: "chatbubble" },
  { name: "Photos", icon: "camera" },
  { name: "Settings", icon: "settings" },
];

function MenuAnimation(props) {
  const [listIdx, setListIdx] = useState(0);

  const clickHandle = (e, idx) => {
    setListIdx(idx);
  };

  return (
    <div className="menuani-container">
      <div className="all-box">
        <ul className="list-box">
          {menuList.map((item, idx) => {
            return (
              <li
                className={idx === listIdx ? `list active` : `list`}
                key={idx}
                onClick={(e) => clickHandle(e, idx)}
              >
                <a href="#">
                  <span className="icon">
                    <ion-icon name={`${item.icon}-outline`}></ion-icon>
                  </span>
                  <span className="text">{item.name}</span>
                </a>
              </li>
            );
          })}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default MenuAnimation;

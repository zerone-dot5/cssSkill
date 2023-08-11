import React from "react";
import "./isometricmenu.css";

let menuList = [
  { name: "Home", num: 6 },
  { name: "About", num: 5 },
  { name: "Services", num: 4 },
  { name: "Portfolio", num: 3 },
  { name: "Our team", num: 2 },
  { name: "Contact", num: 1 },
];
function Isometricmenu(props) {
  return (
    <div className="im-container">
      <ul>
        {menuList.map((item, idx) => {
          return (
            <li key={idx} style={{ zIndex: item.num }}>
              <a href="#">{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Isometricmenu;

import React, { useState } from "react";
import "./randommove.css";

let objList = Array(10).fill("");

function Randommove(props) {
  const [bg, setBg] = useState("Routine");
  const [active, setActive] = useState("");

  const clickHandle = () => {
    active === "" ? setActive("active") : setActive("");
    active === "" ? setBg("Random") : setBg("Routine");
  };
  return (
    <div className="rmo-container" onClick={clickHandle}>
      <h2>{bg}</h2>
      <div className="rmo-loader">
        {objList.map((item, idx) => {
          return (
            <span
              className={active}
              key={idx}
              style={{ transform: `rotate(calc(36deg *${idx + 1})` }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Randommove;

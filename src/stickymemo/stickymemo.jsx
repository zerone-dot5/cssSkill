import React, { useEffect, useState } from "react";
import "./stickymemo.css";

let randomColors = [
  "#c2ff3d",
  "#ff3ed8",
  "#3dc2ff",
  "#04e022",
  "#bc83e6",
  "#ebb328",
];

function Stickymemo(props) {
  const [display, setDisplay] = useState("none");
  const [textValue, setTextValue] = useState("");
  const [allList, setAllList] = useState([]);

  const clickHandle = (e) => {
    e.stopPropagation();
    display === "none" ? setDisplay("block") : setDisplay("none");
  };

  const keypressHandle = (e) => {
    let randomNum = Math.floor(Math.random() * 6);
    let getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

    if (e.keyCode == "13") {
      setDisplay("none");

      let list = {
        memo: textValue,
        bgColor: randomColors[randomNum],
        bgRotate: `${getRandom(-5, 4)}deg`,
      };

      setAllList((prev) => [...prev, list]);

      setTextValue("");
    }
  };

  const createboxHandle = (e) => {
    e.stopPropagation();
  };

  const changeHandle = (e) => {
    setTextValue(e.target.value);
  };

  const removeHandle = (item, idx) => {
    setAllList(allList.filter((item, index) => index != idx));
  };

  return (
    <div className="sm-container">
      <div className="sm-box">
        <div className="notes">
          <div id="create" onClick={clickHandle}>
            <i className="fa-solid fa-plus"></i>
            <div
              className="createBox"
              style={{ display: display }}
              onClick={createboxHandle}
            >
              <div className="innerCreateBox">
                <textarea
                  placeholder="Write Here . . ."
                  id="userInput"
                  maxLength="160"
                  value={textValue}
                  onKeyDown={keypressHandle}
                  onChange={changeHandle}
                ></textarea>
              </div>
            </div>
          </div>
          {allList.map((item, idx) => {
            return (
              <div
                key={idx}
                className="note"
                onDoubleClick={() => removeHandle(item, idx)}
                style={{
                  backgroundColor: item.bgColor,
                  transform: `rotate(${item.bgRotate})`,
                }}
              >
                {item.memo}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stickymemo;

import React, { useState } from "react";
import "./cube3d.css";

let cubeList = ["#991fff", "#a438ff", "#991fff", "#a438ff", "#7a00df"];
let cubeBox = [-1, 0, 1];
let cubeList2 = [3, 2, 1];

function Cube3d(props) {
  const [hover, setHover] = useState("");
  const [stop, setStop] = useState("");

  const HoverHandle = () => {
    setHover("active");
  };
  const OutHandle = () => {
    setHover("");
  };

  const StopHandle = () => {
    setStop("stop");
  };

  return (
    <div className="c3-container">
      <div
        className="c3-cube"
        style={
          stop === ""
            ? { opacity: 1, zIndex: 100 }
            : { transform: `scale(0)`, zIndex: -5, background: `#fff` }
        }
      >
        <div className="big">
          {cubeList.map((item, idx) => {
            return (
              <span
                key={idx}
                style={
                  hover === ""
                    ? idx !== 4
                      ? {
                          background: item,
                          transform: `rotateY(calc(90deg * ${idx})) translateZ(140px)`,
                        }
                      : {
                          background: "#7a00df",
                          transform: `rotateX(90deg) translateZ(140px)`,
                        }
                    : idx !== 4
                    ? {
                        boxShadow: `rgba(255, 255, 255, 1) 0px 0px 30px 0px , inset rgba(255, 255, 255, 1) 0px 0px 30px 0px`,

                        border: "10px solid #fff",
                        background: "transparent",
                        transform: `rotateY(calc(90deg * ${idx})) translateZ(140px)`,
                      }
                    : {
                        boxShadow: `rgba(255, 255, 255, 1) 0px 0px 30px 0px , inset rgba(255, 255, 255, 1) 0px 0px 30px 0px`,
                        border: "10px solid #fff",
                        background: "transparent",
                        transform: `rotateX(90deg) translateZ(140px)`,
                      }
                }
                onMouseOver={HoverHandle}
                onMouseLeave={OutHandle}
                onClick={StopHandle}
              ></span>
            );
          })}
        </div>
      </div>
      <div
        className="c3-cobe2-container"
        style={
          stop === "stop"
            ? { transform: `scale(1) skewY(-20deg)`, zIndex: 100 }
            : { transform: `scale(0) skewY(-20deg)`, zIndex: -5 }
        }
      >
        <div className="c3-cube2">
          {cubeBox.map((boxItem, boxIdx) => {
            return (
              <div
                key={boxIdx}
                style={{
                  translate: `calc(-70px * ${boxItem}) calc(-60px * 0)`,
                }}
              >
                {cubeList2.map((item2, idx2) => {
                  return (
                    <span
                      key={idx2}
                      style={{ zIndex: `calc( 1* ${item2})` }}
                    ></span>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="c3-cube2">
          {cubeBox.map((boxItem, boxIdx) => {
            return (
              <div
                key={boxIdx}
                style={{
                  translate: `calc(-70px * ${boxItem}) calc(-60px * 0)`,
                }}
              >
                {cubeList2.map((item2, idx2) => {
                  return (
                    <span
                      key={idx2}
                      style={{ zIndex: `calc(1* ${item2})` }}
                    ></span>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="c3-cube2">
          {cubeBox.map((boxItem, boxIdx) => {
            return (
              <div
                key={boxIdx}
                style={{
                  translate: `calc(-70px * ${boxItem}) calc(-60px * 0)`,
                }}
              >
                {cubeList2.map((item2, idx2) => {
                  return (
                    <span
                      key={idx2}
                      style={{ zIndex: `calc(1* ${item2})` }}
                    ></span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cube3d;

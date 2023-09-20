import React, { useState } from "react";
import "./socialmediahover.css";

function Socialmediahover(props) {
  const [effect01, setEffect01] = useState("");
  const [effect01Num, setEffect01Num] = useState(null);
  const [effect02, setEffect02] = useState("");
  const [effect02Num, setEffect02Num] = useState(null);
  const [effect03, setEffect03] = useState("");
  const [effect03Num, setEffect03Num] = useState(null);

  const effect01Hover = (e, idx) => {
    setEffect01("hover");
    setEffect01Num(idx);
  };

  const effect01Out = () => {
    setEffect01("");
    setEffect01Num(null);
  };
  const effect02Hover = (e, idx) => {
    setEffect02("hover");
    setEffect02Num(idx);
  };

  const effect02Out = () => {
    setEffect02("");
    setEffect02Num(null);
  };
  const effect03Hover = (e, idx) => {
    setEffect03("hover");
    setEffect03Num(idx);
  };

  const effect03Out = () => {
    setEffect03("");
    setEffect03Num(null);
  };

  let mediaList = [
    {
      name: "Youtube",
      color: `#ff0000`,
    },
    {
      name: "Twitter",
      color: `#1DA1F2`,
    },
    {
      name: "Instagram",
      color: `#bc1888`,
    },
    {
      name: "Facebook",
      color: `#4267b2`,
    },
    {
      name: "Github",
      color: `#f5f5f5`,
    },
  ];
  return (
    <div className="smh-container">
      <ul className="smh-effect01">
        {mediaList.map((item, idx) => {
          return (
            <li
              key={idx}
              onMouseOver={(e) => effect01Hover(e, idx)}
              onMouseLeave={effect01Out}
            >
              <a href="#">
                <i
                  className={`fa-brands fa-${item.name.toLowerCase()}`}
                  style={
                    effect01 === ""
                      ? { color: item.color }
                      : effect01Num === idx
                      ? {
                          color: item.color,
                          textShadow: `0 0 30px ${item.color},0 0 60px ${item.color}`,
                        }
                      : { color: item.color }
                  }
                ></i>
                <span
                  style={
                    effect01 === ""
                      ? { color: item.color }
                      : effect01Num === idx
                      ? {
                          color: item.color,
                          textShadow: `0 0 30px ${item.color}`,
                        }
                      : { color: item.color }
                  }
                >
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="smh-effect02">
        {mediaList.map((item, idx) => {
          return (
            <li
              key={idx}
              onMouseOver={(e) => effect02Hover(e, idx)}
              onMouseLeave={effect02Out}
            >
              <a href="#">
                <i
                  className={`fa-brands fa-${item.name.toLowerCase()}`}
                  style={
                    effect02 === ""
                      ? { color: item.color }
                      : effect02Num === idx
                      ? {
                          color: item.color,
                          textShadow: `0 0 30px ${item.color},0 0 60px ${item.color}`,
                        }
                      : { color: item.color }
                  }
                ></i>
                <span
                  style={
                    effect02 === ""
                      ? { color: item.color }
                      : effect03Num === idx
                      ? {
                          color: item.color,
                          textShadow: `0 0 30px ${item.color}`,
                        }
                      : { color: item.color }
                  }
                >
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="smh-effect03">
        {mediaList.map((item, idx) => {
          return (
            <li
              key={idx}
              onMouseOver={(e) => effect03Hover(e, idx)}
              onMouseLeave={effect03Out}
            >
              <a href="#">
                <i
                  className={`fa-brands fa-${item.name.toLowerCase()}`}
                  style={
                    effect03 === ""
                      ? { color: item.color }
                      : effect03Num === idx
                      ? {
                          color: `#fff`,
                        }
                      : { color: item.color }
                  }
                ></i>
                <span
                  style={
                    effect03 === ""
                      ? { color: item.color }
                      : effect03Num === idx
                      ? {
                          color: `#fff`,
                        }
                      : { color: item.color }
                  }
                >
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Socialmediahover;

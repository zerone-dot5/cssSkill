import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

let list = [
  { x: -1, y: 0, icon: "CC", name: "ChangeCursor" },
  { x: 1, y: 0, icon: "MA", name: "MenuAnimation" },
  { x: 0, y: -1, icon: "NLB", name: "NeonLightBtn" },
  { x: 0, y: 1, icon: "IM", name: "IsometricMenu" },
  { x: -1, y: 1, icon: "TR", name: "TextRain" },
  { x: -1, y: -1, icon: "NT", name: "NeonText" },
  { x: 1, y: -1, icon: "SM", name: "StickyMemo" },
  { x: 1, y: 1, icon: "FC", name: "FuturisticCard" },
];

function HomeC1({ channel, channelHandle, titleHandle }) {
  const [nav, setNav] = useState("");
  const [hover, setHover] = useState("");

  const navHandle = () => {
    setNav("active");
    channelHandle(1);
  };

  const closeHandle = () => {
    setNav("");
    channelHandle("");
  };

  useEffect(() => {
    if (channel !== 1) {
      setNav("");
    }
  }, [channel]);

  const HoverHanle = (e, item) => {
    setHover("hover");
    titleHandle(item.name);
  };
  const OutHandle = () => {
    setHover("");
    titleHandle("");
  };

  return (
    <div className="homeC1-main">
      <ul className={`home-nav ${nav}`} onClick={navHandle}>
        {list.map((item, idx) => {
          return (
            <li
              key={idx}
              style={
                nav === ""
                  ? hover === ""
                    ? {
                        filter: `hue-rotate(${idx * 10}deg)`,
                        transform: `translate(${20 * item.x}px, ${
                          20 * item.y
                        }px)`,

                        transitionDelay: `${0.1 * idx}s`,
                      }
                    : {
                        transform: `translate(${20 * item.x}px, ${
                          20 * item.y
                        }px)`,

                        transitionDelay: `${0.1 * idx}s`,
                      }
                  : {
                      transform: `translate(${60 * item.x}px, ${
                        60 * item.y
                      }px)`,

                      transitionDelay: `${0.1 * idx}s`,
                    }
              }
              onMouseOver={(e) => HoverHanle(e, item)}
              onMouseLeave={OutHandle}
            >
              <Link to={`${item.name.toLowerCase()}`}>
                <span>
                  <p>{item.icon}</p>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className={`close1 ${nav}`} onClick={closeHandle}>
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
  );
}

export default HomeC1;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

let list = [
  { x: -1, y: 0, icon: "ts", name: "test" },
  { x: 1, y: 0, icon: "", name: "" },
  { x: 0, y: -1, icon: "", name: "" },
  { x: 0, y: 1, icon: "", name: "" },
  { x: -1, y: 1, icon: "", name: "" },
  { x: -1, y: -1, icon: "", name: "" },
  { x: 1, y: -1, icon: "", name: "" },
  { x: 1, y: 1, icon: "", name: "" },
];

function HomeW1({ channel, channelHandle, titleHandle }) {
  const [nav, setNav] = useState("");
  const [hover, setHover] = useState("");

  const navHandle = () => {
    setNav("active");
    channelHandle(4);
  };

  const closeHandle = () => {
    setNav("");
    channelHandle("");
  };

  useEffect(() => {
    if (channel !== 4) {
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
    <div className="homeW1-main">
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
      <button className={`closeW1 ${nav}`} onClick={closeHandle}>
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
  );
}

export default HomeW1;

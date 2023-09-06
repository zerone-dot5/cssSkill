import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
let list = [
  { x: -1, y: 0, icon: "PC", name: "ProductCard" },
  { x: 1, y: 0, icon: "GB", name: "GlassBall" },
  { x: 0, y: -1, icon: "CP", name: "ClickPaint" },
  { x: 0, y: 1, icon: "GH", name: "GalleryHover" },
  { x: -1, y: 1, icon: "RM", name: "RadialMenu" },
  { x: -1, y: -1, icon: "SE", name: "scrollEvent" },
  { x: 1, y: -1, icon: "C3", name: "Cube3d" },
  { x: 1, y: 1, icon: "MI", name: "MediaIcon" },
];

function HomeC2({ channel, channelHandle }) {
  const [nav, setNav] = useState("");
  const [hover, setHover] = useState("");

  const navHandle = () => {
    setNav("active");
    channelHandle(2);
  };

  const closeHandle = () => {
    setNav("");
  };

  const HoverHanle = () => {
    setHover("hover");
  };
  const OutHandle = () => {
    setHover("");
  };

  useEffect(() => {
    if (channel !== 2) {
      setNav("");
    }
  }, [channel]);
  return (
    <div className="homeC2-main">
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
              onMouseOver={HoverHanle}
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
      <button className={`close2 ${nav}`} onClick={closeHandle}>
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
  );
}

export default HomeC2;

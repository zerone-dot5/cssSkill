import React, { useState, useEffect } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import changecursorImg from "./img/changecursor.gif";

let numberList = [
  { no: 1, name: "ChangeCursor", img: changecursorImg },
  { no: 2, name: "MenuAnimation", img: changecursorImg },
  { no: 3, name: "NeonLightBtn", img: changecursorImg },
  { no: 4, name: "IsometricMenu", img: changecursorImg },
  { no: 5, name: "WWWWW", img: changecursorImg },
];
let prevNumber = numberList.slice(3);
let nextNumber = numberList.slice(0, 2);
let List = [...prevNumber, ...numberList, ...nextNumber];

function Main(props) {
  const [count, setCount] = useState(2);
  const [countTop, setCountTop] = useState(283);
  const [btn, setBtn] = useState(false);
  const [EclientY, setEclientY] = useState(null);
  const [transition, setTransition] = useState(`1s all`);
  const [listArr, setListArr] = useState(List[count].name.split(""));
  const [timer, setTimer] = useState(-1);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [titleTransition, setTitleTransition] = useState("0.5s all");
  const [imgOpacity, setImgOpacity] = useState(1);

  const [exOpacity, setExOpacity] = useState(0);

  const pushHandle = (e) => {
    setBtn(true);
    setEclientY(e.clientY);
  };

  const upHandle = () => {
    setBtn(false);
  };
  const moveHandle = (e) => {
    if (btn && EclientY > e.clientY) {
      setBtn(false);
      setCountTop((prev) => prev - 141.5);
      setCount((prev) => prev + 1);
    } else if (btn && EclientY < e.clientY) {
      setBtn(false);
      setCountTop((prev) => prev + 141.5);
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (count === 1) {
      setTimeout(() => {
        setTransition("none");
        setCountTop(-283);
        setCount(6);
      }, 1000);
      setTimeout(() => {
        setTransition("1s all");
      }, 1100);
    } else if (count === 7) {
      setTimeout(() => {
        setTransition("none");
        setCountTop(283);
        setCount(2);
      }, 1000);
      setTimeout(() => {
        setTransition("1s all");
      }, 1100);
    }

    setListArr(List[count].name.split(""));

    setTitleTransition("0s all");
    setTitleOpacity(0);
    setImgOpacity(0);

    setTimeout(() => {
      setTimer(-1);
      setTitleTransition("0.5s all");
      setTitleOpacity(1);
      setImgOpacity(1);
    }, 1000);
  }, [count]);

  useEffect(() => {
    let inTimer = -1;
    setTimeout(() => {
      const timers = setInterval(() => {
        inTimer = inTimer + 1;
        setTimer(inTimer);
        if (inTimer === listArr.length) {
          clearInterval(timers);
        }
      }, 100);

      return () => clearInterval(timers);
    }, 1000);
  }, [listArr]);

  const exHoverHandle = () => {
    setImgOpacity(0.2);
    setExOpacity(1);
  };
  const exOutHandle = () => {
    setImgOpacity(1);
    setExOpacity(0);
  };

  return (
    <div className="main-contianer">
      <div className="main-box">
        <div
          className="exBox"
          onMouseOver={exHoverHandle}
          onMouseOut={exOutHandle}
        >
          {listArr.map((item, idx) => {
            return (
              <Link key={idx} to={List[count].name.toLowerCase()}>
                <div className="ex-item">
                  <img
                    src={List[count].img}
                    alt="test"
                    style={{ opacity: imgOpacity }}
                  ></img>
                  <div>
                    <p
                      style={{
                        fontSize: "20px",
                        opacity: exOpacity,
                        transition: `1s all`,
                      }}
                    >
                      Viewmore
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <ul className="listBox">
          {List.map((item, idx) => {
            return (
              <li
                key={idx}
                style={
                  idx === count
                    ? {
                        top: `${countTop}px`,
                        color: "white",
                        transition: transition,
                      }
                    : idx < count
                    ? {
                        top: `${countTop}px`,
                        opacity: 0.7,

                        transition: transition,
                      }
                    : idx > count
                    ? {
                        top: `${countTop}px`,
                        opacity: 0.7,

                        transition: transition,
                      }
                    : {}
                }
                onMouseDown={(e) => pushHandle(e)}
                onMouseUp={upHandle}
                onMouseMove={(e) => moveHandle(e)}
              >
                <p
                  style={
                    idx === count
                      ? { color: "white", transition: transition }
                      : idx < count
                      ? {
                          transform: `rotateX(70deg)`,
                          transition: transition,
                        }
                      : idx > count
                      ? {
                          transform: `rotateX(-70deg)`,
                          transition: transition,
                        }
                      : {}
                  }
                >
                  {item.no}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="titleBox">
          {listArr.map((item, idx) => {
            return (
              <h2
                key={idx}
                style={
                  idx <= timer
                    ? {
                        opacity: titleOpacity,
                        transition: titleTransition,
                      }
                    : { opacity: 0, transition: titleTransition }
                }
              >
                {item}
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;

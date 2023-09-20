import React, { useState } from "react";
import "./home.css";
import HomeC1 from "./css/home-c1.jsx";
import HomeC2 from "./css/home-c2";
import HomeC3 from "./css/home-c3";
import HomeW1 from "./web/home-w1";
import HomeW2 from "./web/home-w2";
import HomeW3 from "./web/home-w3";

function Home(props) {
  const [channel, setChannel] = useState("");
  const [title, setTitle] = useState("");
  const [slide, setSlide] = useState("-50%");
  const [btnRight, setBtnRight] = useState("5%");
  const [btnRotate, setBtnRotate] = useState("0deg");
  const channelHandle = (e) => {
    setChannel(e);
  };

  const titleHandle = (e) => {
    setTitle(e);
  };

  const changeHandle = () => {
    slide === "-50%" ? setSlide("-150%") : setSlide("-50%");
    slide === "-50%" ? setBtnRight("85%") : setBtnRight("5%");
    slide === "-50%" ? setBtnRotate("180deg") : setBtnRotate("0deg");
  };
  return (
    <div className="home-container">
      <div className="home-box" style={{ left: slide }}>
        <div className="home-css">
          <div className="home-css-bg">
            <span>C</span>
            <span>S</span>
            <span>S</span>
          </div>
          <HomeC1
            channel={channel}
            channelHandle={channelHandle}
            titleHandle={titleHandle}
          />
          <HomeC2
            channel={channel}
            channelHandle={channelHandle}
            titleHandle={titleHandle}
          />
          <HomeC3
            channel={channel}
            channelHandle={channelHandle}
            titleHandle={titleHandle}
          />
        </div>
        <div className="home-web">
          <div className="home-web-bg">
            <span>W</span>
            <span>E</span>
            <span>B</span>
          </div>
          <HomeW1
            channel={channel}
            channelHandle={channelHandle}
            titleHandle={titleHandle}
          />
          <HomeW2
            channel={channel}
            channelHandle={channelHandle}
            titleHandle={titleHandle}
          />
          <HomeW3
            channel={channel}
            channelHandle={channelHandle}
            titleHandle={titleHandle}
          />
        </div>
        <div className="titlebox">
          <h2 className={`titlebox-channel${channel}`}>
            {channel === "" ? "" : title}
          </h2>
        </div>
      </div>
      <button
        className="home-arrowBtn"
        onClick={changeHandle}
        style={{ right: btnRight, transform: `rotate(${btnRotate})` }}
      >
        <ion-icon name="caret-forward-circle-outline"></ion-icon>
      </button>
    </div>
  );
}

export default Home;

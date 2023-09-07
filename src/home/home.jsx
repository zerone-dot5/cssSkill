import React, { useState } from "react";
import "./home.css";
import HomeC1 from "./home-c1.jsx";
import HomeC2 from "./home-c2";
import HomeC3 from "./home-c3";

function Home(props) {
  const [channel, setChannel] = useState("");
  const [title, setTitle] = useState("");

  const channelHandle = (e) => {
    setChannel(e);
  };

  const titleHandle = (e) => {
    setTitle(e);
  };

  console.log(title);

  return (
    <div className="home-container">
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
      <div className="titlebox">
        <h2 className={`titlebox-channel${channel}`}>{title}</h2>
      </div>
    </div>
  );
}

export default Home;

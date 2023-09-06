import React, { useState } from "react";
import "./home.css";
import HomeC1 from "./home-c1.jsx";
import HomeC2 from "./home-c2";
import HomeC3 from "./home-c3";

function Home(props) {
  const [channel, setChannel] = useState("");

  const channelHandle = (e) => {
    setChannel(e);
  };

  console.log(channel);
  return (
    <div className="home-container">
      <HomeC1 channel={channel} channelHandle={channelHandle} />
      <HomeC2 channel={channel} channelHandle={channelHandle} />
      <HomeC3 channel={channel} channelHandle={channelHandle} />
    </div>
  );
}

export default Home;

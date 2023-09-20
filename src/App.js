import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Arrow from "./arrow";
import Home from "./home/home";

import ChangeCursor from "./cssSkill/changecursor/changeCursor";
import MenuAnimation from "./cssSkill/manuanimation/menuani";
import Neonlightbtn from "./cssSkill/neonlightbtn/neonlightbtn";
import Isometricmenu from "./cssSkill/isometricmenu/isometricmenu";
import NeonText from "./cssSkill/neontext/neontext";
import Futuristiccard from "./cssSkill/futuristiccard/futuristiccard";
import Productcard from "./cssSkill/productcard/productcard";
import Glassball from "./cssSkill/glassball/glassball";
import Clickpaint from "./cssSkill/clickpaint/clickpaint";
import Gallery from "./cssSkill/galleryHover/gallery";
import Radialmenu from "./cssSkill/radialmenu/radialmenu";
import Scrollevent from "./cssSkill/scrollevent/scrollevent";
import Cube3d from "./cssSkill/cube3d/cube3d";
import MediaIcon from "./cssSkill/mediaicon/mediaicon";
import Iconbg from "./cssSkill/iconbg/iconbg";
import Infinityloading from "./cssSkill/infinityloading/infinityloading";
import Randommove from "./cssSkill/randommove/randommove";
import Droprain from "./cssSkill/droprain/droprain";
import Logintheme from "./cssSkill/logintheme/logintheme";
import Socialmediahover from "./cssSkill/SocialMediaHover/socialmediahover";

function App() {
  const [active, setActive] = useState("");

  const activeHandle = (e) => {
    setActive(e);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Arrow activeHandle={activeHandle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changecursor" element={<ChangeCursor />} />
          <Route path="/menuanimation" element={<MenuAnimation />} />
          <Route path="/neonlightbtn" element={<Neonlightbtn />} />
          <Route path="/isometricmenu" element={<Isometricmenu />} />
          <Route path="/randommove" element={<Randommove />} />
          <Route path="/neontext" element={<NeonText />} />
          <Route path="/logintheme" element={<Logintheme />} />
          <Route path="/futuristiccard" element={<Futuristiccard />} />
          <Route path="/productcard" element={<Productcard />} />
          <Route path="/glassball" element={<Glassball />} />
          <Route path="/clickpaint" element={<Clickpaint />} />
          <Route path="/galleryhover" element={<Gallery />} />
          <Route path="/radialmenu" element={<Radialmenu />} />
          <Route path="/scrollevent" element={<Scrollevent />} />
          <Route path="/cube3d" element={<Cube3d />} />
          <Route path="/mediaicon" element={<MediaIcon />} />
          <Route path="/iconbackground" element={<Iconbg />} />
          <Route path="/infinityloading" element={<Infinityloading />} />
          <Route path="/droprain" element={<Droprain />} />
          <Route path="/socialmediahover" element={<Socialmediahover />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

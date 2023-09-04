import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./App.css";
import ChangeCursor from "./changecursor/changeCursor";
import Main from "./main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuAnimation from "./manuanimation/menuani";
import Neonlightbtn from "./neonlightbtn/neonlightbtn";
import Isometricmenu from "./isometricmenu/isometricmenu";
import TextRain from "./textrain/textrain";
import Arrow from "./arrow";
import NeonText from "./neontext/neontext";
import Stickymemo from "./stickymemo/stickymemo";
import Futuristiccard from "./futuristiccard/futuristiccard";
import Productcard from "./productcard/productcard";
import Glassball from "./glassball/glassball";
import Clickpaint from "./clickpaint/clickpaint";
import Gallery from "./galleryHover/gallery";
import Radialmenu from "./radialmenu/radialmenu";
import Scrollevent from "./scrollevent/scrollevent";
import Cube3d from "./cube3d/cube3d";
import MediaIcon from "./mediaicon/mediaicon";
function App() {
  const [active, setActive] = useState("");

  const activeHandle = (e) => {
    setActive(e);
  };

  console.log(active);
  return (
    <BrowserRouter>
      <div className="App">
        <Arrow activeHandle={activeHandle} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/changecursor" element={<ChangeCursor />} />
          <Route path="/menuanimation" element={<MenuAnimation />} />
          <Route path="/neonlightbtn" element={<Neonlightbtn />} />
          <Route path="/isometricmenu" element={<Isometricmenu />} />
          <Route
            path="/textrain"
            element={<TextRain active={active} activeHandle={activeHandle} />}
          />
          <Route path="/neontext" element={<NeonText />} />
          <Route path="/stickymemo" element={<Stickymemo />} />
          <Route path="/futuristiccard" element={<Futuristiccard />} />
          <Route path="/productcard" element={<Productcard />} />
          <Route path="/glassball" element={<Glassball />} />
          <Route path="/clickpaint" element={<Clickpaint />} />
          <Route path="/galleryhover" element={<Gallery />} />
          <Route path="/radialmenu" element={<Radialmenu />} />
          <Route path="/scrollevent" element={<Scrollevent />} />
          <Route path="/cube3d" element={<Cube3d />} />
          <Route path="/mediaicon" element={<MediaIcon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

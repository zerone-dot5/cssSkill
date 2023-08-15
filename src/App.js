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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Arrow />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/changecursor" element={<ChangeCursor />} />
          <Route path="/menuanimation" element={<MenuAnimation />} />
          <Route path="/neonlightbtn" element={<Neonlightbtn />} />
          <Route path="/isometricmenu" element={<Isometricmenu />} />
          <Route path="/textrain" element={<TextRain />} />
          <Route path="/neontext" element={<NeonText />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

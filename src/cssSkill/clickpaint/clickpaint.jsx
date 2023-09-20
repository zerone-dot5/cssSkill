import React, { useEffect, useState } from "react";
import "./clickpaint.css";
import img1 from "./cp1.png";
import img2 from "./cp2.png";
import img3 from "./cp3.png";
import img4 from "./cp4.png";
import img5 from "./cp5.png";
import img6 from "./cp6.png";
import img7 from "./cp7.png";
import img8 from "./cp8.png";
import img9 from "./cp9.png";
import img10 from "./cp10.png";
import img11 from "./cp11.png";
import img12 from "./cp12.png";
import img13 from "./cp13.png";
import img14 from "./cp14.png";
import img15 from "./cp15.png";
import img16 from "./cp16.png";

let imgList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

function Clickpaint(props) {
  const [arr, setArr] = useState([]);

  const clickHandle = (e) => {
    let list = {
      styleX: "",
      styleY: "",
      bg: null,
    };

    let random = Math.floor(Math.random() * imgList.length);

    list.styleX = e.pageX - e.target.offsetLeft;
    list.styleY = e.pageY - e.target.offsetTop;
    list.bg = imgList[random];

    setArr((prev) => [...prev, list]);

    // setTimeout(() => {
    //   setArr((prev) =>
    //     prev.filter((item, index) => {
    //       return index !== 0;
    //     })
    //   );
    // }, 5000);
  };

  useEffect(() => {}, [arr]);

  return (
    <div className="cp-container" onClick={(e) => clickHandle(e)}>
      <h2>Just Give Up</h2>
      {arr.map((item, idx) => {
        return (
          <span
            key={idx}
            style={{
              left: arr[idx].styleX + "px",
              top: arr[idx].styleY + "px",
              backgroundImage: `url(${arr[idx].bg})`,
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default Clickpaint;

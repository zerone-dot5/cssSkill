import React, { useState } from "react";
import "./gallery.css";
import img1 from "./spider1.png";
import img2 from "./spider2.png";
import img3 from "./spider3.png";
import img4 from "./spider4.png";
import img5 from "./spider5.png";

let galleryList = [
  {
    cla: "one",
    name: "kim",
    img: img3,
  },
  {
    cla: "two",
    name: "Lee",
    img: img2,
  },
  {
    cla: "three",
    name: "Pack",
    img: img1,
  },
  {
    cla: "four",
    name: "Hong",
    img: img4,
  },
  {
    cla: "five",
    name: "David",
    img: img5,
  },
];

function Gallery(props) {
  const [widthControl, setWidthControl] = useState("1fr 1fr 1fr 1fr 1fr");

  const HoverHandle = (e, idx) => {
    switch (idx) {
      case 0:
        return setWidthControl("2fr 0.5fr 0.5fr 0.5fr 0.5fr");
      case 1:
        return setWidthControl("0.5fr 2fr 0.5fr 0.5fr 0.5fr");
      case 2:
        return setWidthControl("0.5fr 0.5fr 2fr 0.5fr 0.5fr");
      case 3:
        return setWidthControl("0.5fr 0.5fr 0.5fr 2fr 0.5fr");
      case 4:
        return setWidthControl("0.5fr 0.5fr 0.5fr 0.5fr 2fr");
    }
  };

  return (
    <div className="g-container">
      <div
        className="g-container2"
        style={{ gridTemplateColumns: widthControl }}
      >
        {galleryList.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`g-box ${item.cla}`}
              style={{ backgroundImage: `url(${item.img})` }}
              onMouseOver={(e) => HoverHandle(e, idx)}
              onMouseLeave={() => setWidthControl("1fr 1fr 1fr 1fr 1fr")}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

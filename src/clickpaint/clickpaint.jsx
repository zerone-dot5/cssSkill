import React, { useEffect, useState } from "react";
import "./clickpaint.css";

function Clickpaint(props) {
  const [arr, setArr] = useState([]);

  const clickHandle = (e) => {
    let list = {
      styleX: "",
      styleY: "",
    };

    list.styleX = e.pageX - e.target.offsetLeft;
    list.styleY = e.pageY - e.target.offsetTop;

    setArr((prev) => [...prev, list]);
  };

  useEffect(() => {
    console.log(arr);
  }, [arr]);
  return (
    <div className="cp-container" onClick={(e) => clickHandle(e)}>
      {arr.map((item, idx) => {
        return (
          <span
            key={idx}
            style={{
              left: arr[idx].styleX + "px",
              top: arr[idx].styleY + "px",
            }}
          ></span>
        );
      })}
      <h2>Just Give Up</h2>
    </div>
  );
}

export default Clickpaint;

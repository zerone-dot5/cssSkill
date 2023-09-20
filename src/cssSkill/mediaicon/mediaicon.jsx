import React from "react";
import "./mediaicon.css";

let list = [
  <i className="fa fa-facebook" aria-hidden="true"></i>,
  <i class="fa fa-instagram" aria-hidden="true"></i>,
  <i class="fa fa-youtube-play" aria-hidden="true"></i>,
  <i class="fa fa-google" aria-hidden="true"></i>,
  <i class="fa fa-twitter" aria-hidden="true"></i>,
];

function MediaIcon(props) {
  return (
    <div className="MediaIcon-container">
      <ul>
        {list.map((item, idx) => {
          return (
            <li key={idx}>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MediaIcon;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Arrow({ activeHandle }) {
  const [display, setDisplay] = useState(0);
  const location = useLocation();

  let currentPath = "";
  useEffect(() => {
    if (currentPath === location.pathname) window.location.reload();
    if (location.pathname === "/") {
      setDisplay(0);
    } else {
      setDisplay(1);
    }

    if (location.pathname !== "/textrain") {
      activeHandle("");
    }
  }, [location]);

  const arrowHandle = () => {
    if (location.pathname === "/droprain") {
      location.reload();
    }
    activeHandle("");
  };
  return (
    <div className="arrow-container" style={{ opacity: display }}>
      <Link to="/" className="arrow-box" onClick={arrowHandle}>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </Link>
    </div>
  );
}

export default Arrow;

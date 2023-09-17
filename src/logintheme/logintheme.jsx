import React from "react";
import "./logintheme.css";

function Logintheme(props) {
  return (
    <div className="lt-container">
      <div className="lt-box">
        <i></i>
        <i></i>
        <i></i>
        <div className="lt-login">
          <h2>Login</h2>
          <div className="lt-inputBx">
            <input type="text" placeholder="Username" />
          </div>
          <div className="lt-inputBx">
            <input type="password" placeholder="Password" />
          </div>
          <div className="lt-inputBx">
            <input type="Submit" placeholder="Sign in" defaultValue="Sign in" />
          </div>
          <div className="lt-links">
            <a href="#">Forget Password</a>
            <a href="#">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logintheme;

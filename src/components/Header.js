import React from "react";

function Header() {
  let time = new Date();
  let hours = time.getHours();
  let mode = "";

  if (hours > 16) {
    mode = "nightMode";
  } else {
    mode = "dayMode";
  }

  return (
    <div className={`navbar ${mode}`}>
      <div className="logo">
        <h1> LOGO </h1>
      </div>

      <ul className="menu">
        <li>
          <a href="#"> HOME </a>
        </li>
        <li>
          <a href="#"> ABOUT </a>
        </li>
        <li>
          <a href="#"> CONTACT </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;

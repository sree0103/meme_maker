import React from "react";
import meme from "../Images/meme.png";
import "../Styles/header.css";

function Header() {
  return (
    <header className="header">
      <img src={meme} alt="meme face" className="header-img"></img>
      <h1 className="header-text">Meme Generator</h1>
    </header>
  );
}
export default Header;

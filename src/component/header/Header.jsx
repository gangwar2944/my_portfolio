import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <div>
      <header id="home">
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h2>Vishal gangwar </h2>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocial />
          <div className="me">
            <img
              src="https://www.pngall.com/wp-content/uploads/8/Young-Man-PNG-Free-Image.png"
              alt="my image"
            />
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;

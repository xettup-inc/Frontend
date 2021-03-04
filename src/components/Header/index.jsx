import React from "react";
import "./style.scss";

const Header = () => (
  <header className="header">
    <a className="header__Figure" href="#">
        <img className="header__logo" src="" alt="logo xettup"/>
      </a>
    <nav>
      <ol className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Build Computer</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Peripherals</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Office</a></li>
      </ol>
    </nav>
    <div>
      <a href="">USD</a>
      <img src="" alt="flag"/>
    </div>
    <a href="">Profile</a>
    <a href="">My cart</a>
    <img src="" alt="theme"/>
  </header>
);

export default Header;

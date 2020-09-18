import React from 'react';
import './style.css';
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src="../images/logo-alt.webp" alt="logo" draggable="false" />
          </div>
          <div className="nav">
            <ul>
              <li><a href="#home" className="active">home</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#offers">offers</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#prices">prices</a></li>
              <li><a href="#team">team</a></li>
              <li className="dropdown">
                <a href="#blog">blog</a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item hover-opacity">
                    <a href="#">blog post</a>
                  </li>
                </ul>
              </li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>

          <div className="clear" />
        </div>
      </div>

    </div>
  );
};

export default Header;

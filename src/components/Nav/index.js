import React from 'react';
import './style.css';
import NavTabs from './NavTabs'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-1 py-md-2">
      <div className="container">
        <h3>Creative<span>Agency</span></h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse"               data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="nav collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-lg-auto">
            <NavTabs />
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Header;

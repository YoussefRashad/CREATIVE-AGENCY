import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img src="./images/logo-alt.webp" alt="logo" draggable="false" />
        <ul>
          <li>
            <a href="#" className="hover-opacity"><i className="fa fa-facebook" /></a>
          </li>
          <li>
            <a href="#" className="hover-opacity"><i className="fa fa-twitter" /></a>
          </li>
          <li>
            <a href="#" className="hover-opacity"><i className="fa fa-youtube" /></a>
          </li>
          <li>
            <a href="#" className="hover-opacity"><i className="fa fa-linkedin" /></a>
          </li>
          <li>
            <a href="#" className="hover-opacity">
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li>
            <a href="#" className="hover-opacity"><i className="fa fa-instagram" /></a>
          </li>
        </ul>
        <p className="copyright">
          copyright &copy; 2020. all right reserved by
          {' '}
          <span>youssef rashad</span>
        </p>
      </div>

    </div>
  );
};

export default Footer;

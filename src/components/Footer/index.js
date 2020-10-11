import React from 'react';
import './style.css';
import { dataFooter } from '../../data'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h3>Creative<span>Agency</span></h3>
        <ul>
          {
            dataFooter.map((item, index) => <li key={index} > <a href={item.link} className="hover-opacity" target="_blank" rel="noopener noreferrer"><i className={item.icon}/></a>
          </li>)
          }

        </ul>
        <p className="copyright">
          copyright &copy; {new Date().getFullYear()}. all right reserved by
          {' '}
          <span>youssef rashad</span>
        </p>
      </div>

    </div>
  );
};

export default Footer;
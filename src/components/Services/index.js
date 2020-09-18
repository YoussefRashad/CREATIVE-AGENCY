import React from 'react';
import './style.css';
const Service = () => {
  return (
    <div>
      <div className="service pd-y bg-gray" id="services">
        <div className="container">
          <div className="service-item">

            <div className="section-header">
              <h2 className="section-title">why choose us</h2>
              <span className="line" />
            </div>

            <div className="service-item-desc">
              Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non
              consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris. Ultrices sagittis orci a
              scelerisque purus.
            </div>
            <ul className="ulList">
              <li>
                <i className="fa fa-check fa-fw" />
                Quis varius quam quisque id diam vel quam elementum
              </li>
              <li>
                <i className="fa fa-check fa-fw" />
                Quis varius quam quisque id diam vel quam elementum
              </li>
              <li>
                <i className="fa fa-check fa-fw" />
                Quis varius quam quisque id diam vel quam elementum
              </li>
              <li>
                <i className="fa fa-check fa-fw" />
                Quis varius quam quisque id diam vel quam elementum
              </li>
            </ul>

          </div>

          <div className="service-item">
            <div className="service-item-img">
              <img src="./images/about/about1.webp" alt="about1" />
              <ul className="ballets">
                <li className="active" />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>

    </div>
  );
};

export default Service;

import React from 'react';
import './style.css';
import image from '../../assets/img/about/about1.webp'

const Service = () => {
  return (
    <div>
      <div className="service pd-y bg-gray" id="services">
        <div className="container">

        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mb-2">

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
              {
                [...Array(4)].map( (item, index) =>{
                  return(
                    <li key={index}>
                      <i className="fa fa-check fa-fw" />
                      Quis varius quam quisque id diam vel quam elementum
                    </li>
                  );
                })
              }
            </ul>

          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="service-item-img">
              <img src={image} alt="about1" />

              <ul className="ballets">
                {[...Array(6)].map((item, index)=> <li className={!index ? "active" : '' } key={index} />)}
              </ul>

            </div>
          </div>
        </div>


        </div>
      </div>
    </div>
  );
};

export default Service;

import React from 'react';
import './style.css';

const About = () => {
  return (
    <div>
      <div className="about pd-y">

        <div className="section-header" id="about">
          <h2 className="section-title">welcome to website</h2>>
          <span className="line" />
        </div>

        <div className="container">
          <div className="about-content">

            <div className="about-item ltr-effect">
              <i className="icon fa fa-cogs fa-2x" />
              <h4 className="about-item-title">Fully Customizible</h4>
              <p className="about-item-desc">
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero
                sit amet.
              </p>
              <a href="#" className="about-item-link">Read More</a>
            </div>

            <div className="about-item ltr-effect mg-lr">
              <i className="icon fa fa-magic fa-2x" />
              <h4 className="about-item-title">Fully Customizible</h4>
              <p className="about-item-desc">
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero
                sit amet.
              </p>
              <a href="#" className="about-item-link">Read More</a>
            </div>

            <div className="about-item ltr-effect">
              <i className="icon fa fa-mobile fa-2x" />
              <h4 className="about-item-title">Fully Customizible</h4>
              <p className="about-item-desc">
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero
                sit amet.
              </p>
              <a href="#" className="about-item-link">Read More</a>
            </div>

          </div>
          <div className="clear" />
        </div>

      </div>

    </div>
  );
};

export default About;

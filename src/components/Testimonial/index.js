import React from 'react';
import './style.css';
const Testimonial = () => {
  return (
    <div>
      <div className="testimonail">
        <div className="overlay">
          <div className="container">
            <div className="testimonail-items">

              <div className="testimonail-item">
                <div className="toplayer">
                  <img src="./images/Testimonial/perso1.webp" alt="p1" />
                  <p className="testimonail-item-title">John Doe</p>
                  <p className="testimonail-item-job">Web designer</p>
                </div>
                <p className="testimonail-item-desc">
                  Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat.
                  Aliquam id diam maecenas ultricies mi eget mauris.
                </p>
              </div>
              <div className="testimonail-item">
                <div className="toplayer">
                  <img src="./images/Testimonial/perso2.webp" alt="p1" />
                  <p className="testimonail-item-title">John Doe</p>
                  <p className="testimonail-item-job">Web designer</p>
                </div>
                <p className="testimonail-item-desc">
                  Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat.
                  Aliquam id diam maecenas ultricies mi eget mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>

    </div>
  );
};

export default Testimonial;

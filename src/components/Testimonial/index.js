import React from 'react';
import Testimonial from './testimonial'
import './style.css';
import { dataTestimonial } from '../../data'

const index = () => {
  return (
    <div>
      <div className="testimonail">
        <div className="overlay">
          <div className="container">

            <div className="testimonail-items">
              <div className="row">
                {dataTestimonial.map((item, index) => <Testimonial {...item} key={index} />)}
              </div>
            </div>
            
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default index;

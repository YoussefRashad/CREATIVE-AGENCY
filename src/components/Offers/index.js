import React from 'react';
import './style.css';
import Offer from './offer'
import { dataOffer } from '../../data'

const index = () => {
  return (
    <div>
      <div className="offer pd-y" id="offers">
      
        <div className="section-header">
          <h2 className="section-title">what we offer</h2>
          <span className="line" />
        </div>

        <div className="container">
          <div className="row">
            {dataOffer.map((item, index)=> <Offer {...item} key={index} /> )}
          </div>
        <div/>

      </div>
    
      </div>
    </div>
  );
};

export default index;
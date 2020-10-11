import React from 'react';
import Price from './price'
import './style.css';
import { dataPricing } from '../../data'
const index = () => {

  return (
    <div>
      <div className="pricing pd-y" id="prices">

        <div className="section-header">
          <h2 className="section-title">pricing table</h2>
          <span className="line" />
        </div>

        <div className="container-fluid">
          <div className="pricing-items row">

            {dataPricing.map((item, index) => <Price {...item} key={index} /> )}
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default index;
import React from 'react';
import './style.css';
import Portfolio from './portfolio'
import { dataPortfolio } from '../../data'

const index = () => {
  return (
    <div>
      <div className="portfolio pd-y bg-gray" id="portfolio">
      
        <div className="section-header">
          <h2 className="section-title">featured works</h2>
          <span className="line" />
        </div>

        <div className="container">
          <div className="row">
            {dataPortfolio.map((item, index) => <Portfolio {...item} key={index} /> )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default index;

import React from 'react';
import Number from './Number'
import './style.css';
import { dataNumber } from '../../data'

const index = () => {
  return (
    <main>
      <div className="number">
        <div className="overlay">
          <div className="container">
            <div className="number-items">
              <div className="row">

                {dataNumber.map((item, index)=> <Number {...item} key={index} /> )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;

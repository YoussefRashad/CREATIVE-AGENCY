import React from 'react';
import './style.css';
import About from './about'
import { dataAbout } from '../../data'

const index = () => {
  

  return (
    <div>
      <div className="about pd-y">

        <div className="section-header" id="about">
          <h2 className="section-title">welcome to website</h2>
          <span className="line" />
        </div>
        
        <div className="container">
          <div className="row">
            {dataAbout.map( (item, index)=> <About {...item} key={index} /> ) }
          </div>
        </div>

      </div>

    </div>
  );
};

export default index;
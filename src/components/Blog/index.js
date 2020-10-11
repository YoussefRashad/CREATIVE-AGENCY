import React from 'react';
import Blog from './blog'
import './style.css';
import { dataBlog } from '../../data'

const index = () => {
  return (
    <div>

      <div className="blog pd-y bg-gray" id="blog">
        <div className="section-header">
          <h2 className="section-title">recent news</h2>
          <span className="line" />
        </div>

        <div className="container">
          <div className="row">

            {dataBlog.map((item, index)=> <Blog {...item} key={index} />)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

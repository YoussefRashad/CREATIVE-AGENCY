import React from 'react';
import './style.css';
const Number = () => {
  return (
    <div>
      <div className="number">
        <div className="overlay">
          <div className="container">
            <div className="number-items">
              <div className="number-item">
                <span><i className="icon fa fa-users fa-2x" /></span>
                <p className="number-item-count">451</p>
                <p className="number-item-desc">Happy clients</p>
              </div>
              <div className="number-item">
                <span><i className="icon fa fa-trophy fa-2x" /></span>
                <p className="number-item-count">451</p>
                <p className="number-item-desc">Happy clients</p>
              </div>
              <div className="number-item">
                <span><i className="icon fa fa-coffee fa-2x" /></span>
                <p className="number-item-count">451K</p>
                <p className="number-item-desc">Happy clients</p>
              </div>
              <div className="number-item">
                <span><i className="icon fa fa-file fa-2x" /></span>
                <p className="number-item-count">451</p>
                <p className="number-item-desc">Happy clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>

    </div>
  );
};

export default Number;

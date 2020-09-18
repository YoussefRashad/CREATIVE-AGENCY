import React from 'react';
import './style.css';
const Pricing = () => {
  return (
    <div>
      <div className="pricing pd-y" id="prices">
        <div className="section-header">
          <h2 className="section-title">pricing table</h2>
          <span className="line" />
        </div>
        <div className="container">
          <div className="pricing-items">

            <div className="pricing-item ttb-effect">
              <div className="pricing-item-content">
                <p className="pricing-item-title">basic plan</p>
                <div className="pricing-title-salary">
                  <p className="dollar">$9</p>
                  <p className="month">/ month</p>
                </div>
                <ul>
                  <li>1GB Disk Space</li>
                  <li>100 Email Account</li>
                  <li>24/24 Support</li>
                </ul>
                <button className="purchase">purchase now</button>
              </div>
            </div>

            <div className="pricing-item mg-lr ttb-effect">
              <div className="pricing-item-content">
                <p className="pricing-item-title">basic plan</p>
                <div className="pricing-title-salary">
                  <p className="dollar">$9</p>
                  <p className="month">/ month</p>
                </div>
                <ul>
                  <li>1GB Disk Space</li>
                  <li>100 Email Account</li>
                  <li>24/24 Support</li>
                </ul>
                <button className="purchase">purchase now</button>
              </div>
            </div>

            <div className="pricing-item ttb-effect">
              <div className="pricing-item-content">
                <p className="pricing-item-title">basic plan</p>
                <div className="pricing-title-salary">
                  <p className="dollar">$9</p>
                  <p className="month">/ month</p>
                </div>
                <ul>
                  <li>1GB Disk Space</li>
                  <li>100 Email Account</li>
                  <li>24/24 Support</li>
                </ul>
                <button className="purchase">purchase now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pricing;

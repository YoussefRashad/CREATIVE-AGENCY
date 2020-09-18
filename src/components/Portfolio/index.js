import React from 'react';
import './style.css';

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio pd-y bg-gray" id="portfolio">
        <div className="section-header">
          <h2 className="section-title">featured works</h2>
          <span className="line" />
        </div>

        <div className="container">
          <div className="portfolio-items">

            <div className="portfolio-item">
              <img src="./images/work/work1.webp" alt="work1" />
              <div className="layer-content">
                <div className="layer-info">
                  <p className="portfolio-item-title">category</p>
                  <p className="portfolio-item-desc">Lorem, ipsum dolor.</p>
                  <a href="#"><i className="icon fa fa-edit" /></a>
                  <a href="#"><i className="icon fa fab fa-search" /></a>
                </div>
              </div>
            </div>

            <div className="portfolio-item mg-lr">
              <img src="./images/work/work2.webp" alt="work1" />
              <div className="layer-content">
                <div className="layer-info">
                  <p className="portfolio-item-title">category</p>
                  <p className="portfolio-item-desc">Lorem, ipsum dolor.</p>
                  <a href="#"><i className="icon fa fa-edit" /></a>
                  <a href="#"><i className="icon fa fab fa-search" /></a>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="./images/work/work3.webp" alt="work1" />
              <div className="layer-content">
                <div className="layer-info">
                  <p className="portfolio-item-title">category</p>
                  <p className="portfolio-item-desc">Lorem, ipsum dolor.</p>
                  <a href="#"><i className="icon fa fa-edit" /></a>
                  <a href="#"><i className="icon fa fab fa-search" /></a>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="./images/work/work4.webp" alt="work1" />
              <div className="layer-content">
                <div className="layer-info">
                  <p className="portfolio-item-title">category</p>
                  <p className="portfolio-item-desc">Lorem, ipsum dolor.</p>
                  <a href="#"><i className="icon fa fa-edit" /></a>
                  <a href="#"><i className="icon fa fab fa-search" /></a>
                </div>
              </div>
            </div>

            <div className="portfolio-item mg-lr">
              <img src="./images/work/work5.webp" alt="work1" />
              <div className="layer-content">
                <div className="layer-info">
                  <p className="portfolio-item-title">category</p>
                  <p className="portfolio-item-desc">Lorem, ipsum dolor.</p>
                  <a href="#"><i className="icon fa fa-edit" /></a>
                  <a href="#"><i className="icon fa fab fa-search" /></a>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="./images/work/work6.webp" alt="work1" />
              <div className="layer-content">
                <div className="layer-info">
                  <p className="portfolio-item-title">category</p>
                  <p className="portfolio-item-desc">Lorem, ipsum dolor.</p>
                  <a href="#"><i className="icon fa fa-edit" /></a>
                  <a href="#"><i className="icon fa fab fa-search" /></a>
                </div>
              </div>
            </div>

          </div>
          <div className="clear" />
        </div>
      </div>

    </div>
  );
};

export default Portfolio;

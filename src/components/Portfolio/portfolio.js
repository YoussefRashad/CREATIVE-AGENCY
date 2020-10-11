import React from 'react';

const portfolio = ({ img, title, desc }) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="portfolio-item">
                <img src={img} alt="work" />
                <div className="layer-content">
                    <div className="layer-info">
                        <p className="portfolio-item-title">{title}</p>
                        <p className="portfolio-item-desc">{desc}</p>
                        <a href="/#portfolio" ><i className="icon fa fa-edit" /></a>
                        <a href="/#portfolio" ><i className="icon fa fab fa-search" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default portfolio;

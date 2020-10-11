import React from 'react';

const offer = ({title, desc, icon}) => {
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-2">
            <div className={`offer-item ltr-effect`}>
                <span><i className={icon} /></span>
                <h4 className="offer-item-title">{title}</h4>
                <p className="offer-item-desc">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default offer;

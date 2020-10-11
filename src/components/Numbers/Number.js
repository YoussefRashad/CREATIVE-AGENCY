import React from 'react';

const Number = ({title, count, icon}) => {
    return (
            <div className="number-item col-md-3 col-6">
                <span><i className={icon} /></span>
                <p className="number-item-count">{count}</p>
                <p className="number-item-desc">{title}</p>
            </div>
    );
}

export default Number;

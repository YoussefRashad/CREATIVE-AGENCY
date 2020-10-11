import React from 'react';

const price = ({title, price, features, ID}) => {
    return (
        <div className="col-md-4 col-12 mb-3">
            <div className="pricing-item ttb-effect">
                <div className="pricing-item-content">
                    <p className="pricing-item-title">{title}</p>
                    <div className="pricing-title-salary">
                        <p className="dollar">{price}</p>
                        <p className="month">/ month</p>
                    </div>
                    <ul>
                        {features.map( (item, index)=> <li key={index}> {item} </li> )}
                    </ul>
                    <button className="purchase">purchase now</button>
                </div>
            </div>
        </div>
    );
}

export default price;

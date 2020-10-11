import React from 'react';

const testimonial = ({ name, position, desc, image}) => {
    return (
        <div className="col-md-4 col-12">
            <div className="testimonail-item">
                <div className="toplayer">
                    <img src={image} alt={name} />
                    <p className="testimonail-item-title">{name}</p>
                    <p className="testimonail-item-job">{position}</p>
                </div>
                <p className="testimonail-item-desc">
                    {desc}
                    </p>
            </div>
        </div>
    );
}

export default testimonial;

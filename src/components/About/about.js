import React from 'react';

const about = ( {title, desc, link, icon} ) => {
    return (
        <div className="col-lg-4 col-12 mb-2">
            <div className="about-item ltr-effect">
                <i className={icon} />
                <h4 className="about-item-title">{title}</h4>
                <p className="about-item-desc">
                    {desc}
                </p>
                <a href={link} className="about-item-link text-decoration-none">Read More</a>
            </div>
        </div>
    );
}

export default about;

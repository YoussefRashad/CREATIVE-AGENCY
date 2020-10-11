import React from 'react';

const blog = ({ name, date, msg, title, desc, link, image}) => {
    return (
        <div className="col-lg-4 col-12 mb-4">
            <div className="blog-item">
                <div className="blog-item-img">
                    <img src={image} alt={name} />
                </div>
                <div className="blog-content">
                    <ul>
                        <li>
                            <span><i className="fa fa-user" /></span>
                            <p>{name}</p>
                        </li>
                        <li>
                            <span><i className="fa fa-clock-o" /></span>
                            <p>{date}</p>
                        </li>
                        <li>
                            <span><i className="fa fa-comments" /></span>
                            <p>{msg}</p>
                        </li>
                    </ul>
                    <h4 className="blog-item-title">
                        {title}
                    </h4>
                    <p className="blog-item-desc">
                        {desc}
                    </p>
                    <a href={link} className="blog-item-link text-decoration-none">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default blog;

import React from 'react';

const team = ({name, title, image, contact }) => {
    return (
        <div className="col-md-4 col-12 mb-3">
            <div className="team-item ttb-effect">
                <div className="team-item-img">
                    <img src={image} alt="team" />

                    <div className="team-overlay">
                        {
                            contact.map((item, index) => <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}><i className={item.icon}></i></a>)
                        }
                    </div>

                </div>
                <div className="team-item-info">
                    <h4 className="team-item-title">{name}</h4>
                    <span className="team-item-position">{title}</span>
                </div>
            </div>
        </div>
    );
}

export default team;

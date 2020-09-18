import React from 'react';
import './style.css';

const Team = () => {
  return (
    <div>
      <div className="team pd-y" id="team">
        <div className="section-header">
            <h2 className="section-title">our team</h2>
            <span className="line"></span>
        </div>

        <div className="container">
            <div className="team-items">

                <div className="team-item ttb-effect">
                    <div className="team-item-img">
                        <img src="./images/team/team1.webp" alt="team1" />
                        <div className="team-overlay">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-item-info">
                        <h4 className="team-item-title">john doe</h4>
                        <span className="team-item-position">web designer</span>
                    </div>
                </div>
                <div className="team-item ttb-effect mg-lr">
                    <div className="team-item-img">
                        <img src="./images/team/team2.webp" alt="team2" />
                        <div className="team-overlay">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-item-info">
                        <h4 className="team-item-title">john doe</h4>
                        <span className="team-item-position">web designer</span>
                    </div>
                </div>
                <div className="team-item ttb-effect">
                    <div className="team-item-img">
                        <img src="./images/team/team3.webp" alt="team3" />
                        <div className="team-overlay">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-item-info">
                        <h4 className="team-item-title">john doe</h4>
                        <span className="team-item-position">web designer</span>
                    </div>
                </div>
            </div>
        </div>


    </div>

    </div>
  );
};

export default Team;

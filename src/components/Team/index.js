import React from 'react';
import Team from './team'
import './style.css';
import { dataTeam } from '../../data'

const index = () => {

    return (
    <div>
        <div className="team pd-y" id="team">
            <div className="section-header">
                <h2 className="section-title">our team</h2>
                <span className="line"></span>
            </div>

            <div className="container">
                <div className="row">
                    {dataTeam.map((item, index) => <Team {...item} key={index} /> )}
                </div>
            </div>

        </div>
    </div>
    );
    };

export default index;

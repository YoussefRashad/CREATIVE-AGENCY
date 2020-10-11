import React from 'react';
import { useLocation } from 'react-router-dom';

const Tabs = () => {
    let active = useLocation().hash.replace('#','').toLowerCase();
    if(!['home', 'about', 'portfolio', 'offers', 'services', 'prices', 'team', 'blog'].includes(active)){
        active = 'home';
    }
    return (
        <>
            <li className="nav-item">
                <a
                    href="#home"
                    className={`nav-link ${active === 'home' ? 'active' : active ? '' : 'active'
                        }`}
                >
                    home
                    <span className="sr-only">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#about" className={`nav-link ${active === 'about' ? 'active' : ''}`}>
                    about
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    className={`nav-link ${active === 'portfolio' ? 'active' : ''}`}
                >
                    portfolio
                </a>
            </li>
            <li className="nav-item">
                <a href="#offers" className={`nav-link ${active === 'offers' ? 'active' : ''}`}>
                    offers
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#services"
                    className={`nav-link ${active === 'services' ? 'active' : ''}`}
                >
                    Services
                </a>
            </li>
            <li className="nav-item">
                <a href="#prices" className={`nav-link ${active === 'prices' ? 'active' : ''}`}>
                    prices
                </a>
            </li>
            <li className="nav-item">
                <a href="#team" className={`nav-link ${active === 'team' ? 'active' : ''}`}>
                    team
                </a>
            </li>

            <li className="nav-item">
                <a
                    href="#blog"
                    className={`nav-link ${active === 'blog' ? 'active' : ''}`}
                >
                    blog
                </a>
            </li>

            <li className="nav-item">
                <a
                    href="#contact"
                    className={`nav-link ${active === 'contact' ? 'active' : ''}`}
                >
                    contact
                </a>
            </li>
        </>
    );
};

export default Tabs
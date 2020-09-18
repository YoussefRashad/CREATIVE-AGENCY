import React from 'react';
import './style.css';
const Home = () => {
  return (
    <div>
      <div className="home" id="home">
        <div className="overlay">
          <div className="home-content">
            <h1 className="home-title">we are creative agency</h1>
            <p className="home-desc">
              Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna
              gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
            </p>
            <button className="btn btn-info hover-opacity">get started !</button>
            <button className="btn btn-learn hover-opacity">learn more !</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;

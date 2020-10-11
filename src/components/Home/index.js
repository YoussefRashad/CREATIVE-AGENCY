import React from 'react';
import './style.css';

const Home = () => {
  return (
    <main>
      <div className="home" id="home">
        <div className="overlay">
          <div className="home-content">
            <h1 className="home-title">we are creative agency</h1>
            <p className="home-desc">
              Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna
              gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
            </p>
            <button className="bttn bttn-info hover-opacity">
              <a href="#about">get started !</a>
            </button>
            <button className="bttn bttn-learn hover-opacity">
              <a href="#contact">learn more !</a>
            </button>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;

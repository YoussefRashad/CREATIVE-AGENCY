import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// all components
import Header from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Offers from './components/Offers';
import Service from './components/Services';
import Number from './components/Numbers';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Offers />
      <Service />
      <Number />
      <Pricing />
      <Testimonial />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}



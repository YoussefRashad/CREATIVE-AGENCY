import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// all components
import Header from './components/Nav/index';
import Home from './components/Home/index';
import About from './components/About/index';
import Portfolio from './components/Portfolio/index';
import Offers from './components/Offers/index';
import Service from './components/Services/index';
import Number from './components/Numbers/index';
import Pricing from './components/Pricing/index';
import Testimonial from './components/Testimonial/index';
import Team from './components/Team/index';
import Blog from './components/Blog/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';


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



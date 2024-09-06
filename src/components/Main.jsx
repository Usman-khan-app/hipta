
import React from 'react';
import './main.css';
import Header from './Header';
import Links from './Links';
import Hero from './Hero';
import Scroll from './Scroll';

export default function Main() {
  return (
    
      <div className="main">
    <div className="overlay">
    <Header/>
    <Links />
    <Hero />
    <Scroll />
    </div>
      </div>
  );
}


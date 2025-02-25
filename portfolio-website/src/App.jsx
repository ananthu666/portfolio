import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Parallax from './components/Parallax';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Parallax 
        image="/images/parallax1.gif" 
        text="Creating Digital Experiences" 
      />
      <About />
      <Parallax 
        image="/images/parallax2.jpg" 
        text="Bringing Ideas to Life" 
      />
      <Projects />
      <Parallax 
        image="/images/parallax33.jpg" 
        text="Mastering Modern Technologies" 
      />
      <Skills />
      <Parallax 
        image="/images/parallax44.jpg" 
        text="Let's Connect" 
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
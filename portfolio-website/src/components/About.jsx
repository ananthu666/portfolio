
// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/images/profile.jpg" alt="Profile" />
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              Hello! I'm a passionate full-stack developer with over 1 years of experience
              creating web applications using modern technologies. My journey in programming
              began during college, and since then, I've worked on numerous projects for clients
              across various industries.
            </p>
            <p>
              I specialize in React Native, Django,.Net, and modern web development practices. I'm dedicated
              to creating intuitive, responsive, and performant applications that provide an
              excellent user experience.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading about new technologies,
              or experimenting with photography.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

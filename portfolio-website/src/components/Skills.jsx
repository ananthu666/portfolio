
// components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 90 },
  { name: "React Native", level: 90 },
  { name: "Firebase", level: 80 },
  { name: "Django", level: 85 },
  { name: "Python", level: 60 },
  { name: ".Net", level: 70 }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="skill"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


// components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Tech fest Website",
    description: "A full-featured online  platform for My college Tech Fest (Drishti) 2024.",
    image: "/images/project1.png",
    tags: ["React vite", "Javascript", "Firebase", "Tailwind css"],
    link: "https://drishti-cet.vercel.app/"
  },
  {
    id: 2,
    title: "Private Hostel Website",
    description: "A Website for knowing private hostels near my college",
    image: "/images/project2.png",
    tags: ["React", "Supabase", "Django"],
    link: "https://privatehostelcet.onrender.com/"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Responsive portfolio website with dark theme and modern animations.",
    image: "/images/project3.png",
    tags: ["React", "Framer Motion", "Vite"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

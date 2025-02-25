import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faDribbble, faKaggle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Get In Touch</h3>
            <p>Feel free to reach out to me if you have any questions or would like to discuss a project.</p>
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>ananthujayakumar02@gmail.com</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+91 9495731973</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Kerala, India</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/ananthu666" className="social-link">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/ananthu-jayakumar-8254b1237" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/home" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.kaggle.com/" className="social-link">
                <FontAwesomeIcon icon={faKaggle} />
              </a>
            </div>
          </motion.div>
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
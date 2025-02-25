
// components/Parallax.jsx
import React, { useRef, useEffect } from 'react';

const Parallax = ({ image, text }) => {
  const parallaxRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.pageYOffset;
      const parallaxElement = parallaxRef.current;
      const parallaxOffset = parallaxElement.offsetTop;
      const distance = scrollPosition - parallaxOffset;
      const speed = 0.5;
      
      if (scrollPosition > parallaxOffset - window.innerHeight && 
          scrollPosition < parallaxOffset + parallaxElement.offsetHeight) {
        parallaxElement.style.backgroundPositionY = `${distance * speed}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={parallaxRef} 
      className="parallax" 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="parallax-content">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Parallax;

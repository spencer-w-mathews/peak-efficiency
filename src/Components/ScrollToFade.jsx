// ScrollToFade.js
import React, { useState, useEffect, useRef } from 'react';
import './ScrollToFade.css'; // Make sure to import the corresponding CSS

const ScrollToFade = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeRef = useRef(null);

  useEffect(() => {
    // Create an intersection observer to observe when the element comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the fade-in effect
          observer.unobserve(fadeRef.current); // Stop observing once it's visible
        }
      },
      { threshold: 0.3 } // Trigger when 50% of the element is visible
    );

    if (fadeRef.current) {
      observer.observe(fadeRef.current);
    }

    return () => {
      if (fadeRef.current) {
        observer.unobserve(fadeRef.current); // Clean up the observer on component unmount
      }
    };
  }, []);

  return (
    <div ref={fadeRef} className={`fade-in-element ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollToFade;

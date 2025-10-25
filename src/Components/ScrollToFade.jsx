import React, { useState, useEffect, useRef } from 'react';
import './ScrollToFade.css';

const ScrollToFade = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeRef = useRef(null);

  useEffect(() => {
    const node = fadeRef.current; // ✅ capture the current value
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // use the captured node
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // ✅ cleanup using the same node reference
    };
  }, []);

  return (
    <div ref={fadeRef} className={`fade-in-element ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollToFade;

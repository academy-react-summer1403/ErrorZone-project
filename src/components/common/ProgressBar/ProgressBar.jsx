// ProgressBar.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Initialize the ScrollTrigger animation
    gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body, // Trigger based on the entire document
        start: 'top top',
        end: 'bottom bottom',
        scrub: true, // Smoothly animate based on scroll
        onUpdate: (self) => {
          progressBarRef.current.style.transform = `scaleX(${self.progress})`;
        },
      },
    });
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
        backgroundColor: '#eee',
        zIndex: '9999',
        transformOrigin: '0 0', // Makes scale animation from the left side
      }}
    >
      <div
        ref={progressBarRef}
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#006992',
          transform: 'scaleX(0)',
        }}
      />
    </div>
  );
};

export default ProgressBar;

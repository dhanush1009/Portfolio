import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen({ onComplete }) {
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Animate percentage from 0 to 100
    let startTimestamp = null;
    const duration = 3000; // 3 seconds to reach 100%
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for a more organic feel (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setPercentage(Math.floor(easeProgress * 100));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Complete
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 1200); // Wait for exit animation
        }, 500); // Small pause at 100%
      }
    };
    
    window.requestAnimationFrame(step);
  }, [onComplete]);

  // The text to wrap around the circle
  const circularText = "DHANUSH • CREATIVE DEVELOPER • ";
  const textArray = circularText.repeat(2).split("");

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100vh",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="intro-container">
            
            {/* Circular Rotating Text */}
            <motion.div 
              className="intro-circular-text"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="transparent"
                />
                <text>
                  <textPath href="#circlePath" startOffset="0%">
                    {circularText.repeat(2)}
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Centered Logo / Name with Blur Reveal */}
            <motion.div
              className="intro-center-logo"
              initial={{ filter: "blur(20px)", opacity: 0, scale: 0.8 }}
              animate={{ 
                filter: `blur(${Math.max(0, 20 - (percentage / 5))}px)`,
                opacity: percentage > 10 ? 1 : 0,
                scale: 1 + (percentage / 100) * 0.1
              }}
              transition={{ duration: 0.1 }}
            >
              DHANUSH
            </motion.div>

            {/* Percentage Counter */}
            <motion.div 
              className="intro-counter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {percentage}<span className="intro-counter-suffix">%</span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

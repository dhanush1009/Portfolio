import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('project-card') ||
        target.closest('.project-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "transparent",
      border: "1px solid var(--text-muted)"
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "var(--accent)",
      border: "1px solid transparent",
      mixBlendMode: "difference"
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "var(--accent)"
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "transparent"
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="custom-cursor-dot"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [hoverTarget, setHoverTarget] = useState('default');

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
      if (target.closest('.project-card')) {
        setHoverTarget('project');
      } else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setHoverTarget('interactive');
      } else {
        setHoverTarget('default');
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
      border: "1px solid var(--text-muted)",
      borderRadius: "50%"
    },
    interactive: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "transparent",
      border: "1px solid var(--accent)",
      mixBlendMode: "normal",
      borderRadius: "50%"
    },
    project: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      scale: 1,
      backgroundColor: "var(--accent)",
      border: "1px solid var(--accent)",
      mixBlendMode: "normal",
      borderRadius: "8px",
      rotate: 45
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "var(--accent)"
    },
    interactive: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "var(--text)"
    },
    project: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "var(--bg)"
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        variants={variants}
        animate={hoverTarget}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="custom-cursor-dot"
        variants={dotVariants}
        animate={hoverTarget}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
}

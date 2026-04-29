import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className }: GlitchTextProps) => {
  const [glitchIndices, setGlitchIndices] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 2) + 1; // 1-2 letters at a time
      const newIndices: number[] = [];
      while (newIndices.length < count) {
        const idx = Math.floor(Math.random() * text.length);
        if (!newIndices.includes(idx)) newIndices.push(idx);
      }
      setGlitchIndices(newIndices);
    }, 600);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{
            textTransform: glitchIndices.includes(index) ? 'uppercase' : 'lowercase',
          }}
          transition={{ duration: 0.1 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default GlitchText;

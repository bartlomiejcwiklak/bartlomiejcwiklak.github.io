import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const HeroBackground = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 40, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const blob1X = useTransform(smoothX, [0, 1], [-200, 200]);
  const blob1Y = useTransform(smoothY, [0, 1], [-200, 200]);
  
  const blob2X = useTransform(smoothX, [0, 1], [150, -150]);
  const blob2Y = useTransform(smoothY, [0, 1], [150, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        style={{
          x: blob1X,
          y: blob1Y,
          left: '10%',
          top: '10%',
        }}
        className="absolute w-[70vw] h-[70vw] bg-blue-600/20 blur-[120px] rounded-full"
      />

      <motion.div
        style={{
          x: blob2X,
          y: blob2Y,
          left: '50%',
          top: '30%',
        }}
        className="absolute w-[60vw] h-[60vw] bg-purple-600/20 blur-[120px] rounded-full"
      />

      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
    </div>
  );
};

export default HeroBackground;

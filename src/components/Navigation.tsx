import { motion } from 'framer-motion';

const Navigation = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-10 md:px-12 mix-blend-difference"
    >
      <div className="text-xl md:text-2xl font-serif tracking-tight text-white">
        B<span className="italic">.</span>C
      </div>
      <div className="flex gap-8 md:gap-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
        <a 
          href="#about" 
          onClick={(e) => handleScroll(e, '#about')}
          className="hover:text-white transition-colors duration-300"
        >
          About
        </a>
        <a 
          href="#work" 
          onClick={(e) => handleScroll(e, '#work')}
          className="hover:text-white transition-colors duration-300"
        >
          Works
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleScroll(e, '#contact')}
          className="hover:text-white transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;

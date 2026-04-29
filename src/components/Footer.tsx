import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="relative px-6 md:px-12 py-32 bg-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex flex-col gap-24">
        <div className="max-w-4xl">
          <h2 className="text-[10vw] md:text-[8vw] font-serif leading-[0.9] tracking-tighter mb-12">
            <GlitchText text="have an" /> <br />
            <span className="italic text-outline">
              <GlitchText text="idea?" />
            </span>
          </h2>
          <a
            href="mailto:bartlomiej.cwiklak@gmail.com"
            className="group relative inline-block text-2xl md:text-4xl font-serif italic overflow-hidden"
          >
            <span className="relative z-10">bartlomiej.cwiklak [at] gmail.com</span>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            <a href="https://github.com/bartlomiejcwiklak" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/bartlomiejcwiklak/" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

          <div className="flex flex-col items-end gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            <span>© 2026 Bartłomiej Ćwiklak</span>
            <span>All rights reserved, except for the font work.</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

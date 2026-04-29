import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

const About = () => {
  return (
    <section id="about" className="relative px-6 md:px-12 py-32 md:py-64 bg-black overflow-hidden">
      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-500 mb-8 block">
            // About Me
          </span>
          <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] mb-12 tracking-tighter">
            Bridging the gap between <br />
            <span className="italic text-outline"><GlitchText text="aesthetic" /></span> and <br />
            <GlitchText text="functionality" />.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              I am a graphic and layout designer with an interest in coding and digital experiences. I have over 7 years of experience in digital design with mulitple projects completed for clients all over the world.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              I pursue a degree in Computer Science at the International Faculty of Engineering of the Lodz University of Technology and am a proud owner of the CAE Certificate with CEFR level C2.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute -right-[10%] top-[20%] w-[50vw] h-[50vw] bg-zinc-800/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default About;

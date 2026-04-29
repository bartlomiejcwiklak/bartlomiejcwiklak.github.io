import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import beatbuildImg from '../assets/images/beatbuild.png';
import beatclickImg from '../assets/images/beatclick.png';
import idmeImg from '../assets/images/idme.png';
import beatbuildLogo from '../assets/images/beatbuildlogo.png';
import beatclickLogo from '../assets/images/beatclicklogo.png';
import idmeLogo from '../assets/images/idmelogo.png';

const projects = [
  {
    title: "BeatBuild",
    logo: beatbuildLogo,
    category: "A music creation tool",
    year: "2024",
    link: "https://bartlomiejcwiklak.github.io/beatbuild/",
    image: beatbuildImg,
    color: "#1a1a1a"
  },
  {
    title: "IDME",
    logo: idmeLogo,
    category: "A song guessing game",
    year: "2024",
    link: "https://bartlomiejcwiklak.github.io/IDME/",
    image: idmeImg,
    color: "#0f172a"
  },
  {
    title: "BeatClick",
    logo: beatclickLogo,
    category: "Browser based drum sequencer",
    year: "2023",
    link: "https://bartlomiejcwiklak.github.io/beatclick/",
    image: beatclickImg,
    color: "#18181b"
  }
];

const ProjectItem = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-0">
      <motion.div 
        style={{ scale }}
        className="relative w-full md:w-[75%] aspect-square md:aspect-video overflow-hidden group cursor-none"
      >
        <motion.img 
          style={{ y }}
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 h-[120%] w-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 md:mb-10 w-full max-w-[240px] md:max-w-[400px]"
          >
            <img 
              src={project.logo} 
              alt={`${project.title} Logo`}
              className="w-full h-auto object-contain brightness-0 invert" 
            />
          </motion.div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] px-5 py-3 md:px-8 md:py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Project
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right">
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">0{index + 1}</span>
        <span className="font-mono text-[10px] md:text-xs uppercase text-zinc-400 max-w-[150px] md:max-w-none block ml-auto">{project.category}</span>
      </div>
    </div>
  );
};

const ProjectGallery = () => {
  return (
    <section id="work" className="relative bg-black">
      <div className="sticky top-0 h-screen flex items-center px-4 md:px-12 pointer-events-none z-20 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.03, x: 0 }}
          className="text-[35vw] md:text-[28vw] font-serif tracking-tighter"
        >
          wOrkS
        </motion.h2>
      </div>
      
      <div className="relative z-10">
        {projects.map((project, index) => (
          <ProjectItem key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;

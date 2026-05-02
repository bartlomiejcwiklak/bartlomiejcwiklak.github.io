import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[100dvh] w-full bg-transparent text-white px-6 py-20 md:px-12 md:py-32 font-sans overflow-y-auto no-scrollbar"
    >
      {/* Navigation */}
      <div className="fixed bottom-6 left-6 md:bottom-12 md:left-12 z-50 pb-[env(safe-area-inset-bottom)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
        >
          <Link
            to="/"
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white hover:text-zinc-400 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>

      <div className="max-w-3xl md:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em]">Profile</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">About Me</h1>
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">A FEW WORDS ON WHO I AM</p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-12 text-zinc-400 leading-relaxed text-sm md:text-base">
            <section className="flex flex-col gap-4">
              <h2 className="font-mono text-xs text-white uppercase tracking-[0.2em]">Introduction</h2>
              <p>
                Hi! My name is Bartek, I'm 22 and I'm a graphic and layout designer pursuing a bachelor's degree in Computer Science from Poland.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-mono text-xs text-white uppercase tracking-[0.2em]">Education</h2>
              <p>
                I'm a 2nd year student of Computer Science at the International Faculty of Engineering at Lodz University of Technology. The courses I've taken include Algorithms and Data Structures, Programming and Data Structures in C, Object-Oriented Programming in C++, Java Fundamentals, Web Programming, Computer Networks, Databases, and more. Since I'm at the international faculty, I'm pursuing my degree entirely in English.
              </p>
              <p>
                I graduated from Zespół Szkół Elektronicznych im. Bohaterów Westerplatte in Radom in 2024, where I also specialized in Computer Science. During those years I learned the basics of programming in Pascal, C++, Java, and HTML/CSS/JS.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-mono text-xs text-white uppercase tracking-[0.2em]">Experience</h2>
              <p>
                I am primarily a graphic and layout designer. I've been creating visual media ever since I can remember. I have about 5 years of professional experience in graphic design.
                I have worked with clients from all across the world, creating visually compelling designs for various purposes, mostly advertising campaigns and social media posts. In my high school years, I was the editor-in-chief of the school magazine, responsible for its layout, typography, and overall visual design.
              </p>
              <p>
                Outside of graphic design, I do programming. I have experience with many programming stacks and languages- it's safe to say I don't have a preffered one. I've worked with C, C++, C#, Python, Java, Pascal, HTML, CSS, JavaScript, TypeScript, PHP, SQL, and many frameworks such as .NET, React, Node.js. I have experience with creating .NET Windows Forms applications, as well as Android apps with Android Studio. Right now I'm interested in creating web applications, such as the one you're currently viewing.
              </p>
              <p>
                As my personal hobby I do music production. I am proficient in both FL Studio and Ableton Live, and I play around with music in various genres. It's a great creative outlet for me. I've had some success with it, producing and selling music for underground artists.
              </p>
              <p>
                During my years in high school I also taught myself video editing: I know my ways around Vegas Pro, Premiere Pro and some basics of After Effects. I am yet to learn DaVinci Resolve, but I plan to do so in the future.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-mono text-xs text-white uppercase tracking-[0.2em]">Certifications</h2>
              <p>
                In 2024 I got a Certificate of Advanced English from Cambridge University. This is an official C1 certificate, on which I scored 206 out of 210, which grants me the C2 CEFR level. This has been handy for me during my studies and while working with international clients.
              </p>
            </section>

            <section className="flex flex-col gap-4 border-t border-zinc-800 pt-12 mt-12 mb-20">
              <h2 className="font-mono text-xs text-white uppercase tracking-[0.2em]">Get in Touch</h2>
              <p>
                I'm always open to new projects and collaborations! If you'd like to discuss a potential partnership or just say hi, feel free to reach out.
              </p>
              <a
                href="mailto:contact@bartlomiejcwiklak.com"
                className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
              >
                contact@bartlomiejcwiklak.com
              </a>
            </section>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

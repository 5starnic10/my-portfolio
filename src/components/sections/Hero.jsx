import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaDownload, FaBrain, FaBolt, FaHandshake } from 'react-icons/fa';
import StatBar from '../ui/StatBar';

const Hero = () => {
  return (
    <section id="home" className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.25 }}
        className="container-padding max-w-6xl mx-auto"
      >
        <div className="page-panel p-10 md:p-16 flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 relative"
          >
            <div className="profile-card animate-bob">
              <div className="relative rounded-[1rem] border-4 border-game-ink/30 bg-game-panel/90 p-3">
                <img
                  src="/Headshot.jpg"
                  alt="Nicole Tan Avatar"
                  className="w-44 h-44 md:w-56 md:h-56 rounded-[0.85rem] object-cover"
                />
              </div>
              <div className="mt-5 space-y-3">
                <StatBar label="Quick Learner" value={94} tone="pink" icon={FaBrain} />
                <StatBar label="Work Ethic" value={96} tone="purple" icon={FaBolt} />
                <StatBar label="Team Player" value={95} tone="blue" icon={FaHandshake} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            <motion.h1
              className="mb-2 font-display font-extrabold tracking-tight text-5xl md:text-6xl text-game-ink"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Hi, I'm Nicole Tan.
            </motion.h1>
            <motion.h2
              className="mb-3 text-2xl md:text-3xl font-semibold text-game-purple"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Aspiring Software Developer and UI/UX Designer
            </motion.h2>
            <motion.p
              className="text-lg text-game-ink/75 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              I'm also interested in product management and how thoughtful products connect user needs, business goals, and technical execution.
            </motion.p>
            <motion.p
              className="text-lg text-game-ink/80 mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Welcome to my portfolio! I build playful, polished digital experiences where code and design meet, with thoughtful details and a soft, colorful touch.
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <a href="mailto:nicole22tan22@gmail.com" className="icon-link text-2xl" aria-label="Email">
                <FaEnvelope />
              </a>
              <a
                href="https://linkedin.com/in/nicoletan22/"
                className="icon-link text-2xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="/Nicole_Tan_Resume.pdf"
                download="Nicole_Tan_Resume.pdf"
                className="icon-link text-2xl flex items-center gap-2"
                aria-label="Download Resume"
                title="Download Resume"
              >
                <FaDownload />
                <span className="text-sm font-medium">Download Resume</span>
              </a>
            </motion.div>
            <motion.a
              href="#projects"
              className="game-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

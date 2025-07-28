import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container-padding w-full flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
        {/* Avatar with Glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0 relative"
        >
          <div className="rounded-full shadow-2xl border-4 border-accent-purple/60 bg-white p-2 relative">
            <img
              src="/Headshot.jpg"
              alt="Nicole Tan Avatar"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
            />
            <div className="absolute inset-0 rounded-full ring-8 ring-accent-pink/30 animate-pulse pointer-events-none" />
          </div>
        </motion.div>
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center md:text-left space-y-6"
        >
          <motion.h1
            className="heading mb-2 font-extrabold tracking-tight text-5xl md:text-6xl text-[#3a2e5c] drop-shadow-[0_4px_24px_rgba(35,56,118,0.18)] dark:text-[#f7c6ce]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Hi, I'm Nicole Tan.
          </motion.h1>
          <motion.h2
            className="subheading mb-4 text-2xl md:text-3xl font-semibold text-[#4a6fa5] dark:text-[#b8d6fa]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Aspiring Software Engineer & CS Student @ NC State
          </motion.h2>
          <motion.p
            className="text-lg text-text dark:text-[#f7f7fa] mb-8 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Hi there! I'm Nicole Tan, a computer science student with a creative edge. I love building digital experiences—coding apps, designing interfaces, and blending tech with creativity. This is where I share my journey and projects. Thanks for visiting! ✨
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <a
              href="mailto:nicole22tan22@gmail.com"
              className="icon-link text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/nicole-tan-4a07b5226/"
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
              className="icon-link text-2xl"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FaDownload />
            </a>
          </motion.div>
          <motion.a
            href="#projects"
            className="inline-block px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[#a7c7e7] to-[#4a6fa5] text-[#3a2e5c] shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 
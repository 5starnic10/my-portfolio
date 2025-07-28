import { motion } from 'framer-motion';
import { useRef } from 'react';

const pastelBlob = (
  <svg
    className="absolute -top-16 -left-16 w-72 h-72 z-0 opacity-60"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="aboutBlobGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f7c6ce" />
        <stop offset="100%" stopColor="#d1c4e9" />
      </linearGradient>
    </defs>
    <path
      fill="url(#aboutBlobGradient)"
      d="M44.8,-67.2C57.2,-59.2,65.7,-44.2,70.2,-28.7C74.7,-13.2,75.2,2.8,70.2,16.7C65.2,30.6,54.7,42.4,41.7,51.2C28.7,60,14.3,65.8,-1.2,67.3C-16.7,68.8,-33.3,66,-45.2,56.7C-57.2,47.3,-64.5,31.5,-68.2,15.1C-71.9,-1.3,-71.9,-18.3,-64.7,-32.2C-57.5,-46.1,-43.1,-56.9,-27.2,-63.7C-11.3,-70.5,6.1,-73.3,22.2,-70.1C38.3,-66.9,44.8,-67.2,44.8,-67.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

const skills = [
  'Java', 'Python', 'C', 'JavaScript', 'SQL', 'R', 'HTML/CSS', 'Bash', 'Kotlin',
  'React', 'Firebase', 'JUnit', 'Jenkins', 'Docker', 'GitHub', 'Figma', 'Android Studio', 'VS Code', 'Eclipse', 'IntelliJ', 'Linux', 'Windows'
];

// Map of skill to first project anchor id
const skillToProject = {
  'React Native': 'project-FAFSA Friends',
  'Streamlit': 'project-FAFSA Friends',
  'Firebase': 'project-FAFSA Friends',
  'Google Cloud Vision': 'project-FAFSA Friends',
  'Swift': 'project-EcoQuest',
  'MapKit': 'project-EcoQuest',
  'CoreLocation': 'project-EcoQuest',
  'Figma': 'project-EcoQuest',
  'Java': 'project-Project Secure',
  'GitHub': 'project-FAFSA Friends',
};

const About = () => {
  // For scroll-to-project
  const handleSkillClick = (skill) => {
    const anchor = skillToProject[skill];
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-[#f7c6ce]', 'transition');
        setTimeout(() => el.classList.remove('ring-4', 'ring-[#f7c6ce]', 'transition'), 1200);
      }
    }
  };

  return (
    <section id="about" className="section-padding relative">
      {pastelBlob}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="backdrop-blur-md bg-white/70 dark:bg-dark/70 rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Bio */}
          <div className="flex-1 text-left space-y-4">
            <h2 className="heading mb-4 text-[#3a2e5c] dark:text-accent-pink">About Me</h2>
            <p className="text-lg text-text dark:text-[#f7f7fa]">
              Hi! I’m Nicole, a computer science student at NC State with a passion for building creative, meaningful digital experiences. I love blending code and design—whether I’m coding interactive apps, designing intuitive interfaces, or exploring new ways to combine tech and creativity.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-[#f7c6ce]/30 dark:bg-[#3a2e5c]/40 text-[#3a2e5c] dark:text-[#f7c6ce] font-semibold shadow-sm">
              <span className="block mb-1">Did you know?</span>
              <span>I’m also a yearbook designer, hackathon enthusiast, and love teaching CS to others!</span>
            </div>
          </div>
          {/* Skills */}
          <div className="flex-1">
            <h3 className="subheading mb-4 text-[#4a6fa5] dark:text-[#b8d6fa]">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => {
                const isLinked = !!skillToProject[skill];
                return (
                  <motion.span
                    key={skill}
                    className={`badge bg-[#e0e7ff] dark:bg-[#3a2e5c] text-[#3a2e5c] dark:text-[#f7c6ce] shadow-sm cursor-pointer transition-all duration-200 ${isLinked ? 'hover:ring-2 hover:ring-[#f7c6ce] hover:scale-105' : ''}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    viewport={{ once: true }}
                    onClick={() => handleSkillClick(skill)}
                    title={isLinked ? 'See project using this skill' : ''}
                  >
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 
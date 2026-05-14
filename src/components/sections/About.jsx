import { motion } from 'framer-motion';

const skills = [
  'Java', 'Python', 'C', 'JavaScript', 'SQL', 'R', 'HTML/CSS', 'Bash', 'Kotlin',
  'React', 'Firebase', 'JUnit', 'Jenkins', 'Docker', 'GitHub', 'Figma', 'Android Studio', 'VS Code', 'Eclipse', 'IntelliJ', 'Linux', 'Windows',
];

const skillToProject = {
  'React Native': 'project-FAFSA Friends',
  Streamlit: 'project-FAFSA Friends',
  Firebase: 'project-FAFSA Friends',
  'Google Cloud Vision': 'project-FAFSA Friends',
  Swift: 'project-EcoQuest',
  MapKit: 'project-EcoQuest',
  CoreLocation: 'project-EcoQuest',
  Figma: 'project-EcoQuest',
  Java: 'project-Project Secure',
  GitHub: 'project-FAFSA Friends',
};

const skillStyles = {
  Java: 'skill-pink',
  Python: 'skill-blue',
  C: 'skill-purple',
  JavaScript: 'skill-mix',
  SQL: 'skill-blue',
  R: 'skill-purple',
  'HTML/CSS': 'skill-pink',
  Bash: 'skill-mix',
  Kotlin: 'skill-pink',
  React: 'skill-blue',
  Firebase: 'skill-pink',
  JUnit: 'skill-purple',
  Jenkins: 'skill-mix',
  Docker: 'skill-blue',
  GitHub: 'skill-mix',
  Figma: 'skill-pink',
  'Android Studio': 'skill-purple',
  'VS Code': 'skill-blue',
  Eclipse: 'skill-mix',
  IntelliJ: 'skill-pink',
  Linux: 'skill-purple',
  Windows: 'skill-blue',
};

const About = () => {
  const handleSkillClick = (skill) => {
    const anchor = skillToProject[skill];
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-game-pink', 'transition');
        setTimeout(() => el.classList.remove('ring-4', 'ring-game-pink', 'transition'), 1200);
      }
    }
  };

  return (
    <section id="about" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-5xl mx-auto relative z-10 container-padding w-full"
      >
        <div className="page-panel p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center md:items-start relative">
          <div className="flex-1 text-left space-y-4">
            <h2 className="heading mb-4">About Me</h2>
            <p className="text-lg text-game-ink/80">
              I'm Nicole, a computer science student at NC State University who loves building engaging digital experiences. I like blending code and design, whether I'm crafting interactive apps, shaping intuitive interfaces, or finding new ways to merge tech and creativity.
            </p>
            <p className="text-lg text-game-ink/80">
              When I'm not coding, you'll find me designing, competing in hackathons, or sharing my love for computer science with others.
            </p>
            <div className="mt-4 rounded-[1.25rem] border-4 border-game-ink/15 bg-game-lilac/20 p-4 text-game-ink shadow-game-soft">
              <span className="pixel-label block mb-2">Fun Facts</span>
              <span>I also love painting, solving puzzles, playing word games, and thrifting.</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="subheading mb-2">Technical Skills</h3>
            <p className="pixel-label mb-4">Tap a highlighted skill to jump to a related project.</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => {
                const isLinked = !!skillToProject[skill];
                const styleClass = skillStyles[skill] ?? 'skill-mix';

                return (
                  <motion.span
                    key={skill}
                    className={`skill-badge ${styleClass} cursor-pointer transition-all duration-200 ${isLinked ? 'hover:-translate-y-0.5 hover:ring-2 hover:ring-game-lilac' : 'opacity-95'}`}
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

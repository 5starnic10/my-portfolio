import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const pastelBlob = (
  <svg
    className="absolute top-0 right-0 w-full max-w-lg h-auto z-0 opacity-50 pointer-events-none overflow-hidden"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{ maxWidth: '100vw' }}
  >
    <defs>
      <linearGradient id="projectsBlobGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a7c7e7" />
        <stop offset="100%" stopColor="#f7c6ce" />
      </linearGradient>
    </defs>
    <path
      fill="url(#projectsBlobGradient)"
      d="M44.8,-67.2C57.2,-59.2,65.7,-44.2,70.2,-28.7C74.7,-13.2,75.2,2.8,70.2,16.7C65.2,30.6,54.7,42.4,41.7,51.2C28.7,60,14.3,65.8,-1.2,67.3C-16.7,68.8,-33.3,66,-45.2,56.7C-57.2,47.3,-64.5,31.5,-68.2,15.1C-71.9,-1.3,-71.9,-18.3,-64.7,-32.2C-57.5,-46.1,-43.1,-56.9,-27.2,-63.7C-11.3,-70.5,6.1,-73.3,22.2,-70.1C38.3,-66.9,44.8,-67.2,44.8,-67.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'FAFSA Friends',
      description: 'A mobile app that simplifies the FAFSA process for first-gen and low-income students using React Native and Streamlit. Integrated Google Cloud Vision and Firebase for secure authentication and data handling. Built at PearlHacks 2025.',
      technologies: ['React Native', 'Streamlit', 'Firebase', 'Google Cloud Vision'],
      github: 'https://github.com/sandra2j/pearlhacks2025',
      live: '',
      image: '/fafsafriends.png',
      featured: true,
    },
    {
      title: 'EcoQuest',
      description: 'An iOS app to help users plan efficient, sustainable routes by combining walking, biking, and bus travel. Built with Swift, MapKit, and CoreLocation at Hack NC State 2025.',
      technologies: ['Swift', 'MapKit', 'CoreLocation', 'Figma'],
      github: 'https://github.com/5starnic10/ecoquest',
      live: '',
      image: '/Ecoquest.png',
    },
    {
      title: 'Project Secure',
      description: 'A discreet, customizable safety app that looks like a food ordering service but lets users quietly get help. Java command-line simulation for core features. Built at HackNC 2024.',
      technologies: ['Java', 'Figma'],
      github: 'https://github.com/spanja05/HackNC24',
      live: '',
      image: '/projectsecure.png',
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      {pastelBlob}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="heading mb-12 text-[#3a2e5c] dark:text-accent-pink">Some Things I've Built</h2>
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              id={`project-${project.title}`}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-md bg-white/70 dark:bg-dark/70 rounded-3xl shadow-xl p-8 md:p-12 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#e0e7ff] dark:border-[#3a2e5c]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              {/* Project Info */}
              <div className="flex-1 text-left space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-[#3a2e5c] dark:text-accent-pink">{project.title}</h3>
                  {project.featured && (
                    <span className="ml-2 px-3 py-1 rounded-full bg-[#f7c6ce] text-[#3a2e5c] text-xs font-semibold shadow-sm">Featured</span>
                  )}
                </div>
                <p className="text-text dark:text-[#f7f7fa]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="badge bg-[#e0e7ff] dark:bg-[#3a2e5c] text-[#3a2e5c] dark:text-[#f7c6ce] shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link text-xl hover:scale-110 transition-transform duration-200"
                    title="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link text-xl hover:scale-110 transition-transform duration-200"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 
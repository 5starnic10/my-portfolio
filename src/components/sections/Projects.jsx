import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'FAFSA Friends',
      description: 'A mobile app that simplifies the FAFSA process for first-gen and low-income students using React Native and Streamlit. Integrated Google Cloud Vision and Firebase for secure authentication and data handling. Built at PearlHacks 2025.',
      technologies: ['React Native', 'Streamlit', 'Firebase', 'Google Cloud Vision'],
      github: 'https://github.com/sandra2j/pearlhacks2025',
      live: '',
      figma: 'https://www.figma.com/proto/X0l8IHIX9e5cZAQiezgNIT/pearlhacks2025?node-id=44-101&p=f&t=vZKlBFdIpU370oDc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=44%3A101',
      image: '/fafsafriends.png',
      featured: false,
    },
    {
      title: 'EcoQuest',
      description: 'An iOS app to help users plan efficient, sustainable routes by combining walking, biking, and bus travel. Built with Swift, MapKit, and CoreLocation at Hack NC State 2025.',
      technologies: ['Swift', 'MapKit', 'CoreLocation', 'Figma'],
      github: 'https://github.com/sohini1728/EcoQuest',
      live: '',
      figma: 'https://www.figma.com/proto/mGEfkPLVQURDbH6kKgtBgu/EcoQuest?node-id=3-4&p=f&t=ljCrA7TZnyOHkrGi-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A4&show-proto-sidebar=1',
      image: '/Ecoquest.png',
    },
    {
      title: 'Project Secure',
      description: 'A discreet, customizable safety app that looks like a food ordering service but lets users quietly get help. Java command-line simulation for core features. Built at HackNC 2024.',
      technologies: ['Java', 'Figma'],
      github: 'https://github.com/spanja05/HackNC24',
      live: '',
      figma: 'https://www.figma.com/proto/ydH8MV2CRbsh9ANxqeuujk/Project-Secure?node-id=22-55&p=f&t=CrHr8v0ZyGzeX9D9-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A32&show-proto-sidebar=1',
      image: '/projectsecure.png',
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-6xl mx-auto relative z-10 container-padding w-full"
      >
        <div className="page-panel p-10 md:p-16 relative">
          <h2 className="heading mb-3">Some Projects I’ve Built</h2>
          <p className="pixel-label mb-8">Finished builds and prototypes from hackathons and personal work.</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                id={`project-${project.title}`}
                className="game-card relative flex h-full flex-col gap-6 p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-4 card-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="w-full shrink-0">
                  <div className="group relative overflow-hidden rounded-[1rem] border-4 border-game-ink/15 bg-game-panel/90 shadow-game-soft">
                    <img
                      src={project.image}
                      alt={`${project.title} prototype preview`}
                      className="aspect-[16/10] w-full bg-game-panel/90 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    {project.figma && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-gray-100"
                          title="View Figma Prototype"
                        >
                          <FaFigma className="text-lg" />
                          View Prototype
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col text-left space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-game-ink">{project.title}</h3>
                    {project.featured && (
                      <span className="ml-2 px-3 py-1 rounded-full border-2 border-game-pink/30 bg-game-lilac/30 text-game-purple text-xs font-semibold shadow-game-soft">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-game-ink/75">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge skill-mix">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-2xl border-4 border-game-ink/15 bg-game-panel/85 text-game-ink hover:border-game-purple hover:text-game-purple transition-colors duration-200 text-sm font-medium shadow-game-soft"
                        title="View on GitHub"
                      >
                        <FaGithub className="text-lg" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-2xl border-4 border-game-ink/15 bg-game-panel/85 text-game-ink hover:border-game-pink hover:text-game-pink transition-colors duration-200 text-sm font-medium shadow-game-soft"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-2xl border-4 border-game-ink/15 bg-game-panel/85 text-game-ink hover:border-game-purple hover:text-game-purple transition-colors duration-200 text-sm font-medium shadow-game-soft"
                        title="View Figma Prototype"
                      >
                        <FaFigma className="text-lg" />
                        <span>Figma</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

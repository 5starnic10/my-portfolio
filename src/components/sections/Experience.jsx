import { motion } from 'framer-motion';

const pastelBlob = (
  <svg
    className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] z-0 opacity-40"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="expBlobGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a7c7e7" />
        <stop offset="100%" stopColor="#f7c6ce" />
      </linearGradient>
    </defs>
    <path
      fill="url(#expBlobGradient)"
      d="M44.8,-67.2C57.2,-59.2,65.7,-44.2,70.2,-28.7C74.7,-13.2,75.2,2.8,70.2,16.7C65.2,30.6,54.7,42.4,41.7,51.2C28.7,60,14.3,65.8,-1.2,67.3C-16.7,68.8,-33.3,66,-45.2,56.7C-57.2,47.3,-64.5,31.5,-68.2,15.1C-71.9,-1.3,-71.9,-18.3,-64.7,-32.2C-57.5,-46.1,-43.1,-56.9,-27.2,-63.7C-11.3,-70.5,6.1,-73.3,22.2,-70.1C38.3,-66.9,44.8,-67.2,44.8,-67.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

const professional = [
  {
    title: 'CS Instructor',
    org: 'The Engineering Place',
    date: 'June 2025 - Present',
    bullets: [
      'Taught hands-on lessons in Python, AI, and cybersecurity to over 200 middle and high school students across multiple camps.',
      'Designed and led 50+ interactive activities covering network security, machine learning, and algorithmic problem-solving.',
      'Created a collaborative and inclusive learning environment, with 90% of students reporting increased confidence in computer science topics in post-camp surveys.'
    ],
    photos: '/photos/cs-instructor',
  },
  {
    title: 'Undergraduate Research Assistant',
    org: 'NC State University',
    date: 'May 2025 - Present',
    bullets: [
      'Developed and tested 20+ Bash mutator scripts using sed, grep, and awk to automate C code transformations for compiler fuzzing.',
      'Applied regular expressions to restructure code patterns, improving test coverage and uncovering edge-case compiler bugs.',
      'Gained experience in low-level code analysis, compiler internals, and automated testing workflows to identify edge-case failures.'
    ],
    photos: '/photos/research',
  },
  {
    title: 'Designer',
    org: 'Agromeck',
    date: 'Sept 2023 - Present',
    bullets: [
      'Helped produce the NC State yearbook that generated over $2,000 in sales through campus and online distribution.',
      'Designed visually polished yearbook spreads using Illustrator and Photoshop for a 1,000+ page award-winning publication.',
      'Contributed to a spread that earned an Honorable Mention in a national collegiate media competition.'
    ],
    photos: '/photos/designer',
  },
  {
    title: 'Pre-Apprentice',
    org: 'Bosch Rexroth',
    date: 'Jun 2022 - Jul 2022',
    bullets: [
      'Collaborated with 3 co-interns to design and prototype a foldable, portable table to improve an engineer’s daily workflow.',
      'Designed an onboarding presentation highlighting key experiences and lessons learned, now used to guide future Bosch interns.',
      'Created a custom tool organizer adopted by 100+ assembly line employees, boosting workspace efficiency.'
    ],
    photos: '/photos/bosch',
  },
  {
    title: 'Front Office Assistant',
    org: 'University Honors Program',
    date: 'Jan 2024 - Present',
    bullets: [
      'Supported 8 Assistant Directors in maintaining a welcoming and organized office environment for 2,000+ Honors students.',
      'Advised 10–15 students weekly, providing support with academic concerns, conflict resolution, and program policies.',
      'Greeted and guided 100+ visitors and prospective students each semester, ensuring an informative and positive UHP experience.'
    ],
    photos: '/photos/office',
  },
  {
    title: 'Honors Student Ambassador',
    org: 'University Honors Program',
    date: 'Aug 2024 - Present',
    bullets: [
      'Represent the University Honors Program at 20+ university-wide and UHP events annually, serving as a role model for over 200 first- and second-year students.',
      'Coordinate and lead 6–8 educational and community-building events per semester to enhance student engagement and academic growth.',
      'Facilitate discussions and peer mentorship sessions for groups of 15–30 Honors students, promoting inclusivity and open exchange of diverse perspectives.'
    ],
    photos: '/photos/ambassador',
  },
  {
    title: 'CSC Ambassador',
    org: 'CSC Department at NCSU',
    date: 'Aug 2025 - Present',
    bullets: [
      'Coming soon: Excited to start this new role in the future!'
    ],
    photos: '/photos/csc-ambassador',
  },
];

const leadership = [
  {
    title: 'Vice President',
    org: 'Women in Computer Science (WiCS)',
    date: 'Sept 2023 - Present',
    bullets: [
      'Secured partnerships with 20 corporate sponsors to enhance WiCS event offerings and student career connections.',
      'Hosted reception with 20+ industry reps and 50+ students to boost engagement and networking.',
      'Organized career fairs and networking events that connected 100+ members with industry professionals and job opportunities.'
    ],
    photos: '/photos/wics',
  }
];

const Experience = () => (
  <section id="experience" className="section-padding relative">
    {pastelBlob}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto relative z-10"
    >
      <h2 className="heading mb-8 text-[#3a2e5c] dark:text-accent-pink">Experience</h2>
      <div className="mb-10">
        <h3 className="subheading mb-6 text-[#4a6fa5] dark:text-[#b8d6fa]">Professional Experience</h3>
        <div className="flex flex-col gap-12 relative">
          {professional.map((exp, i) => (
            <motion.div
              key={exp.title + exp.org}
              className="group relative backdrop-blur-md bg-[#f5f7fa] dark:bg-dark/70 rounded-2xl shadow-lg p-6 md:p-8 border-l-8 border-[#a7c7e7] dark:border-[#3a2e5c] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                <div className="flex-1">
                  <span className="font-bold text-lg text-[#3a2e5c] dark:text-accent-pink">{exp.title}</span>
                  <span className="block text-[#4a6fa5] dark:text-[#b8d6fa] font-semibold">{exp.org}</span>
                  {exp.date && <span className="block text-sm text-[#bfa2f7] dark:text-[#f7c6ce]">{exp.date}</span>}
                </div>
              </div>
              <ul className="list-disc pl-5 text-text dark:text-[#f7f7fa] space-y-1 mt-2">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="subheading mb-6 text-[#4a6fa5] dark:text-[#b8d6fa]">Leadership Experience</h3>
        <div className="flex flex-col gap-12 relative">
          {leadership.map((exp, i) => (
            <motion.div
              key={exp.title + exp.org}
              className="group relative backdrop-blur-md bg-[#f5f7fa] dark:bg-dark/70 rounded-2xl shadow-lg p-6 md:p-8 border-l-8 border-[#f7c6ce] dark:border-[#bfa2f7] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                <div className="flex-1">
                  <span className="font-bold text-lg text-[#3a2e5c] dark:text-accent-pink">{exp.title}</span>
                  <span className="block text-[#4a6fa5] dark:text-[#b8d6fa] font-semibold">{exp.org}</span>
                  {exp.date && <span className="block text-sm text-[#bfa2f7] dark:text-[#f7c6ce]">{exp.date}</span>}
                </div>
              </div>
              <ul className="list-disc pl-5 text-text dark:text-[#f7f7fa] space-y-1 mt-2">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default Experience; 
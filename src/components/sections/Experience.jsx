import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const accentPresets = {
  blue: {
    rail: 'bg-gradient-to-b from-white/25 via-white/10 to-transparent',
    dot: 'bg-game-blue',
    chip: 'bg-game-panel/85 text-game-ink border-game-ink/15',
    skill: 'bg-game-panel/85 text-game-ink border-game-ink/15',
    border: 'border-game-ink/15',
  },
  purple: {
    rail: 'bg-gradient-to-b from-white/25 via-white/10 to-transparent',
    dot: 'bg-game-pink',
    chip: 'bg-game-panel/85 text-game-ink border-game-ink/15',
    skill: 'bg-game-panel/85 text-game-ink border-game-ink/15',
    border: 'border-game-ink/15',
  },
};

const wicsLeadership = {
  org: 'Women in Computer Science (WiCS)',
  location: 'Raleigh, NC',
  date: 'Jan 2025 - Present',
  tag: 'Leadership',
  summary:
    'Three years of growing impact at WiCS across executive leadership, partnerships, and media strategy.',
  currentRole: {
    title: 'President',
    bullets: [
      'Lead a board of 11 committee leads, advising on event planning and how to lead their committees effectively.',
      'Guide leads on strategies to grow engagement at WiCS events and strengthen participation across the organization.',
      'Reach out to other campus organizations to build partnerships and co-host events that expand WiCS programming.',
    ],
  },
  roles: [
    {
      title: 'Media Lead',
      date: 'Sept 2023 - Dec 2023',
      bullets: [
        'Led WiCS media and branding across social channels, newsletters, and promotional materials for flagship events.',
        'Designed visuals and campaigns that strengthened WiCS visibility and helped drive stronger event turnout.',
        'Collaborated with committees to keep messaging consistent and highlight member stories across platforms.',
      ],
    },
    {
      title: 'Vice President',
      date: 'Jan 2024 - Dec 2024',
      bullets: [
        'Secured partnerships with 20 corporate sponsors to enhance WiCS event offerings and student career connections.',
        'Hosted reception with 20+ industry reps and 50+ students to boost engagement and networking.',
        'Organized career fairs and networking events that connected 100+ members with industry professionals and job opportunities.',
      ],
    },
  ],
  skills: ['Leadership', 'Event Planning', 'Mentorship', 'Media', 'Community Engagement', 'Partnerships'],
};

const WicsLeadershipItem = ({ index }) => {
  const [open, setOpen] = useState(false);
  const theme = accentPresets.purple;
  const meta = [wicsLeadership.date, wicsLeadership.location].filter(Boolean).join(' • ');

  const totalRoles = 1 + wicsLeadership.roles.length;

  return (
    <div className="relative pl-10 md:pl-12">
      <div className={`absolute left-4 md:left-5 top-0 bottom-0 w-px ${theme.rail}`} aria-hidden="true" />
      <div className={`absolute left-[13px] md:left-[17px] top-7 w-4 h-4 rounded-full border-2 border-white/20 shadow-sticker ${theme.dot}`} aria-hidden="true" />

      <motion.div
        className={`group relative game-card experience-card p-6 md:p-8 transition-all duration-300 border ${theme.border}`}
        initial={{ opacity: 0, y: 26, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-lg text-game-ink">{wicsLeadership.currentRole.title}</span>
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${theme.chip}`}>
              {wicsLeadership.tag}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border border-game-purple/25 bg-game-lilac/25 text-game-purple">
              {totalRoles} WiCS roles
            </span>
          </div>
          <span className="block text-game-ink/75 font-semibold">{wicsLeadership.org}</span>
          {meta && <span className="block text-sm text-game-ink/55">{meta}</span>}
          <p className="text-sm text-game-ink/70">{wicsLeadership.summary}</p>
        </div>

        <ul className="mt-3 space-y-1.5 text-game-ink/75">
          {wicsLeadership.currentRole.bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="flex gap-2">
              <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${theme.dot}`} aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-between rounded-2xl border-2 border-game-purple/25 bg-game-lilac/15 px-4 py-3 text-left text-sm font-semibold text-game-purple transition-colors hover:border-game-purple/40 hover:bg-game-lilac/25"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <span>{open ? 'Hide earlier WiCS roles' : 'View Vice President and Media Lead roles'}</span>
          <FaChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 border-t border-game-ink/10 pt-4">
                {wicsLeadership.roles.map((role) => (
                  <div key={role.title} className="rounded-2xl border border-game-ink/10 bg-game-panel/70 p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-game-ink">{role.title}</span>
                      <span className="text-xs font-medium text-game-ink/55">{role.date}</span>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm text-game-ink/75">
                      {role.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex gap-2">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${theme.dot}`} aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex flex-wrap gap-2">
          {wicsLeadership.skills.map((skill, skillIndex) => (
            <span key={skillIndex} className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${theme.skill}`}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TimelineItem = ({ exp, index, accent = 'blue' }) => {
  const theme = accentPresets[accent] ?? accentPresets.blue;
  const meta = [exp.date, exp.location].filter(Boolean).join(' • ');

  return (
    <div className="relative pl-10 md:pl-12">
      <div className={`absolute left-4 md:left-5 top-0 bottom-0 w-px ${theme.rail}`} aria-hidden="true" />
      <div className={`absolute left-[13px] md:left-[17px] top-7 w-4 h-4 rounded-full border-2 border-white/20 shadow-sticker ${theme.dot}`} aria-hidden="true" />

      <motion.div
        className={`group relative game-card experience-card p-6 md:p-8 transition-all duration-300 border ${theme.border}`}
        initial={{ opacity: 0, y: 26, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-lg text-game-ink">
                {exp.title}
              </span>
              {exp.tag && (
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${theme.chip}`}>
                  {exp.tag}
                </span>
              )}
            </div>
            <span className="block text-game-ink/75 font-semibold">
              {exp.org}
            </span>
            {meta && (
              <span className="block text-sm text-game-ink/55">
                {meta}
              </span>
            )}
          </div>
        </div>

        <ul className="mt-3 space-y-1.5 text-game-ink/75">
          {exp.bullets.map((b, j) => (
            <li key={j} className="flex gap-2">
              <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${theme.dot}`} aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {exp.skills?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${theme.skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}
      </motion.div>
    </div>
  );
};



const professional = [
  {
    title: 'Incoming SWE Intern',
    org: 'Wells Fargo',
    location: 'Charlotte, NC',
    date: 'Summer 2026',
    tag: 'Next up',
    bullets: [
      'Selected for the Summer 2026 SWE program to support digital transformation and banking infrastructure.',
      'Will utilize Java, Spring Boot, or Python to develop scalable solutions within an Agile SDLC environment.'
    ],
    skills: ['Java', 'Spring Boot', 'Python', 'Agile', 'Scalable Systems'],
  },
  {
    title: 'Teaching Assistant (CSC 116 — Intro to Java)',
    org: 'NC State University',
    location: 'Raleigh, NC',
    date: 'Jan 2026 - Present',
    tag: 'Mentorship',
    bullets: [
      'Grade labs and projects that students complete.',
      'Assist students in understanding concepts of object-oriented programming and Java.'
    ],
    skills: ['Java', 'OOP', 'Mentoring', 'Teaching', 'Grading'],
  },
  {
    title: 'Computer Science Instructor',
    org: 'The Engineering Place',
    date: 'June 2025 - Aug 2025',
    location: 'Raleigh, NC',
    tag: 'Teaching',
    bullets: [
      'Taught hands-on lessons in Python, AI, and cybersecurity to over 200 middle and high school students across multiple camps.',
      'Designed and led 50+ interactive activities covering network security, machine learning, and algorithmic problem-solving.',
      'Created a collaborative and inclusive learning environment, with 90% of students reporting increased confidence in computer science topics in post-camp surveys.'
    ],
    photos: '/photos/cs-instructor',
    skills: ['Python', 'AI', 'Cybersecurity', 'Machine Learning', 'Teaching'],
  },
  {
    title: 'Undergraduate Research Assistant',
    org: 'NC State University',
    date: 'May 2025 - Present',
    location: 'Raleigh, NC',
    tag: 'Research',
    bullets: [
      'Developed and tested 20+ Bash mutator scripts using sed, grep, and awk to automate C code transformations for compiler fuzzing.',
      'Applied regular expressions to restructure code patterns, improving test coverage and uncovering edge-case compiler bugs.',
      'Gained experience in low-level code analysis, compiler internals, and automated testing workflows to identify edge-case failures.'
    ],
    photos: '/photos/research',
    skills: ['Bash', 'C', 'sed', 'grep', 'awk', 'Regular Expressions', 'Compiler Analysis'],
  },
  {
    title: 'Graphic Designer',
    org: 'Agromeck',
    date: 'Sept 2023 - Present',
    location: 'Raleigh, NC',
    tag: 'Creative',
    bullets: [
      'Helped produce the NC State yearbook that generated over $2,000 in sales through campus and online distribution.',
      'Designed visually polished yearbook spreads using Illustrator and Photoshop for a 1,000+ page award-winning publication.',
      'Contributed to a spread that earned an Honorable Mention in a national collegiate media competition.'
    ],
    photos: '/photos/designer',
    skills: ['Illustrator', 'Photoshop', 'Design', 'Layout', 'Typography'],
  },
  {
    title: 'Pre-Apprentice',
    org: 'Bosch Rexroth',
    date: 'Jun 2022 - Jul 2022',
    location: 'Charlotte, NC',
    tag: 'Build',
    bullets: [
      'Collaborated with 3 co-interns to design and prototype a foldable, portable table to improve an engineer’s daily workflow.',
      'Designed an onboarding presentation highlighting key experiences and lessons learned, now used to guide future Bosch interns.',
      'Created a custom tool organizer adopted by 100+ assembly line employees, boosting workspace efficiency.'
    ],
    photos: '/photos/bosch',
    skills: ['Prototyping', 'Design', 'Collaboration', 'Presentation', 'Problem Solving'],
  },
  {
    title: 'Front Office Assistant',
    org: 'University Honors Program',
    date: 'Jan 2024 - Present',
    location: 'Raleigh, NC',
    tag: 'Community',
    bullets: [
      'Supported 8 Assistant Directors in maintaining a welcoming and organized office environment for 2,000+ Honors students.',
      'Advised 10–15 students weekly, providing support with academic concerns, conflict resolution, and program policies.',
      'Greeted and guided 100+ visitors and prospective students each semester, ensuring an informative and positive UHP experience.'
    ],
    photos: '/photos/office',
    skills: ['Administration', 'Student Advising', 'Communication', 'Organization'],
  },
];

const leadership = [
  {
    title: 'Computer Science Ambassador',
    org: 'CSC Department at NCSU',
    date: 'Aug 2025 - Present',
    location: 'Raleigh, NC',
    tag: 'Outreach',
    bullets: [
      'Connect with ePartners and industry professionals to build relationships between the department and external organizations.',
      'Engage with prospective students to share insights about the Computer Science program and provide authentic perspectives on student life.',
      'Volunteer at department events including Career Connections and ePartner events to support student professional development and networking opportunities.'
    ],
    photos: '/photos/csc-ambassador',
    skills: ['Computer Science', 'Outreach', 'Leadership'],
  },
  {
    title: 'Honors Student Ambassador',
    org: 'University Honors Program',
    date: 'Aug 2024 - Present',
    location: 'Raleigh, NC',
    tag: 'Community',
    bullets: [
      'Represent the University Honors Program at 20+ university-wide and UHP events annually, serving as a role model for over 200 first- and second-year students.',
      'Coordinate and lead 6–8 educational and community-building events per semester to enhance student engagement and academic growth.',
      'Facilitate discussions and peer mentorship sessions for groups of 15–30 Honors students, promoting inclusivity and open exchange of diverse perspectives.'
    ],
    photos: '/photos/ambassador',
    skills: ['Leadership', 'Event Planning', 'Mentorship', 'Public Speaking', 'Community Building'],
  }
];

const Experience = () => (
  <section id="experience" className="section-padding relative">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
      className="max-w-5xl mx-auto relative z-10 container-padding w-full"
    >
      <div className="page-panel p-10 md:p-16 relative">
        <h2 className="heading mb-3">Experience</h2>
        <p className="max-w-3xl text-game-ink/75 mb-10">
          A few chapters I’m proud of — building, teaching, designing, researching, and now heading into fintech.
        </p>
        <div className="mb-10">
          <h3 className="subheading mb-6">Professional Experience</h3>
          <div className="flex flex-col gap-10">
            {professional.map((exp, i) => (
              <TimelineItem key={exp.title + exp.org} exp={exp} index={i} accent="blue" />
            ))}
          </div>
        </div>
        <div>
          <h3 className="subheading mb-6">Leadership Experience</h3>
          <div className="flex flex-col gap-10">
            <WicsLeadershipItem index={0} />
            {leadership.map((exp, i) => (
              <TimelineItem key={exp.title + exp.org} exp={exp} index={i + 1} accent="purple" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Experience; 
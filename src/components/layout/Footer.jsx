import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaEnvelope size={24} />, href: 'mailto:nicole22tan22@gmail.com', label: 'Email' },
    { icon: <FaLinkedin size={24} />, href: 'https://linkedin.com/in/nicole-tan-4a07b5226/', label: 'LinkedIn' },
    { icon: <FaGithub size={24} />, href: 'https://github.com/5starnic10', label: 'GitHub' },
  ];

  return (
    <footer className="bg-transparent backdrop-blur-sm py-8 border-t border-white/20 dark:border-white/10">
      <div className="container-padding">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3a2e5c] dark:text-[#e0c8ff] hover:text-[#7d5fc5] dark:hover:text-[#bfa2f7] transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-[#4a6fa5] dark:text-[#b8d6fa] text-sm">
            © {new Date().getFullYear()} Nicole Tan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
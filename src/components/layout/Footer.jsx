import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaEnvelope size={24} />, href: 'mailto:nicole22tan22@gmail.com', label: 'Email' },
    { icon: <FaLinkedin size={24} />, href: 'https://linkedin.com/in/nicole-tan-4a07b5226/', label: 'LinkedIn' },
    { icon: <FaGithub size={24} />, href: 'https://github.com/5starnic10', label: 'GitHub' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t-4 border-game-ink bg-game-night/90 backdrop-blur-md shadow-game-soft">
      <div className="container-padding py-3">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border-2 border-transparent p-2 text-game-cream/80 transition-colors duration-200 hover:border-game-pink/40 hover:text-game-blush"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-game-cream/45 text-xs">
            © {new Date().getFullYear()} Nicole Tan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

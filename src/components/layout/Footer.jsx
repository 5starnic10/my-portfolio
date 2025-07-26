import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={24} />, href: 'https://github.com/yourusername' },
    { icon: <FaLinkedin size={24} />, href: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter size={24} />, href: 'https://twitter.com/yourusername' },
  ];

  return (
    <footer className="bg-primary/90 backdrop-blur-sm py-8">
      <div className="container-padding">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-secondary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-tertiary text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-primary/90 dark:bg-dark/90 backdrop-blur-sm shadow">
      <nav className="container-padding py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="font-bold text-xl tracking-tight text-[#3a2e5c] dark:text-[#e0c8ff]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nicole Tan
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-text dark:text-light hover:text-accent-pink dark:hover:text-accent-blue transition-colors font-medium"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item.name}
            </motion.a>
          ))}
          <button
            className="ml-4 p-2 rounded-full bg-accent-purple/20 dark:bg-accent-pink/20 text-accent-purple dark:text-accent-pink hover:bg-accent-purple/40 dark:hover:bg-accent-pink/40 transition-colors"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-text dark:text-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-primary/95 dark:bg-dark/95 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-padding py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text dark:text-light hover:text-accent-pink dark:hover:text-accent-blue transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              className="mt-2 p-2 rounded-full bg-accent-purple/20 dark:bg-accent-pink/20 text-accent-purple dark:text-accent-pink hover:bg-accent-purple/40 dark:hover:bg-accent-pink/40 transition-colors"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNav = (href) => (e) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 border-b-4 border-game-ink bg-game-night/90 backdrop-blur-md shadow-game-soft">
      <nav className="container-padding py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="font-display font-bold text-xl tracking-tight text-game-blush"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleNav('#home')}
        >
          <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl border-2 border-game-pink/40 bg-game-purple/25 font-pixel text-[0.5rem] text-game-cream">
            NT
          </span>
          Nicole Tan
        </motion.a>

        <div className="hidden md:flex items-center">
          <div className="flex items-center rounded-2xl border-4 border-game-ink/35 bg-game-panel/90 px-2 py-1 shadow-game-soft">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="menu-link"
                onClick={handleNav(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <button
          className="md:hidden rounded-2xl border-2 border-game-pink/40 bg-game-purple/25 p-2 text-game-cream hover:text-game-blush"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full border-b-4 border-game-ink bg-game-night/95 backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-padding py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-2xl border-2 border-game-purple/30 bg-game-purple/10 px-3 py-2 text-game-cream hover:border-game-pink/50 hover:text-game-blush"
                onClick={handleNav(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

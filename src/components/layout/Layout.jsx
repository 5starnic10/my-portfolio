import Header from './Header';
import Footer from './Footer';

const bubbles = [
  { top: '10%', left: '8%', delay: '0s', size: 'w-24 h-24', color: 'bg-game-pink/20' },
  { top: '24%', right: '10%', delay: '1.1s', size: 'w-28 h-28', color: 'bg-game-lilac/20' },
  { top: '62%', left: '6%', delay: '0.6s', size: 'w-24 h-24', color: 'bg-game-blue/20' },
  { bottom: '16%', right: '12%', delay: '1.8s', size: 'w-32 h-32', color: 'bg-game-purple/15' },
];

const sparkles = [
  { top: '18%', left: '82%', size: 'w-2.5 h-2.5', delay: '0.8s' },
  { top: '58%', left: '92%', size: 'w-3 h-3', delay: '0.4s' },
  { top: '76%', left: '14%', size: 'w-2.5 h-2.5', delay: '1.1s' },
];

const arcLines = (
  <svg
    className="fixed top-0 left-0 w-screen h-screen min-w-full min-h-full z-0 pointer-events-none"
    viewBox="0 0 1440 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.14 }}
  >
    {[...Array(24)].map((_, i) => (
      <path
        key={i}
        d={`M${1440 - 80 * i},600 A${1200 + 80 * i},${1200 + 80 * i} 0 0,0 1440,0`}
        stroke="#ffd8ea"
        strokeWidth="1.1"
        fill="none"
      />
    ))}
  </svg>
);

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col transition-colors duration-300 relative overflow-hidden bg-transparent">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <div
            key={`bubble-${index}`}
            className={`absolute rounded-full blur-3xl animate-floaty ${bubble.size} ${bubble.color}`}
            style={{
              top: bubble.top,
              left: bubble.left,
              right: bubble.right,
              bottom: bubble.bottom,
              animationDelay: bubble.delay,
            }}
          />
        ))}
        {sparkles.map((sparkle, index) => (
          <div
            key={`sparkle-${index}`}
            className={`absolute rounded-full bg-game-blush/80 shadow-[0_0_18px_rgba(255,216,234,0.45)] animate-twinkle ${sparkle.size}`}
            style={{ top: sparkle.top, left: sparkle.left, animationDelay: sparkle.delay }}
          />
        ))}
      </div>
      {arcLines}
      <Header />
      <main className="flex-grow pt-16 pb-20 relative z-10 w-full overflow-visible">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

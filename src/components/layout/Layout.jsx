import Header from './Header';
import Footer from './Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

const arcLines = (
  <svg
    className="fixed top-0 left-0 w-screen h-screen min-w-full min-h-full z-0 pointer-events-none"
    viewBox="0 0 1440 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.28 }}
  >
    {[...Array(32)].map((_, i) => (
      <path
        key={i}
        d={`M${1440 - 80 * i},600 A${1200 + 80 * i},${1200 + 80 * i} 0 0,0 1440,0`}
        stroke="white"
        strokeWidth="1.1"
        fill="none"
      />
    ))}
    {[...Array(18)].map((_, i) => (
      <path
        key={100 + i}
        d={`M0,${40 * i} A${800 + 40 * i},${800 + 40 * i} 0 0,1 1440,${40 * i}`}
        stroke="white"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
    ))}
  </svg>
);

const SectionDivider = () => (
  <div className="flex justify-center my-6 md:my-10 w-full">
    <div className="h-0.5 w-2/3 md:w-1/2 rounded-full bg-white opacity-70 dark:opacity-80" />
  </div>
);

const Layout = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-[linear-gradient(120deg,_#f7c6ce_0%,_#d1c4e9_50%,_#a7c7e7_100%)] dark:bg-[linear-gradient(120deg,_#6d214f_0%,_#3a2e5c_50%,_#233876_100%)] transition-colors duration-300 relative overflow-x-hidden">
      {arcLines}
      <Header />
      <main className="flex-grow pt-16 relative z-10 w-full overflow-x-hidden">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
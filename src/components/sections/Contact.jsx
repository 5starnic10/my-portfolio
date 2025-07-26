import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const pastelBlob = (
  <svg
    className="absolute -top-16 right-0 w-80 h-80 z-0 opacity-50"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="contactBlobGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f7c6ce" />
        <stop offset="100%" stopColor="#a7c7e7" />
      </linearGradient>
    </defs>
    <path
      fill="url(#contactBlobGradient)"
      d="M44.8,-67.2C57.2,-59.2,65.7,-44.2,70.2,-28.7C74.7,-13.2,75.2,2.8,70.2,16.7C65.2,30.6,54.7,42.4,41.7,51.2C28.7,60,14.3,65.8,-1.2,67.3C-16.7,68.8,-33.3,66,-45.2,56.7C-57.2,47.3,-64.5,31.5,-68.2,15.1C-71.9,-1.3,-71.9,-18.3,-64.7,-32.2C-57.5,-46.1,-43.1,-56.9,-27.2,-63.7C-11.3,-70.5,6.1,-73.3,22.2,-70.1C38.3,-66.9,44.8,-67.2,44.8,-67.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      {pastelBlob}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto relative z-10"
      >
        <div className="backdrop-blur-md bg-white/70 dark:bg-dark/70 rounded-3xl shadow-xl p-10 md:p-16 flex flex-col items-center">
          <div className="mb-4 flex flex-col items-center">
            <div className="bg-[#f7c6ce] dark:bg-[#a7c7e7] rounded-full p-4 mb-2 shadow-lg">
              <FaPaperPlane className="text-3xl text-[#3a2e5c] dark:text-[#233876]" />
            </div>
            <h2 className="heading mb-2 text-[#3a2e5c] dark:text-accent-pink">Get In Touch</h2>
            <div className="subheading text-[#4a6fa5] dark:text-[#b8d6fa] mb-2 font-semibold">Let's Connect!</div>
            <p className="text-tertiary text-center mb-4">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          <form
            action="https://formspree.io/f/xyzpwzzj"
            method="POST"
            className="w-full space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-[#3a2e5c] dark:text-light">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-primary border border-tertiary rounded focus:outline-none focus:border-secondary text-black placeholder:text-gray-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-[#3a2e5c] dark:text-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-primary border border-tertiary rounded focus:outline-none focus:border-secondary text-black placeholder:text-gray-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-[#3a2e5c] dark:text-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full px-4 py-2 bg-primary border border-tertiary rounded focus:outline-none focus:border-secondary text-black placeholder:text-gray-500"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#f7c6ce] to-[#a7c7e7] text-[#3a2e5c] font-semibold py-3 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 
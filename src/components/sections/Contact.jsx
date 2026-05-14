import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-2xl mx-auto relative z-10 container-padding w-full"
      >
        <div className="page-panel p-10 md:p-16 flex flex-col items-center relative">
          <div className="mb-4 flex flex-col items-center">
            <div className="mb-2 rounded-full border-4 border-game-ink bg-gradient-to-r from-game-pink via-game-lilac to-game-blue p-4 shadow-sticker animate-bob">
              <FaPaperPlane className="text-3xl text-game-ink" />
            </div>
            <h2 className="heading mb-2">Get In Touch</h2>
            <div className="subheading mb-2 font-semibold">Let’s Connect</div>
            <p className="text-game-ink/75 text-center mb-4">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.
            </p>
          </div>
          <form action="https://formspree.io/f/xyzpwzzj" method="POST" className="w-full space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-game-ink/85">
                Name
              </label>
              <input type="text" id="name" name="name" required className="game-input" />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-game-ink/85">
                Email
              </label>
              <input type="email" id="email" name="email" required className="game-input" />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-game-ink/85">
                Message
              </label>
              <textarea id="message" name="message" required rows="6" className="game-input" />
            </div>

            <motion.button type="submit" className="game-btn w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaPaperPlane className="mr-2" /> Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

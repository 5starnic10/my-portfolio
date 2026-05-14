import { motion } from 'framer-motion';

const toneClasses = {
  pink: 'stat-bar__segment--pink',
  purple: 'stat-bar__segment--purple',
  blue: 'stat-bar__segment--blue',
};

const StatBar = ({ label, value, tone = 'pink', icon: Icon }) => {
  const clamped = Math.max(0, Math.min(100, value));
  const filledSegments = Math.round(clamped / 10);
  const rank = clamped >= 90 ? 'S' : clamped >= 80 ? 'A' : clamped >= 70 ? 'B' : 'C';
  const fillClass = toneClasses[tone] ?? toneClasses.pink;

  return (
    <motion.div
      className="stat-bar"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <motion.div className="stat-bar__label">
        <span className="stat-bar__title">
          {Icon && (
            <span className="stat-bar__icon" aria-hidden="true">
              <Icon />
            </span>
          )}
          <span>{label}</span>
        </span>
        <span className="stat-bar__meta">
          <span className={`stat-bar__rank stat-bar__rank--${tone}`}>{rank}</span>
          <span className="stat-bar__score">
            <span className="stat-bar__score-value">{clamped}</span>
            <span className="stat-bar__score-suffix">/100</span>
          </span>
        </span>
      </motion.div>
      <div
        className="stat-bar__track"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <motion.span
            key={index}
            className={`stat-bar__segment ${index < filledSegments ? fillClass : 'stat-bar__segment--empty'}`}
            initial={{ opacity: 0, scaleY: 0.35 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default StatBar;

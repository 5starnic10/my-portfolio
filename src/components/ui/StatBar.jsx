import { motion } from 'framer-motion';

const toneClasses = {
  pink: 'stat-bar__segment--pink',
  purple: 'stat-bar__segment--purple',
  blue: 'stat-bar__segment--blue',
};

const StatBar = ({ label, value, tone = 'pink', icon: Icon }) => {
  const clamped = Math.max(0, Math.min(100, value));
  const fullSegments = Math.floor(clamped / 10);
  const partialFill = (clamped % 10) / 10;
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
        <span className="stat-bar__score">
          <span className="stat-bar__score-value">{clamped}</span>
          <span className="stat-bar__score-suffix">/100</span>
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
        {Array.from({ length: 10 }, (_, index) => {
          const isFull = index < fullSegments;
          const isPartial = index === fullSegments && partialFill > 0;
          const segmentClass = isFull ? fillClass : 'stat-bar__segment--empty';

          return (
            <motion.span
              key={index}
              className={`stat-bar__segment ${segmentClass}`}
              initial={{ opacity: 0, scaleY: 0.35 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
            >
              {isPartial && (
                <span
                  className={`stat-bar__segment-fill ${fillClass}`}
                  style={{ width: `${partialFill * 100}%` }}
                />
              )}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default StatBar;

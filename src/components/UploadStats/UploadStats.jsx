import s from './UploadStats.module.css';

import PropTypes from 'prop-types';

const UploadStats = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.statsTitle}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.statItem}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={s.statsLabel}>{label}</span>
            <span className={s.percentage}>{percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UploadStats;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

UploadStats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

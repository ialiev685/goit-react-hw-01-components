import generateColor from "./generateColor";
import style from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => {
          const color = generateColor();
          return (
            <li className="item" style={{ backgroundColor: color }} key={id}>
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

import generateColor from "./generateColor";
import style from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  console.log(stats);
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

export default Statistics;

import PropTypes from "prop-types";
import StatisticsCSS from "./Statistics.module.css";

const Statistics = ({ title = null, stats }) => {
  const statRender = stats.map((stat) => {
    return (
      <li key={stat.id} className={StatisticsCSS.item}>
        <span className={StatisticsCSS.label}>{stat.label}</span>
        <span className={StatisticsCSS.percentage}>{stat.percentage}%</span>
      </li>
    );
  });
  return (
    <section className={StatisticsCSS.statistics}>
      {title && <h2 className={StatisticsCSS.title}>{title}</h2>}
      <ul className={StatisticsCSS.statList}>{statRender}</ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

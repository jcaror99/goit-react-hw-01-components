import css from './Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ title = '', stats }) => {
    return (
    <section>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>
            {stats.map(
                (element) => (
                <li className={css.item} key={element.id} style={{backgroundColor:getRandomHexColor()}}>
                    <span className="label">{element.label}</span>
                    <span className="percentage">{element.percentage}</span>
                </li>
            ))}
            </ul>
    </section>
    );
}

export default Statistics
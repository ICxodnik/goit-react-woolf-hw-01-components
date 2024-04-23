import css from './index.module.css';
import { getRandomColorCssObject } from "../../services/colorGenerator.js"

const Statistic = ({ title, stats }) => (
    <section className={css.statistics}>
        {title && (<h2 className={css.title}>Upload stats</h2>)}

        <ul className={css.starList}>
            {stats.map(el => (
                <li className={css.item} key={el.id} style={getRandomColorCssObject()}>
                    <span className={css.label}>{el.label}</span>
                    <span className={css.percentage}>{el.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
)

export default Statistic
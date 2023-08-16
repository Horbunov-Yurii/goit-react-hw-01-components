
import propTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
        return (
          <>
            {/* <h2>TASK 2</h2> */}
            <section>
              {title && <h2>{title}</h2>}
              <ul>
                {stats.map(props => (
                  <li
                    key={props.id}
                    style={{ backgroundColor: getRandomHexColor() }}
                  >
                    <span>{props.label}</span><br></br>
                    <span>{props.percentage}%</span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        );
    }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      label: propTypes.string,
      percentage: propTypes.number,
    })
  ),
}.isRequired;
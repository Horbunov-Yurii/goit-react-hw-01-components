
import propTypes from 'prop-types';
import {
  Section,
  SectionCard,
  Title,
  List,
  Item,
  ItemPercentage,
  ItemLabel,
} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
        return (
          <>
            {/* <h2>TASK 2</h2> */}
            <Section>
              <SectionCard>
                {title && <Title>{title}</Title>}
                <List>
                  {stats.map(props => (
                    <Item
                      key={props.id}
                      style={{ backgroundColor: getRandomHexColor() }}
                    >
                      <ItemLabel>{props.label}</ItemLabel>
                      <br></br>
                      <ItemPercentage>{props.percentage}%</ItemPercentage>
                    </Item>
                  ))}
                </List>
              </SectionCard>
            </Section>
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
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};



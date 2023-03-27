import PropTypes from 'prop-types';
import { StatList, StatItem, ItemText } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatList>
        <StatItem>Good: <ItemText>{good}</ItemText></StatItem>
        <StatItem>Neutral: <ItemText>{neutral}</ItemText></StatItem>
        <StatItem>Bad: <ItemText>{bad}</ItemText></StatItem>
        <StatItem>Total: <ItemText>{total}</ItemText></StatItem>
        <StatItem>Positive Feedback: <ItemText>{positivePercentage}%</ItemText></StatItem>
    </StatList>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}
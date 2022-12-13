import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={styles.statistics}>
        {/* <span className={styles.statistics__title}>Statistics</span> */}
        <div className={styles.statistics__items}>
          <p className={styles.statistics__item}>Good: {good}</p>
          <p className={styles.statistics__item}>Neutral: {neutral}</p>
          <p className={styles.statistics__item}>Bad: {bad}</p>
          <p className={styles.statistics__item}>Total: {total}</p>
          <p className={styles.statistics__item}>
            Positive feedback: {positivePercentage} %
          </p>
        </div>
      </div>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

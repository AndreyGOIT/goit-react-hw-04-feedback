import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={styles.buttons}>
      {options.map((option, index) => (
        <button
          key={index}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
      {/* // <button name="good" type="button" onClick={onLeaveFeedback}>
      //   Good
      // </button>
      // <button name="neutral" type="button" onClick={onLeaveFeedback}>
      //   neutral
      // </button>
      // <button name="bad" type="button" onClick={onLeaveFeedback}>
      //   bad
      // </button> */}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

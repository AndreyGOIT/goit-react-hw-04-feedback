import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) => {
  return (
    <div className={styles.buttons}>
      <button name="good" type="button" onClick={onLeaveFeedbackGood}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onLeaveFeedbackNeutral}>
        neutral
      </button>
      <button name="bad" type="button" onClick={onLeaveFeedbackBad}>
        bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedbackGood: PropTypes.func.isRequired,
  onLeaveFeedbackNeutral: PropTypes.func.isRequired,
  onLeaveFeedbackBad: PropTypes.func.isRequired,
};

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div className={styles.buttons}>
//       {options.map(key => (
//         <button key={key} name={key} type="button" onClick={onLeaveFeedback}>
//           {key}
//         </button>
//       ))}
//     </div>
//   );
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from '../components/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(state => state + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(state => state + 1);
  };
  const handleClickBad = () => {
    setBad(state => state + 1);
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage =
    good > 0 ? Math.round((good / countTotalFeedback) * 100) : 0;

  return (
    <>
      <Section title="Please leave feedback">
        <b>Please leave feedback</b>
        <FeedbackOptions
          onLeaveFeedbackGood={handleClickGood}
          onLeaveFeedbackNeutral={handleClickNeutral}
          onLeaveFeedbackBad={handleClickBad}
        />
      </Section>

      <Section title="Statistics">
        <b>Statistics</b>
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    </>
  );
}

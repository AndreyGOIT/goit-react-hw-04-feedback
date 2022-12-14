import { useState } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from '../components/Statistics';
import { Section } from './Section/Section';
import styles from './FeedbackOptions/FeedbackOptions.module.css';
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
        <div className={styles.buttons}>
          <button name="good" type="button" onClick={handleClickGood}>
            good
          </button>
          <button name="neutral" type="button" onClick={handleClickNeutral}>
            neutral
          </button>
          <button name="bad" type="button" onClick={handleClickBad}>
            bad
          </button>
        </div>
        {/* <FeedbackOptions
          onLeaveFeedbackGood={handleClickGood}
          onLeaveFeedbackNeutral={handleClickNeutral}
          onLeaveFeedbackBad={handleClickBad}
        /> */}
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
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = event => {
//     console.log(event);
//     const key = event.target.name;
//     this.setState(prevState => {
//       return { [key]: prevState[key] + 1 };
//     });
//   };
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const totalRates = this.countTotalFeedback();
//     const goodRates = this.state.good;
//     return goodRates > 0 ? Math.round((goodRates / totalRates) * 100) : 0;
//   };

//   render() {
//     const totalRates = this.countTotalFeedback();
//     console.log(totalRates);
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <b>Please leave feedback</b>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//           ></FeedbackOptions>
//         </Section>

//         <Section title="Statistics">
//           <b>Statistics</b>
//           {totalRates > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;

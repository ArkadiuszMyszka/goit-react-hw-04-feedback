import { useState } from 'react';
import Section from './Section';
import Feedback from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const value =
      Math.round(((good * 100) / countTotalFeedback()).toFixed(0)) || 0;
    return value + '%';
  };
  const handleFeedbackState = name => {
    if (name === 'good') setGood(prevState => prevState + 1);
    if (name === 'neutral') setNeutral(prevState => prevState + 1);
    if (name === 'bad') setBad(prevState => prevState + 1);
  };

  const handleEmptyFeedback = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback onLeaveFeedback={handleFeedbackState} />
      </Section>
      <Section title="Statistics">
        {handleEmptyFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

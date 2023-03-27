import React, {useState} from 'react';
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Container } from './App.styled';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // countTotalFeedback = () => Object.values(this.state).reduce((acc, el) => (acc + el), 0);

  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   const { good } = this.state;
  //   const percentage = (good / total) * 100;
  //   return Math.round(percentage);
  // }

  // handleIncrementFeedback = evt => {
  //   const { name } = evt.currentTarget;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1
  //   }));
  // };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={["good", "neutral", "bad"]} onChangeFeedback={handleIncrementFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"/>
        ) : (
          <Statistics good={good} bad={bad} neutral={neutral} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
        )}
      </Section>
    </Container>
  )


  // static propTypes = {};

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }

  // countTotalFeedback = () => Object.values(this.state).reduce((acc, el) => (acc + el), 0);

  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   const { good } = this.state;
  //   const percentage = (good / total) * 100;
  //   return Math.round(percentage);
  // }

  // handleIncrementFeedback = evt => {
  //   const { name } = evt.currentTarget;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1
  //   }));
  // };

  // // render() {
  // //   const { good, bad, neutral } = this.state;
  // //   const { countTotalFeedback, countPositiveFeedbackPercentage, handleIncrementFeedback } = this;
  // //   return (
  // //     <Container>
  // //       <Section title="Please leave feedback">
  // //         <FeedbackOptions options={["good", "neutral", "bad"]} onChangeFeedback={handleIncrementFeedback} />
  // //       </Section>
  // //       <Section title="Statistics">
  // //         {countTotalFeedback() === 0 ? (
  // //           <Notification message="There is no feedback"/>
  // //         ) : (
  // //           <Statistics good={good} bad={bad} neutral={neutral} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
  // //         )}
  // //       </Section>
  // //     </Container>
  // //   )
  // }
  
};

import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, stats }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}: </td>
        <td>{stats}%</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{text}: </td>
        <td>{stats}</td>
      </tr>
    );
  }
};

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>no feedback yet</p>;
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text="good" stats={good} />
            <StatisticsLine text="neutral" stats={neutral} />
            <StatisticsLine text="bad" stats={bad} />
            <StatisticsLine text="all" stats={good + neutral + bad} />
            <StatisticsLine
              text="average"
              stats={((good * 1 + bad * -1) / (good + neutral + bad)).toFixed(
                2
              )}
            />
            <StatisticsLine
              text="positive"
              stats={(good * (100 / (good + neutral + bad))).toFixed(2)}
            />
          </tbody>
        </table>
      </div>
    );
  }
};

export default App;

import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr key={text}>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, bad, neutral }) => {
  if (good !== 0 || bad !== 0 || neutral !== 0) {
    const total = good + bad + neutral;
    const average = total > 0 ? total / 3 : 0;
    return (
      <div>
        <h3>Statistics</h3>
        <table>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"Total"} value={total} />
          <StatisticLine text={"Average"} value={average} />
        </table>
      </div>
    );
  }

  return (
    <>
      <br /> <span>No statistics given</span>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const updateGood = () => {
    setGood(good + 1);
  };

  const updateNeutral = () => {
    setNeutral(neutral + 1);
  };

  const updateBad = () => {
    setBad(bad + 1);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Give Feedback</h3>
      <Button handleClick={updateGood} text="good" />
      <Button handleClick={updateNeutral} text="neutral" />
      <Button handleClick={updateBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;

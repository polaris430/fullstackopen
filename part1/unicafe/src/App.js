import { useState } from "react";

//StatisticsLine component
const StatisticLine = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);

// Statistics component showing feedback stats
const Statistics = (props) => {
  if (props.all.length === 0) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tr>
          <td>
            <StatisticLine text="good" value={props.good} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="neutral" value={props.neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="bad" value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine
              text="all"
              value={props.all.reduce(function (x, y) {
                return x + y;
              }, 0)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="avg" value={props.avg} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="positive%" value={props.positive} />
          </td>
        </tr>
      </table>
    </div>
  );
};

//Button component
const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleGoodClick}> {props.text1} </button>
      <button onClick={props.handleNeutralClick}> {props.text2} </button>
      <button onClick={props.handleBadClick}> {props.text3} </button>
    </div>
  );
};

//App component
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState([]);
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);

  return (
    <div>
      <div></div>
      <div>
        <h1>give feedback</h1>
      </div>
      <Button
        handleGoodClick={() => {
          setGood(good + 1);
          setAll(all.concat(1));
          setAvg(
            all.reduce(function (x, y) {
              return x + y;
            }, 0) / 3
          );
          setPositive(
            (good /
              all.reduce(function (x, y) {
                return x + y;
              }, 0)) *
              100
          );
        }}
        text1="good"
        handleNeutralClick={() => {
          setNeutral(neutral + 1);
          setAll(all.concat(1));
          setAvg(
            all.reduce(function (x, y) {
              return x + y;
            }, 0) / 3
          );
          setPositive(
            (good /
              all.reduce(function (x, y) {
                return x + y;
              }, 0)) *
              100
          );
        }}
        text2="neutral"
        handleBadClick={() => {
          setBad(bad + 1);
          setAll(all.concat(1));
          setAvg(
            all.reduce(function (x, y) {
              return x + y;
            }, 0) / 3
          );
          setPositive(
            (good /
              all.reduce(function (x, y) {
                return x + y;
              }, 0)) *
              100
          );
        }}
        text3="bad"
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        positive={positive}
      />
    </div>
  );
};

export default App;

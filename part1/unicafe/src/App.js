import { useState } from "react";

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
      <div>
        <h1>statistics</h1>
      </div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>
        all{" "}
        {props.all.reduce(function (x, y) {
          return x + y;
        }, 0)}
      </div>
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

//StatisticsLine component

//App component
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState([]);

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
        }}
        text1="good"
        handleNeutralClick={() => {
          setNeutral(neutral + 1);
          setAll(all.concat(1));
        }}
        text2="neutral"
        handleBadClick={() => {
          setBad(bad + 1);
          setAll(all.concat(1));
        }}
        text3="bad"
      />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;

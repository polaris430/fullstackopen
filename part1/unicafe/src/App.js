import { useState } from "react";

//

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState([]);

  const handleGoodClick = () => {
    setAll(all.concat(1));
    setGood(good + 1);
  };
  const handleBadClick = () => {
    setAll(all.concat(1));
    setBad(bad + 1);
  };
  const handleNeutralClick = () => {
    setAll(all.concat(1));
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <div>
        <h1>give feedback</h1>
      </div>
      <span>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </span>
      <div>
        <h1>statistics</h1>
      </div>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>
        all{" "}
        {all.reduce(function (x, y) {
          return x + y;
        }, 0)}
      </div>
    </div>
  );
};

export default App;

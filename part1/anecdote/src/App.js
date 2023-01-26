import { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleNextClick}>{props.text1}</button>
      <button onClick={props.handleVoteClick}>{props.text2}</button>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    "Premature optimization is the root of all evil",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    "The only way to go fast, is to go well",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Uint8Array(anecdotes.length));

  const handleNextClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVoteClick = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  return (
    <div>
      <div>
        {anecdotes[selected]} has {vote[selected]} votes
      </div>
      <Button
        text1="next"
        text2="vote"
        handleNextClick={handleNextClick}
        handleVoteClick={handleVoteClick}
      />
    </div>
  );
};

export default App;

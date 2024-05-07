import React, { useState } from "react";

const StateExample = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    let newCounterValue = counter + 1;
    setCounter(newCounterValue);
  };

  const decreaseCounter = () => {
    let newCounterValue = counter - 1;
    setCounter(newCounterValue);
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div className="buttons">
        <button style={{ marginRight: "1rem" }} onClick={increaseCounter}>
          Increment
        </button>
        <button onClick={decreaseCounter}>Decrement</button>
      </div>
    </div>
  );
};

export default StateExample;

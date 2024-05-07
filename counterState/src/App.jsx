import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div className="buttons">
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
      </div>
      <hr />
      <Form />
    </div>
  );
}

export default App;

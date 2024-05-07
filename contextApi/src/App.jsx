import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { counterContext } from "./context/context";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <counterContext.Provider value={{ counter, setCounter }}>
        <Navbar />
      </counterContext.Provider>
    </>
  );
}

export default App;

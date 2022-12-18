import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(4);

  function dec() {
    // setCount(count - 1);
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  function inc() {
    // setCount(count + 1);
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default App;

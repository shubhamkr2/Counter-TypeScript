import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

interface ICounter {
  count: number;
}

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;

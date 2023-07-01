import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import { ICounter } from "./Interfaces/Counter";

function App() {
  const [count, setCount] = useState<ICounter>({count:0});

  return (
    <div className="App">
      <h1>{count.count}</h1>
      <Counter count={count.count} setCount={setCount} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

interface ICounter {
  count: number;
}

function App() {
  const [count, setCount] = useState<number>();

  return (
    <div className="App">
      <h1>{count}</h1>
      <Counter setCount={setCount} />
    </div>
  );
}

export default App;

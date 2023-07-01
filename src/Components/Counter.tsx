import React from 'react';
import { IProps } from '../Interfaces/Counter';

function Counter({ count, setCount }: IProps) {
  return (
    <>
      <div>Counter</div>
      <button onClick={() => setCount({count:count + 1})}>+</button>
      <button onClick={() => setCount({count:count - 1})}>-</button>
    </>
  );
}

export default Counter;

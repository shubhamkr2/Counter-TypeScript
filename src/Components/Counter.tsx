import React from 'react'
interface IProps {
    count: number;
    setCount(count:number): void;
}
function Counter({count, setCount}:IProps) {
  return (
    <>
    <div>Counter</div>
    <button onClick={()=>setCount(count+1)} >+</button>
    <button >-</button>
    </>
  )
}

export default Counter
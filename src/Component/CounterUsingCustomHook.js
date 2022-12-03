import React, { useState } from 'react'
import useCounter from './useCounter'

/*This is a customCounter hook which take cares of incrementing, decrementing and reseeting the value  */
function CounterUsingCustomHook() {
    const [count, increment, decrement, reset] = useCounter(0, 10)
  return (
    <div>
        CounterUsingCustomHook - {count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    
    </div>
  )
}

export default CounterUsingCustomHook
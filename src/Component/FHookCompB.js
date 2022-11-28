import React, { useContext } from 'react'
import { context } from '../App'

/*This is the the example of Global state management where useReducer props are passed to 
child components with the help of useContext
All the logic of increasing and decresing count is written in App.js
Here we are just calling the dispatcher function to perform the action for the counter*/

function FHookCompB() {
    const countContext = useContext(context)
  return (
    <div>
        <button onClick={() => countContext.dispatch({type: 'increment', value: 1})}>increment count </button>
        <button onClick={() => countContext.dispatch({type: 'decrement', value: 1})}>decrement count </button>
        <button onClick={() => countContext.dispatch({type: 'reset', value: 1})}>reset </button>
    </div>

  )
}

export default FHookCompB
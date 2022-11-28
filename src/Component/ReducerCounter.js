import React, { useReducer } from 'react'

const intitialState = {
    firstCounter: 0
}
/*it is a example of local state management. useReducer is a hooks which is used for
state management in the functional component and useState are built on useReducer.
UseReducer takes two arguments 
1st argument is the reducer function where as the second argument is the initial state of the component
reducer function also takes two argument, currentstate and action needs to be 
performed on the current state.
useReducer function returns two value, first one is the new state and second one is the dispatcher 
function with the help of which you can execute the reducer function by passing the appropiate 
parameters.
*/

const reducer= (state, action) => {
    switch(action.type) {
        case 'increment':
            return  {firstCounter : state.firstCounter + action.value} 
        case 'decrement':
            return {firstCounter : state.firstCounter - action.value}   
        case 'reset':
            return intitialState    
         default:
            return state   
    }
}

function ReducerCounter() {
    const [count, dispatch] = useReducer(reducer, intitialState)
  return (
    <div>
            Reducer Counter - {count.firstCounter}
            <button onClick={() => dispatch({type : 'increment', value : 1})}>increment</button>
            <button onClick={() => dispatch({type : 'decrement', value : 1})}>decrement</button>
            <button onClick={() => dispatch({type : 'reset'})}>reset</button>
    </div>
  )
}

export default ReducerCounter
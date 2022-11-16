import React, {useState} from 'react'

function HooksCounter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        Total Count {count}
        <button onClick = {() => setCount(prevCount => prevCount+1)}> increase count </button>
    </div>
    
  )
}

export default HooksCounter
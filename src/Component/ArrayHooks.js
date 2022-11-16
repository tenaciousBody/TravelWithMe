import React, {useState} from 'react'

function ArrayHooks() {
  
    const [states, setState] = useState([])
    const addStates = () => {setState([{
        id: "1",
        value: "Bihar"
    },
    {
        id:"2",
        value: "jharkhand"
    }, 
    {
        id:"3",
        value: "Kerla"
    },
    {
        id:"4",
        value: "Maharashtra"
    }])}
  return (
    <div>
        <button onClick= {addStates}>insert states</button>
        <ul>
            {states.map(state => 
            <li key={state.id}>{state.value}</li>
            )}
        </ul>
    </div>
  )
}

export default ArrayHooks
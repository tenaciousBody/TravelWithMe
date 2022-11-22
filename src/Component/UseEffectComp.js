import React, {useEffect, useState} from 'react'

//useEffect is used to perform side effects in the functional components 
//and it is a close replacement of componentDidMount, componentDidUpdate and componentWillUnMount method
function UseEffectComp() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('') 

  //useEffect takes a function as an argument which gets called everytime when a component gets rendered.
  // we can pass an array in the second argument. if there is a change in the value of a property
  // present in that array, then only useState method will be called.
  //
  useEffect(()=> {
    console.log("useEffect called")
    document.title = `Total count ${count}`
  },[count])

  return (
    <div>
        <input type="text" value={name} onChange={(event)=> setName(event.target.value)}></input>
        <button onClick={()=> (setCount(prevCount => prevCount + 1)) }>Click Counter {count} times</button>
    </div>
  )
}

export default UseEffectComp
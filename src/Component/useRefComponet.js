import React, { useEffect, useRef } from 'react'
import useInput from './useInput'

function useRefComponet() {
    const inputname = useRef()
    const [value, bindName, resetName] = useInput('')

    const submitHandler = (e) => {
      //preventDefault ensures that form value doesn't gets changed on refersh
      e.preventDefault()
      alert(`first Name is ${value}`)
    }

    useEffect(() => {
        console.log('useEffect function has been called')
        inputname.current.focus()
    }, [])


  return (
    <div>
        <input name='name' ref={inputname} {...bindName}></input>
        <button onClick={submitHandler}>Show Name</button>
    </div>
  )
}

export default useRefComponet
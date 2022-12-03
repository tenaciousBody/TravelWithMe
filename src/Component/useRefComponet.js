import React, { useEffect, useRef } from 'react'

function useRefComponet() {
    const inputname = useRef()

    useEffect(() => {
        console.log('useEffect function has been called')
        inputname.current.focus()
    }, [])
  return (
    <div>
        <input name='name' ref={inputname}></input>
    </div>
  )
}

export default useRefComponet
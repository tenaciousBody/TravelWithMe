import React, { useEffect, useState } from 'react'

function MouseHooks() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

const logMouseMove = (event) => {
    console.log('logmousemove clicked')
    //to set the X and y cordinates for Mouse move position
    setX(event.clientX)
    setY(event.clientY)
}

//By passing an empty array in the second argument to useEffect function we are telling 
//react to not to watch for chnage in value for any state or props, in this case useEffect will be called 
//only once as it doesn't have any dependency on any state or props variable 
  useEffect(() => {
    console.log("use effect of Mouse Hooks called")
    window.addEventListener('mousemove', logMouseMove)

    //UseEffect returns a function which is treated as close replacement of componentUnMount method
    //This returned function is used for cleanup and to remove the event listeners

    return () => {
        window.removeEventListener('mousemove', logMouseMove)
    }
  }, [])

  return (
    <div>
        Mouse positions - X {x} , Y - {y}
    </div>
  )
}

export default MouseHooks
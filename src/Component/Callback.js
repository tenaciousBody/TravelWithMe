import React from 'react'

function Callback() {
    console.log("Callback called")
  return (
    <h3>useCallBack Hook Example</h3>
  )
}

export default React.memo(Callback)
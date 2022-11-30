import React from 'react'

function CallBackButton(props) {
    console.log(`CallBackButton ${props.children}`)
  return (
    <div>
        <button onClick={props.increment}>{props.children}</button>
    </div>
  )
}

export default React.memo(CallBackButton)
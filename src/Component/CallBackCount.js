import React from 'react'

function CallBackCount(props) {
    console.log(`Callback count ${props.text}`)
  return (
    <div>{props.text} - {props.age}</div>
  )
}

//React.memo prevents the rendering of compoents in case there is no change in the props and state 
//of the component
export default React.memo(CallBackCount)
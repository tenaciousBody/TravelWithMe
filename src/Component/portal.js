import React from 'react'
import { ReactDOM } from 'react'
//Portal is used to reder our components in domNode which exist outside of the dom heirarchy of the parent component.
function portal() { 
  return ReactDOM.createPortal(
    <div>
    Hi This is Portal changes 
    </div>, 
    document.getElementById('portal-root')
  )
}

export default portal
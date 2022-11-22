import React, { useState } from 'react'
import HooksCounter from './HooksCounter'
import MouseHooks from './MouseHooks'

function MouseContainer() {
    const [dispaly, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(false)}>Unmount Mosue Hooks component</button>
        { dispaly && <MouseHooks/>}
   </div>
  )
}

export default MouseContainer
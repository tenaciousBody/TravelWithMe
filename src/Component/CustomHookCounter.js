import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function CustomHookCounter() {
    const [count , setCount] = useState(0)

    // useEffect is the common code that can be put under a differentc component
   useDocumentTitle(count) 
  return (
    <div>
        <button onClick={ () => setCount(count+1)}>increment count</button>
    </div>
  )
}

export default CustomHookCounter
import React, {useState, useMemo} from 'react'

/*useCallback hooks cached the instance of provided function in the functional component.
However, useMemo cached the response of invoked function provided in the functionl component.
Both serves the purpose to enhance the performance of the application
*/
function MemoCounters() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    //use of useMemo
    const isEven = useMemo(() => {
        let i = 0
        while(i<500000000) i++
        return counter1%2 === 0
    }, [counter1])
    
  return (
    <div>
        <button onClick={ () => {setCounter1(counter1+1)}}>increment counter1 - {counter1}</button>
        {isEven? " Even": " odd"}<br/>
        <button onClick={ () => {setCounter2(counter2+1)}}>increment counter2 -{counter2}</button>
    </div>
  )
}

export default MemoCounters
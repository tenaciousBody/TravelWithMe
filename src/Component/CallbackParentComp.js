import React, { useState, useCallback } from 'react'
import Callback from './Callback'
import CallBackButton from './CallBackButton'
import CallBackCount from './CallBackCount'

/*henever CallbackParentComp gets renderd it consider all the defined function as new function
if these functions are passed as reference or props to any child component, that component will
be renderd everytime whenever CallbackParentComp gets renderd.*/
/* In this situation we can used useCallback hooks which prevents un-necessary rendering of 
a component when a function is passed as a reference to optimize the child component.
It basically cache or memoise the existing functions.
In this scenario we are trying to prevent rendering of CallBackButton Component
 */
function CallbackParentComp() {
    const[age, setAge] = useState(15)
    const[salary, setSalary] = useState(5500)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    }, [age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary+500)
    }, [salary]) 

  return (
    <div>
        <Callback/>
        <CallBackCount text='age' age={age}></CallBackCount>
        <CallBackButton increment={incrementAge}>Increase age </CallBackButton>
        <CallBackCount text='salary' age={salary}></CallBackCount>
        <CallBackButton increment={incrementSalary}>Increase Salary </CallBackButton>
    </div>
  )
}

export default CallbackParentComp
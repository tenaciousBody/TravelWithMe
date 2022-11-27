import React, { useContext } from 'react'
import { user, channel } from './FComponentA'

function FComponentC() {
    const userObj = useContext(user)
    const channelObj = useContext(channel)
  return (
    <div>
        <h3>User has logged in from {channelObj}</h3>
        <label> First Name : - {userObj.name}</label>
        <br/>
        <label>Last Name : - {userObj.Lname}</label>
        <br/>
        <label> LoggedIn :- {userObj.isAuthenticated}</label>
    </div>
  )
}

export default FComponentC
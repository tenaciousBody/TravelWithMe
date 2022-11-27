import React from 'react'
import FComponentB from './FComponentB';

export const user = React.createContext()
export const channel = React.createContext();

const userProps = {
    name : 'Ashutosh', 
    Lname: 'Kumar', 
    isAuthenticated: 'true'
}

function FComponentA() {
  return (
    <div>
        <user.Provider value={userProps}>
            <channel.Provider value='web'>
                <FComponentB/>
            </channel.Provider>
        </user.Provider>
        
    </div>
  )
}

export default FComponentA
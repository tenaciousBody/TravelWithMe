import React, { useState } from 'react'

function HooksWithObject() {
    const [name, setName] = useState({firstname: '', lastname: ''})
  return (
    <div>
        <input type="text" value={name.firstname} onChange={(event) => setName({firstname:event.target.value})}></input>
        <input type="text" value={name.lastname} onChange= {(event) => setName({lastname:event.target.value})}></input>
        <br>
        </br>
        First Name : {name.firstname} Last Name: {name.lastname}
    </div>
  )
}

export default HooksWithObject
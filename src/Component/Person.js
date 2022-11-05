import React from 'react'

function Person({person}) {
  return (
    <div>
        <h1>My Name is {person.name} and I am {person.age} yrs old. My skills are {person.skills}</h1>
    </div>
  )
}

export default Person


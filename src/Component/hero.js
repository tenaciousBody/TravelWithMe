import React from 'react'

function hero({heroname}) {
    if(heroname === 'Thor'){
        throw new Error ('He is not a hero')
    }
  return (
    <div>{heroname}</div>
  )
}

export default hero
import React from 'react'
import Person from './Person'

function PersonList()
 {
     //defing Array in react
    const persons = [
        {
            id: "1",
            name: "Ashutosh Kumar",
            age: "26",
            skills: "Angular"
        },
        {
          id: "2",
          name: "Chirag",
          age: "29",
          skills: "Data Science"
        },
        {
          id: "3",
          name: "Aman Singh",
          age: "24",
          skills: "Banking"
        }
    ]

    //iterating an array -> do some action for each element and store the updated list in a variable. 
    const personDetails = persons.map(person => (
    <Person key={person.id} person={person}></Person>
    ))
       return (
      <div>
          {personDetails}
      </div>
    )
  }

export default PersonList
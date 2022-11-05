import React from 'react'

// function child(props) {
//               /*here we can write this way as well <button onClick ={props.clickHandler}></button>
//           //as we need to send an argument back to Parent components we have used arrow function here*/
//     return (
//       <div>
//           <button onClick = {() => props.clickHandler('Ashutosh')}>Show Alert</button>
//       </div>
//     )
//   }


//Second Way of defining function component
const child = (props) => {
              /*here we can write this way as well <button onClick ={props.clickHandler}></button>
          //as we need to send an argument back to Parent components we have used arrow function here*/
    return (
      <div>
          <button onClick = {() => props.clickHandler('Ashutosh')}>Show Ashutosh Alert</button>
      </div>
    )
  }

export default child
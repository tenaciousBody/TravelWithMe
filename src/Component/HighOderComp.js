import React, { Component } from 'react'

//This is the example of Higher Order Components - Which takes a componemt as an argument and 
//return a component
const HighOrderComp = (Wrappedcomponent) => {
    
     class newComponent extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
              counter: 0
            }
          }
          //if you are using prevState then setState Argument function callback should return something
        mouseHoverHandler = () => {
            this.setState( prevState => {
            return { counter : prevState.counter + 1 }
            })
        }  
      render() {
        return (
          <div>
            <Wrappedcomponent incount={this.mouseHoverHandler} count={this.state.counter}/>
          </div>
        )
      }

    }
    return newComponent   
}

export default HighOrderComp
import React, { Component } from 'react'

//Use of props render -> Props render is a technique for sharing code between componets using a props 
// whose value is function 
class PropsRender extends Component {
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
      <div>{this.props.render(this.mouseHoverHandler,this.state.counter)}</div>
    )
  }
}

export default PropsRender
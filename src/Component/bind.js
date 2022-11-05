import React, { Component } from 'react'

class Bind extends Component {
    constructor(props){
        super(props);
        this.state = {
            Message: "Hello World"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            Message: "Thanks for clicking on button"
        })
    }
  render() {
    return (
      <div>
          <p>{this.state.Message}</p>
          <button onClick={this.clickHandler}>Click me to change the Message</button>
      </div>
    )
  }
}

export default Bind
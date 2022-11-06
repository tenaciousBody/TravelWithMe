import React, { Component } from 'react'

//to increase the count when user hover on heading tag
class hoverCounter2 extends Component {
  render() {
    //const {count} = this.state
    return (
      <div>
        <h2 onMouseOver={this.props.incount}>Total Count {this.props.counter}</h2>
      </div>
    )
  }
}

export default hoverCounter2
import React, { Component } from 'react'
import HighOrderComp from './HighOderComp'
//to increase the count when user hover on heading tag
class hoverCounter extends Component {
  render() {
    //const {count} = this.state
    return (
      <div>
        <h2 onMouseOver={this.props.incount}>Total Count {this.props.count}</h2>
      </div>
    )
  }
}

export default HighOrderComp(hoverCounter)
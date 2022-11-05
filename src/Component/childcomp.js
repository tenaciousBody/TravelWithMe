import React, { Component } from 'react'

class childcomp extends Component {
  render() {
    return (
    <div>
        <button onClick = {() => this.props.clickHandler('Ayush')}>Show Ayush Alert</button>
    </div>
    )
  }
}

export default childcomp
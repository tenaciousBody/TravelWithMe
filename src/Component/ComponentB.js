import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserContext } from './context'

class ComponentB extends Component {
  render() {
    return (
      <div>
        <h3>default value For Component B is {this.context}</h3>
        <ComponentC/></div>
    )
  }
}

ComponentB.contextType = UserContext 
export default ComponentB
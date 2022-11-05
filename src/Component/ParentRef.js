import React, { Component } from 'react'
import P2ChildRef from './P2ChildRef'

 class ParentRef extends Component {
    constructor(props) {
      super(props)
        this.ParentRef = React.createRef()
    }
    clickHandler = () => {
        this.ParentRef.current.pleaseFocus()
    }
  render() {
    return (
      <div>
        <P2ChildRef ref={this.ParentRef}></P2ChildRef>
        <button onClick={this.clickHandler}>Click Child Ref</button>
      </div>
    )
  }
}

export default ParentRef
import React, { Component } from 'react'

export class P2ChildRef extends Component {
    constructor(props) {
      super(props)
        this.childRef = React.createRef()
    }

    pleaseFocus(){
        this.childRef.current.focus()
    }
    

  render() {
    return (
        <div>
             <input type="text" ref={this.childRef}></input>
        </div>
    )
  }
}

export default P2ChildRef
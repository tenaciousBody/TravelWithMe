import React, { Component } from 'react'
import Child from './child';
import ChildComp from './childcomp'

//How to pass a function as a props from Parent component to child component
//How to pass an argument from child componet to Parent component

class parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Mr & Mrs Gupta"
      }
      this.showAlert = this.showAlert.bind(this)
    }

    showAlert(childName){
        alert(`Hello ${this.state.message} from ${childName}`)
    }
  render() {
    return (
      <div>
          <Child clickHandler={this.showAlert}></Child>
          <ChildComp clickHandler={this.showAlert}></ChildComp>
      </div>
    )
  }
}

export default parent
import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : ""
      }
    }
    changeUserName = (event) => {
        this.setState({username: event.target.value})
    }
    submitFormData = (event) => {
        alert(`username entered is ${this.state.username}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.submitFormData}>
            <div>
                <label>Username : </label>
                <input type="text" value={this.state.username} onChange ={this.changeUserName}></input>
                <button> Click here to submit the data </button>
            </div>
        </form>

    )
  }
}

export default Form
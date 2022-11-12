import axios from 'axios'
import React, { Component } from 'react'

export class FormPostRequest extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        userId:'',
        title:'',
        body: ''
      }
    }

    handleInputChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    submitFormData = (event) => {

        //alert(`${this.state.userId} ${this.state.title} ${this.state.body}`)
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            alert(`Response has been submitted successfully`)
            console.log({response})
        })
    }

  render() {
    return (
        <div>
            <form onSubmit={this.submitFormData}>
                <label>userId: </label>
                <input name="userId" type="text" value={this.state.userId} onChange={this.handleInputChanges}></input>
                <br></br>
                <label>title: </label>
                <input name="title" type="text" value={this.state.title} onChange={this.handleInputChanges}></input>
                <br></br>
                <label>body: </label>
                <input name="body" type="text" value={this.state.body} onChange={this.handleInputChanges}></input>
                <br></br>
                <button>Submit</button>
            </form>
      </div>
    )
  }
}

export default FormPostRequest
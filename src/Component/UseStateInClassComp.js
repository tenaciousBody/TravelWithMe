import React, { Component } from 'react'

//UseEffect hooks is used in functional components to perform side hooks, 
//it is a close replacement of componentDidMount, componentDidUpdate, componenetWillUnMount Method
//this class depicts the same functionality performed by a functional components using useState
 class UseStateInClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: ''
      }
    }

    componentDidMount() {
        document.title = `Button clicked ${this.state.count} times`
    }

    //Here documentTitle will re -intialized if previous state count and current state count is not same.
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            console.log("componentDidUpdate Method called")
            document.title = `Button clicked ${this.state.count} times`
        }

    }

  render() {
            //event is paased outside the setState method, where as prevState is passed inside the 
        //setState method
    return (
      <div>

        <input type="text" value={this.state.name} onChange={(event)=> this.setState({
            name: event.target.value
        })}></input>
        <button onClick={()=> this.setState(prevState => ({ count: prevState.count + 1})) }>Click Counter {this.state.count} times</button>
      </div>
    )
  }
}

export default UseStateInClassComp
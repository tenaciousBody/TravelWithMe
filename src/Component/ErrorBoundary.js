import React, { Component } from 'react'

//How to use ErrorBoundary in react to display a fallback UI in case a componet is failed to render 
//due to some error
class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    static getDerivedStateFromError(){
        return {
            hasError: true
        }
    }
  render() {
    if(this.state.hasError)
        return <h1>Soemthing wrong had happened</h1>
    return this.props.children
  }
}

export default ErrorBoundary
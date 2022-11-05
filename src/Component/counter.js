import React, { Component } from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    incrementValue(){
        // this.setState(
        //     {
        //         count : this.state.count + 1
        //     }, ()=> console.log('counter value', this.state.count)
        // );  
        this.setState((prevState)=> ({count: prevState.count + 1}))

    }

    updateValue(){
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();

    }
render(){
    // Syntax for destructuring an array
    const {name, type } = this.props;
    return(
        <div>
            <h3>{name} {type} - Counter {this.state.count}</h3>
            <button onClick = {() => this.updateValue()}>Increase Count</button>
        </div>
    );
}
}

export default Counter;
import React, {Component} from 'react';

//How to change the state of the component on button Click using setState Method
class Subscribe extends Component{

    constructor(){
        super();
        this.state = {
            message: "Welcome to My Channel"
        }
    }
    changeText(){
        this.setState({
            message: "Thanks for subscribing my channel"
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick= {() => this.changeText()}>Click here to subscribe</button>
            </div>

            )
    }
}

export default Subscribe;

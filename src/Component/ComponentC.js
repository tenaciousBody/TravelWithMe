import React, { Component } from 'react'
import { UserConsumer } from './context'

class ComponentC extends Component {
  render() {
    return (
        <UserConsumer>
         {(username) => {
           return  <div>Welcome {username}</div>
        }}
        </UserConsumer>
        

    )
  }
}

export default ComponentC
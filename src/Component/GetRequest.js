import React, { Component } from 'react'
import axios from 'axios'

//How to execute Get Http request using axios
export class GetRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => { this.setState({posts: response.data})
    })
    .catch(error => console.log("Facing issues in fetching data"))
    }
    
  render() {
    const { posts } = this.state
    return (
        <div>
            {
                posts.length ? 
                posts.map(post => <div key={post.id}>{post.title}</div>) 
                : null 
            }
        </div>
    )
  }

}

export default GetRequest
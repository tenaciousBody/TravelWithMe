import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ApiCallByHooks() {
    const [id, setId] = useState('')
    const [postId, setPostId] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        console.log(`title is ${postId}` )
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
                console.log(err)
            })
    }, [postId])

    const clickHandler = () => {
        setPostId(id)
    }

  return (
    <div>
     Enter Post Id :- <input type='text' value={id} onChange={(event) => setId(event.target.value)}></input>
     <button onClick={clickHandler}>Get Post Information</button>
     <br/>
     <br/>
     Post Information
     <label>{post.title}</label>
     <br></br>
     <label>{post.body}</label>

    </div>
  )
}

export default ApiCallByHooks
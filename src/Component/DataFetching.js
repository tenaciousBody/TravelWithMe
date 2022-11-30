import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

/*When to use useReducer() Hooks
*When we need to do state transitioning for an object 
*If state transitioning is happening for more than 3 or 4 state variables
*For related state transitioning
*Global state management
*Complex Business logic is involved*/
const initialState = {
    loading: true, 
    post: {}, 
    error: ''
}
const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post : action.payload,
                error: ''
            }
        case 'FETCH_FAILED': 
            return {
                loading: false,
                post : {},
                error: 'Something wrong has happend!'
            }
    }
}

function DataFetching() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch( error => {
            dispatch({type: 'FETCH_FAILED'})
        })
    }, [])
  return (
    <div>
        {state.loading ? 'Data Loading' : state.post.title}
        {state.error ? state.error: null}
        </div>
  )
}

export default DataFetching
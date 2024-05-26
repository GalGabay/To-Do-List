import React, { useEffect } from 'react'
import Create from './Create'
import axios from 'axios'

const Home = () => {
    const [todos, setTodos] = React.useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
  return (
    <div class="home">
        <h1>Todo List</h1>
        <Create />
        {
            todos.length === 0 ? <p>No tasks</p> :
            todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <input type="checkbox" />
                        <span>{todo.task}</span>
                        <button type="button">Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home
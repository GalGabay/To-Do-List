import React from 'react'
import Create from './Create'

const Home = () => {
    const [tasks, setTasks] = React.useState([])

  return (
    <div class="home">
        <h2>Todo List</h2>
        <Create />
        {
            tasks.length === 0 ? <p>No tasks</p> :
            tasks.map((task, index) => {
                return (
                    <div key={index}>
                        <input type="checkbox" />
                        <span>{task}</span>
                        <button type="button">Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home
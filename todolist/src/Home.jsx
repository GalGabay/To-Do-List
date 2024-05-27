import React, { useEffect } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'


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

    const handleCheckBoxAdd = (id) => {
        axios.put('http://localhost:3001/updateadd/' + id)
        .then(response => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleCheckBoxRemove = (id) => {
        axios.put('http://localhost:3001/updateremove/' + id)
        .then(response => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
        .then(response => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div class="home">
        <h1>Todo List</h1>
        <Create />
        <h3>In Progress</h3>
        {
            todos.length === 0 ? <p>No tasks</p> :
            
            todos.map((todo, index) => {
                return (
                    !todo.finished && 
                    <div className="task">
                        <div className="checkbox" onClick={() => handleCheckBoxAdd(todo._id)}>
                            
                            {todo.finished 
                                ? 
                            <BsFillCheckCircleFill className="icon" />
                                :
                            <BsCircleFill className="icon" />     }
                            {!todo.finished &&
                            <span>{todo.task}</span>}
                        </div>
                        <div>
                            <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)}/></span>
                        </div>
                    </div>
                    )})
        }
        <h3>Finished</h3>
        {
            todos.map((todo, index) => {
                return (
                    todo.finished && 
                    <div className="task">
                        <div className="checkbox" onClick={() => handleCheckBoxRemove(todo._id)}>
                            
                            {todo.finished 
                                ? 
                            <BsFillCheckCircleFill className="icon" />
                                :
                            <BsCircleFill className="icon" />     }
                            {todo.finished &&
                            <span>{todo.task}</span>}
                        </div>
                        <div>
                            <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)}/></span>
                        </div>
                    </div>
                )})
        }
                    
                   
                        

                
                

            
    </div>
  )
}

export default Home
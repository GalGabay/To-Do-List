import React from 'react'
import axios from 'axios'

const Create = () => {
  const [task, setTask] = React.useState()
  const handleClick = () => {
    axios.post('http://localhost:3001/task', {task: task})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
        <input class="form_input" type="text" name="" id="" onChange={(e) => {setTask(e.target.value)}} />
        <button class="form_button" type="button" onClick={handleClick}>Add</button>
    </div>
  )
}

export default Create
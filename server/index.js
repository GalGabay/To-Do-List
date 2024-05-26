const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./models/todo');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/todolist')

app.get('/get',(req,res) => { 
  TodoModel.find().then(result => res.json(result))
    .catch(err => res.json(err));
});

app.post('/task',(req,res) => {
  const tas = req.body.task;
  console.log(tas)
  TodoModel.create({
    task: tas
  }).then(result => res.json(result))
    .catch(err => res.json(err));
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})
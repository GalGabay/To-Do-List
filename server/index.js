const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.post('/task',(req,res) => {
  const task = req.body.task;
})

app.listen(3001, () => {
  console.log('Server is running on port 3000');
})
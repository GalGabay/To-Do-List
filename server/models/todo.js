const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String,
    finished: {
        type: Boolean,
        default: false
    }
});

const TodoModel = mongoose.model('TodoList', todoSchema);
module.exports = TodoModel;
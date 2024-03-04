const mongoose = require('mongoose');

const taskModel = mongoose.Schema({
  taskId: {
    type: Number,
    required: [true, 'A task must have an id.'],
  },
  title: {
    type: String,
    required: [true, 'A task must have a title.'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'A task must have a description.'],
    trim: true,
  },
  deadline: {
    type: String,
    required: [true, 'A task must have a deadline.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.model('task', taskModel);

module.exports = Task;

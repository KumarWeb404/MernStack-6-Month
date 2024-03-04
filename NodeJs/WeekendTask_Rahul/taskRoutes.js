const taskController = require('./taskController');
const express = require('express');

const router = express.Router();

router
  .route('/')
  .get(taskController.getAllTask)
  .post(taskController.createTask);

router
  .route('/:taskId')
  .all(taskController.validateId)
  .get(taskController.getTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;

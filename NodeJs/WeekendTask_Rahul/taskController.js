const Task = require('./taskModel');

exports.validateId = async (req, res, next) => {
  try {
    const isTaskId = Number(req.params.taskId) ? true : false;
    if (isTaskId) {
      const { taskId } = req.params;
      const totalTask = await Task.countDocuments();

      if (taskId > totalTask) {
        return res.status(404).json({
          status: 'fail',
          message: 'Invalid task id!',
        });
      }
    } else if (!isTaskId) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid task id!',
      });
    }
    next();
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const allTasks = await Task.find();
    const totalTasks = allTasks.length;

    res.status(200).json({
      status: 'success',
      total: totalTasks,
      data: {
        allTasks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const taskId = (await Task.countDocuments()) + 1;
    const newTask = await Task.create({ taskId, ...req.body });

    res.status(201).json({
      status: 'success',
      message: 'A task has been created!',
      data: {
        newTask,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.find(req.params);

    res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const updatedTask = await Task.findOneAndUpdate(
      { taskId },
      {
        title: req.body.title,
        description: req.body.description,
        deadline: req.body.deadline,
      },
      { new: true }
    );

    res.status(200).json({
      status: 'success',
      message: 'Task updated successfully!',
      data: {
        task: updatedTask,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    await Task.findOneAndDelete({ taskId });

    res.status(204).json({
      status: 'success',
      message: 'Task deleted successfully!',
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

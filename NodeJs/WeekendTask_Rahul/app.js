const taskRouter = require('./taskRoutes');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/tasks', taskRouter);

module.exports = app;

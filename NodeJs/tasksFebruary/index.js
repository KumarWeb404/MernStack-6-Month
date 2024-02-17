const express = require('express');
const studentList = require('./studentList');
const filterStudentCourse = require('./filterStudents');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/studentList', (req, res) => {
  res.send(studentList);
});

app.get('/studentMERN', (req, res) => {
  const output = filterStudentCourse(studentList, 'MERN');
  res.send(output);
});

app.get('/studentMEAN', (req, res) => {
  const output = filterStudentCourse(studentList, 'MEAN');
  res.send(output);
});

app.get('/name', (req, res) => {
  res.send('Rahul');
});
app.get('/technology', (req, res) => {
  res.send('MERN Stack');
});
app.get('/college', (req, res) => {
  res.send('Ramgarhia Institute of Engineering and technology');
});

//using Query string
app.get('/getStudents', (req, res) => {
  const { type, name } = req.query;
  const output = filterStudentCourse(studentList, type);
  res.send(output);
});

//using URL params
app.get('/getStudents/:type/:name', (req, res) => {
  const { type } = req.params;
  const output = filterStudentCourse(studentList, type);
  res.send(output);
});
app.listen(5000, (err) => {
  err ? console.log('Something went wrong') : console.log('Running');
});

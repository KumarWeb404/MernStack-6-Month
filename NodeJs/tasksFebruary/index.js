const express = require('express');
const studentList = require('./studentList');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/studentList', (req, res) => {
  res.send(studentList);
});

app.get('/studentMERN', (req, res) => {
  const studentMERN = studentList.filter((el) => el.course === 'MERN');
  res.send(studentMERN);
});

app.get('/studentMEAN', (req, res) => {
  const studentMEAN = studentList.filter((el) => el.course === 'MEAN');
  res.send(studentMEAN);
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

app.listen(5000, (err) => {
  err ? console.log('Something went wrong') : console.log('Running');
});

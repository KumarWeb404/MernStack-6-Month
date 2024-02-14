const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/name', (req, res) => {
  res.send('Rahul');
});
app.get('/technology', (req, res) => {
  res.send('Mern Stack');
});
app.get('/college', (req, res) => {
  res.send('Ramgarhia Institute of Engineering and technology');
});

app.listen(5000, (err) => {
  err ? console.log('Something went wrong') : console.log('Running');
});
